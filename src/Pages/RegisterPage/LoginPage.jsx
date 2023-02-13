import React, { useState } from "react";
import "./RegisterPage.css";
import { SlUser } from "react-icons/sl";

const LoginPage = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="center">
      <section className={toggle ? "wrapper active" : "wrapper"}>
        <div onClick={() => setToggle(false)} className="form signup">
          <header>Register</header>
          <form action="#">
            <input type="text" placeholder="Full name" required />
            <input type="text" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
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

export default LoginPage;
