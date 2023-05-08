import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Footer.css";

import logo from "../../images/nav-logo.svg";
import mail from "../../images/mail.svg";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../utils/axiosIntance";

const Footer = () => {
  const { dil } = useContext(Context);
  const navigate = useNavigate();
  const pathN = useLocation();
  const [email, setEmail] = useState("");
  const submitEmail = () => {
    email.length > 0 &&
      axiosInstance
        .post("/api/subscribe/create", {
          email: email,
        })
        .then((res) => {
          console.log(res.data);
          setEmail("");
        })
        .catch((err) => {
          console.log(err);
        });
  };
  return (
    <div>
      <div className="footerDiv">
        <div className="footerLogoDiv">
          <img
            src={logo}
            alt="logo"
            className="footerlogo"
            onClick={() => navigate("/homepage")}
          />
        </div>

        <div className="footerNavDIv">
          <p
            className={
              pathN.pathname === "/homepage"
                ? "active footerNavItem"
                : " footerNavItem "
            }
            onClick={() => navigate("/homepage")}
          >
            {dil === "RU" ? "Главная" : "Homepage"}
          </p>
          <p
            className={
              pathN.pathname === "/products"
                ? "active footerNavItem"
                : " footerNavItem "
            }
            onClick={() => navigate("/products")}
          >
            {dil === "RU" ? "Продукты" : "Products"}
          </p>
          <p
            className={
              pathN.pathname === "/favourites"
                ? "active footerNavItem"
                : " footerNavItem "
            }
            onClick={() => navigate("/favourites")}
          >
            {dil === "RU" ? "Избранное" : "Favourites"}
          </p>
          <p
            className={
              pathN.pathname === "/contact"
                ? "active footerNavItem"
                : " footerNavItem "
            }
            onClick={() => navigate("/contact")}
          >
            {dil === "RU" ? "Связаться с нами" : "Contact us"}
          </p>
          <p
            className={
              pathN.pathname === "/about"
                ? "active footerNavItem"
                : " footerNavItem "
            }
            onClick={() => navigate("/about")}
          >
            {dil === "RU" ? "О нас" : "About us"}
          </p>
        </div>

        <p className="footerText">
          {dil === "RU"
            ? "Подпишитесь на нашу рассылку"
            : "Subscribe for our newsletter"}
        </p>

        <div className="footerFormDiv" style={{ position: "relative" }}>
          <div action="">
            <img
              src={mail}
              alt="mail"
              style={{
                position: "absolute",
                left: "2%",
                top: "30%",
                cursor: "pointer",
              }}
            />
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder={dil === "RU" ? "Э-почта" : "Email address"}
              className="footerInput"
              style={{ paddingLeft: "50px", fontSize: "18px" }}
            />
            <button className="footerButton" onClick={() => submitEmail()}>
              <span className="footerButtontext">
                {dil === "RU" ? "Отправить" : "Submit"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
