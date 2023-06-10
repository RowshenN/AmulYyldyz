import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../../context/Context";

import "./Section6.css";
import img from "../../../images/bathropes.png";

const Section6 = () => {
  const { dil } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="section6Conatiner">
      <div className="section6div">
        <div className="section6TextDiv">
          <h3 className="section6h3" data-aos="fade-up">
            {dil === "RU"
              ? "В нашем банный халате, вас встретит подобная облаку мягкость, которая мгновенно окутает вас, заставляя вас чувствовать себя в комфорте."
              : "In our bathrobe, you will be greeted with a cloud-like softness that instantly envelops you, making you feel comfortable."}
          </h3>
          <p className="section6text" data-aos="fade-down">
            {dil === "RU"
              ? "Побалуйте себя роскошными банными халатами, изготовленными из мягчайшего хлопка высокого качества. Откройте для себя новый уровень релаксации и позвольте нашим халатам стать вашим элементом комфорта. Откройте для себя идеальное сочетание роскоши, стиля и долговечности и превратите ежедневное купание в омолаживающее приключение."
              : "Indulge in luxurious bathrobes made from the softest, highest quality cotton. Discover a new level of relaxation and let our bathrobes be your comfort piece. Discover the perfect combination of luxury, style and durability and turn your daily bath into a rejuvenating adventure."}
          </p>
          <button
            className="section6button"
            data-aos="zoom-out"
            onClick={() => navigate("/products")}
          >
            <span className="section6butontext">
              {dil === "RU" ? "Перейти к халатам" : "Go to bathrobes"}
            </span>
          </button>
        </div>

        <div className="section6ImgDiv" data-aos="fade-left">
          <img src={img} alt="img" className="section6Img" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
