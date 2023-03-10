import axios from "axios";
import React, {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const API = "http://34.95.167.109/api/v1";

const INIT_STATE = {
  products: [],
  categories: [],
  countries: [],
  oneProduct: {},
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results, // если не будет работать , удалить results
        pages: Math.ceil(action.payload.count / 4),
      };

    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };

    case "GET_COUNTRIES":
      return { ...state, countries: action.payload };

    case "GET_ONE_PRODUCT":
      return {
        ...state,
        oneProduct: action.payload,
      };

    default:
      return state;
  }
}

const ProductContextProvider = ({ children }) => {
  const [lang, setLang] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const location = useLocation();

  const [guestCount, setGuestCount] = useState(1);
  const [bedroomsCount, setBedroomsCount] = useState(1);
  const [bedsCount, setBedsCount] = useState(1);
  const [bathroomsCount, setBathroomsCount] = useState(1);

  const [houseCategory, setHouseCategory] = useState("");

  const [countryCategory, setCountryCategory] = useState("");

  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const [loader, setLoader] = useState(false);

  // для изменения стейтов на кол-во гостей, спален, кроватей, ванных

  const incrementGuestCount = () => {
    if (guestCount < 10) {
      setGuestCount(guestCount + 1);
    }
  };

  const decrementGuestCount = () => {
    if (guestCount > 1) {
      setGuestCount(guestCount - 1);
    }
  };

  const incrementBedroomsCount = () => {
    if (bedroomsCount < 6) {
      setBedroomsCount(bedroomsCount + 1);
    }
  };

  const decrementBedroomsCount = () => {
    if (bedroomsCount > 1) {
      setBedroomsCount(bedroomsCount - 1);
    }
  };

  const incrementBedsCount = () => {
    if (bedsCount < 10) {
      setBedsCount(bedsCount + 1);
    }
  };

  const decrementBedsCount = () => {
    if (bedsCount > 1) {
      setBedsCount(bedsCount - 1);
    }
  };

  const incrementBathroomsCount = () => {
    if (bathroomsCount < 6) {
      setBathroomsCount(bathroomsCount + 1);
    }
  };

  const decrementBathroomsCount = () => {
    if (bathroomsCount > 1) {
      setBathroomsCount(bathroomsCount - 1);
    }
  };

  const getProducts = async (value = "") => {
    try {
      const res = await axios.get(
        `${API}/product/?search=${value}&&category=${houseCategory}&&country_category=${countryCategory}`
      );

      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const res = await axios.get(`${API}/categories/`);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getCountries = async () => {
    try {
      const res = await axios.get(`${API}/country-categories/`);
      dispatch({
        type: "GET_COUNTRIES",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //! CREATE

  const createProduct = async (newProduct) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.post(`${API}/product/`, newProduct, config);
      navigate("/houses");
    } catch (error) {
      console.log(error);
    }
  };

  // //! DELETE

  const deleteProduct = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.delete(`${API}/product/${id}/`, config);

      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // //! GET ONE PRODUCT

  const getOneProduct = async (id) => {
    try {
      setLoader(true);

      let res = await axios.get(`${API}/product/${id}/`);

      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  // //! UPDATE PRODUCT

  const updateProduct = async (id, editedProduct) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      let res = await axios.patch(
        `${API}/product/${id}/`,
        editedProduct,
        config
      );

      navigate("/houses");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    getProducts,
    products: state.products,
    // pages: state.pages,

    getCategories,
    categories: state.categories,

    getCountries,
    countries: state.countries,

    createProduct,
    deleteProduct,

    // edit
    getOneProduct,
    oneProduct: state.oneProduct,
    updateProduct,

    lang,
    setLang,
    location,

    incrementGuestCount,
    decrementGuestCount,
    guestCount,

    incrementBedroomsCount,
    decrementBedroomsCount,
    bedroomsCount,

    incrementBedsCount,
    decrementBedsCount,
    bedsCount,

    incrementBathroomsCount,
    decrementBathroomsCount,
    bathroomsCount,

    openFilter,
    setOpenFilter,

    houseCategory,
    setHouseCategory,

    countryCategory,
    setCountryCategory,

    pages: state.pages,
  };

  return (
    <productContext.Provider value={values}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
