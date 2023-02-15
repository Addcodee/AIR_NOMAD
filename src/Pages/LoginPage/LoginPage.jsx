import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import "./LoginPage.css";

const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { handleRegister, error, loading, setError, handleLogin } =
    useAuth();

  function handleSave(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !password2.trim()) {
      alert("заполните все поля");
    } else {
      let formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password2", password2);
      console.log(formData);
      handleRegister(formData);
    }
  }

  const login = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("error");
    } else {
      let formData = new FormData();

      formData.append("email", email);
      formData.append("password", password);

      handleLogin(formData, email);
    }
  };

  useEffect(() => {
    setError(false);
  }, []);

  const [toggle, setToggle] = useState(false);
  return (
    <div className="center">
      <section className={toggle ? "wrapper active" : "wrapper"}>
        <div onClick={() => setToggle(false)} className="form signup">
          <header>Register</header>
          {error ? <h2>{error}</h2> : null}
          <form action="submit" onSubmit={handleSave}>
            <div className="name__forms">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First name"
                required
              />
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last name"
                required
              />
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email address"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
            <input
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              required
            />
            <button type="submit">Register</button>
          </form>
        </div>

        <div onClick={() => setToggle(true)} className="form login">
          <header>Login</header>
          <form onSubmit={(e) => login(e)}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email address"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
            <a href="#">Forgot password?</a>
            <button type="submit">Login</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
