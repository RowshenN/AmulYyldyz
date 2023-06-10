import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./Section3.css";
import img from "../../../images/section3.png";
import { Context } from "../../../context/Context";

const Section3 = () => {
  const { dil } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="section3Conatiner">
      <div className="section3div">
        <div className="section3TextDiv">
          <h3 className="section3h3" data-aos="fade-up">
            {dil === "RU"
              ? "Наше постельное бельё изготовлено из материалов премиум-класса обеспечивающий  комфортный и спокойный сон."
              : "Our bed linen is made from premium materials for a comfortable and restful sleep."}
          </h3>
          <p className="section3text" data-aos="fade-down">
            {dil === "RU"
              ? "Мы предлагаем различные стили и размеры в соответствии с вашими потребностями. Наше постельное бельё доступно в различных цветах и ​​​​узорах, поэтому вы можете найти идеальное сочетание для декора вашей спальни. При надлежащем уходе наши простыни сохранят свою мягкость и цвет на долгие годы."
              : "We offer a variety of styles and sizes to suit your needs. Our bedding is available in a variety of colors and patterns so you can find the perfect match for your bedroom decor. With proper care, our sheets will retain their softness and color for years to come."}
          </p>
          <button
            className="section3button"
            data-aos="zoom-out"
            onClick={() => navigate("/products")}
          >
            <span className="section3butontext">
              {dil === "RU" ? "Перейти к простыням" : "Go to bedsheets"}
            </span>
          </button>
        </div>

        <div className="section3ImgDiv" data-aos="fade-left">
          <img src={img} alt="img" className="section3Img" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
