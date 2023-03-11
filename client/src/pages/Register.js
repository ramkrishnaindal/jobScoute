import React from "react";
import Logo from "../assets/images/Logo.png";
import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import "./Register.css";
import { FormRow, Alert } from "../components";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  const {
    user,
    isLoading,
    showAlert,
    displayAlert,
    registerUser,
    loginUser,
    setupUser,
  } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    console.log(values);
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successfull! Redirecting...",
      });
    } else {
      setupUser(
        {
          currentUser,
          endPoint: "register",
          alertText: "User Created! Redirecting...",
        },
        3000
      );
    }
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      });
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page form-wrapper">
      <form className="form-abc" onSubmit={onSubmit}>
        <img src={Logo} alt="JobScoute" className="logo " />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}

        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
        </button>

        <button
          type="button"
          className="btn btn-block btn-hipster "
          disabled={isLoading}
          onClick={() => {
            setupUser({
              currentUser: { email: "nil12@gmail.com", password: "secret" },
              endPoint: "login",
              alertText: "Login Successfull! Redirecting...",
            });
          }}
        >
          {isLoading ? "Loading...." : "demo app"}
        </button>

        <p>
          {values.isMember ? "Not a member yet ?" : "Already a member"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
