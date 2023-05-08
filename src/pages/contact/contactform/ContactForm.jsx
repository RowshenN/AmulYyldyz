import React, { useContext, useEffect, useState } from "react";

import "./ContactForm.css";
import mail from "../../../images/mail.svg";
import phone from "../../../images/phone.svg";
import location from "../../../images/location.svg";
import { Context } from "../../../context/Context";
import { axiosInstance } from "../../../utils/axiosIntance";

const ContactForm = (props) => {
  const { dil } = useContext(Context);
  const [config, setConfig] = useState([]);
  useEffect(() => {
    getConfig();
  }, []);
  const getConfig = () => {
    axiosInstance
      .get("/api/config/all")
      .then((res) => {
        console.log(res.data);
        setConfig(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="contactContainer">
      <h1 className="contactHeaderText" data-aos="fade-up">
        {dil === "RU"
          ? "Готовы улучшить свое пространство с помощью нашей продукции?"
          : "Ready to elevate your space with our products?"}{" "}
        <br />
        {dil === "RU"
          ? "Свяжитесь с нами, и давайте начнем."
          : "Reach out to us and let's get started."}
      </h1>

      <div className="contactEquipment" data-aos="fade-down">
        <div className="equipmentDIv" data-aos="fade-up">
          <img src={phone} alt="phone" className="contactIcon" />
          <p className="equipmentText">{config[0]?.phone}</p>
        </div>

        <div className="equipmentDIv" data-aos="fade-up">
          <img src={location} alt="location" className="contactIcon" />
          <p className="equipmentText">
            {dil === "RU" ? config[0]?.address_ru : config[0]?.address_en}
          </p>
        </div>

        <div className="equipmentDIv" data-aos="fade-down">
          <img src={mail} alt="mail" className="contactIcon" />
          <p className="equipmentText">{config[0]?.email}</p>
        </div>
      </div>

      <div className="contactForm">
        <div className="contactformDIv" data-aos="zoom-in-down">
          <input
            type="text"
            placeholder={dil === "RU" ? "Полное имя" : "Full name"}
            className="contactInput"
            data-aos="zoom-in"
          />
          <input
            type="text"
            placeholder={dil === "RU" ? "Номер телефона" : "Phone number"}
            className="contactInput"
            data-aos="fade-up"
          />
          <input
            type="email"
            placeholder={
              dil === "RU" ? "Адрес электронной почты" : "Email address"
            }
            className="contactInput"
            data-aos="zoom-out"
          />
          <textarea
            type="text"
            placeholder={dil === "RU" ? "Ваше сообщение" : "Your message"}
            className="contactMessage"
            data-aos="zoom-out-down"
          />
          <button className="ContactButton" data-aos="fade-down">
            <span className="contactbutonText">
              {dil === "RU" ? "Отправить сообщение" : "Send Message"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
// Ready to elevate your space with our products? <br />Reach out to us and let's get started.
export default ContactForm;
