import React, { useEffect, useRef, useState } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import "./FilterModal.css";
import { RxCross1 } from "react-icons/rx";
import house from "../../assets/house.png";
import apartment from "../../assets/apartment.png";
import yurt from "../../assets/yurt.png";
import camp from "../../assets/camp.png";
import glamp from "../../assets/glamp.png";
import switzerland from "../../assets/switzerland.png";
import kyrgyzstan from "../../assets/kyrgyzstan.png";
import canada from "../../assets/canada.png";
import italy from "../../assets/italy.png";
import bali from "../../assets/bali.png";

const FilterModal = () => {
  const { openFilter, setOpenFilter } = useProduct();

  const [selectedHouse, setSelectedHouse] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState(false);
  const [selectedYurt, setSelectedYurt] = useState(false);
  const [selectedCamp, setSelectedCamp] = useState(false);
  const [selectedGlamp, setSelectedGlamp] = useState(false);

  const [selectedSwitzerland, setSelectedSwitzerland] =
    useState(false);
  const [selectedItaly, setSelectedItaly] = useState(false);
  const [selectedKyrgyzstan, setSelectedKyrgyzstan] = useState(false);
  const [selectedCanada, setSelectedCanada] = useState(false);
  const [selectedBali, setSelectedBali] = useState(false);

  return (
    <div
      className={
        openFilter ? "filter__modal-open" : "filter__modal-close"
      }
    >
      <div
        className={
          openFilter
            ? "filter__modal__container-open scale-up-ver-top"
            : "filter__modal__container-close "
        }
      >
        <div className="filter__modal__header">
          <button onClick={() => setOpenFilter(false)}>
            <RxCross1 style={{ width: "1.5em", height: "1.5em" }} />
          </button>
          <h2>Filters</h2>
        </div>
        {openFilter ? <hr /> : null}
        {openFilter ? (
          <div className="house__category">
            <h2>House Category</h2>
            <div className="house__category-container">
              <div
                onClick={() => setSelectedHouse(!selectedHouse)}
                className={selectedHouse ? "house__clicked" : "house"}
              >
                <img
                  className="house__img"
                  src={house}
                  alt={"house"}
                />
                <span>House</span>
              </div>

              <div
                onClick={() =>
                  setSelectedApartment(!selectedApartment)
                }
                className={
                  selectedApartment ? "house__clicked" : "house"
                }
              >
                <img
                  className="house__img"
                  src={apartment}
                  alt={"apartment"}
                />
                <span>Apartment</span>
              </div>

              <div
                onClick={() => setSelectedYurt(!selectedYurt)}
                className={selectedYurt ? "house__clicked" : "house"}
              >
                <img className="house__img" src={yurt} alt={"yurt"} />
                <span>Yurt</span>
              </div>

              <div
                onClick={() => setSelectedCamp(!selectedCamp)}
                className={selectedCamp ? "house__clicked" : "house"}
              >
                <img className="house__img" src={camp} alt={"camp"} />
                <span>Auto-House</span>
              </div>

              <div
                onClick={() => setSelectedGlamp(!selectedGlamp)}
                className={selectedGlamp ? "house__clicked" : "house"}
              >
                <img
                  className="house__img"
                  src={glamp}
                  alt={"glamp"}
                />
                <span>Glamping</span>
              </div>
            </div>
          </div>
        ) : null}
        {/* !  =================================! */}
        {openFilter ? (
          <div className="country__category">
            <h2>Country Category</h2>
            <div className="country__category-container">
              <div
                onClick={() =>
                  setSelectedSwitzerland(!selectedSwitzerland)
                }
                className={
                  selectedSwitzerland ? "country__clicked" : "country"
                }
              >
                <img
                  className="country__img"
                  src={switzerland}
                  alt={"switzerland"}
                />
                <span>Switzerland</span>
              </div>

              <div
                onClick={() => setSelectedItaly(!selectedItaly)}
                className={
                  selectedItaly ? "country__clicked" : "country"
                }
              >
                <img
                  className="country__img"
                  src={italy}
                  alt={"italy"}
                />
                <span>Italy</span>
              </div>

              <div
                onClick={() =>
                  setSelectedKyrgyzstan(!selectedKyrgyzstan)
                }
                className={
                  selectedKyrgyzstan ? "country__clicked" : "country"
                }
              >
                <img
                  className="country__img"
                  src={kyrgyzstan}
                  alt={"kyrgyzstan"}
                />
                <span>Kyrgyzstan</span>
              </div>

              <div
                onClick={() => setSelectedCanada(!selectedCanada)}
                className={
                  selectedCanada ? "country__clicked" : "country"
                }
              >
                <img
                  className="country__img"
                  src={canada}
                  alt={"canada"}
                />
                <span>Canada</span>
              </div>

              <div
                onClick={() => setSelectedBali(!selectedBali)}
                className={
                  selectedBali ? "country__clicked" : "country"
                }
              >
                <img
                  className="country__img"
                  src={bali}
                  alt={"bali"}
                />
                <span>Bali</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FilterModal;
