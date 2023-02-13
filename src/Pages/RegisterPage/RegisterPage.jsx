import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { handleRegister, error, loading, setError } = useAuth();

  function handleSave(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("заполните все поля");
    } else if (fullName.split(" ").length != 2) {
      alert("введите имя и фамилию");
    } else {
      let formData = new FormData();
      formData.append("first_name", fullName.split(" ")[0]);
      formData.append("last_name", fullName.split(" ")[1]);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRegister(formData);
    }
  }

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
            <input
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full name"
              required
            />
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
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              required
            />
            <input type="submit" value="Register" />
          </form>
        </div>

        <div onClick={() => setToggle(true)} className="form login">
          <header>Login</header>
          <form action="#">
            <input type="text" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <a href="#">Forgot password?</a>
            <input type="submit" value="Login" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
