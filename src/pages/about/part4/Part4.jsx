import React, { useContext } from "react";

import "./Part4.css";
import aboutImg from "../../../images/halat.png";
import { Context } from "../../../context/Context";

const Part4 = () => {
  const { dil } = useContext(Context);
  return (
    <div className="part4Container">
      <div className="part4Div">
        <div className="part4TextDiv1">
          <p className="part3text" data-aos="fade-right">
            {dil === "RU"
              ? "«Амуль Йылдызы» — экспортер текстильной продукции, базирующаяся в Ашхабаде, Туркменистан. Мы специализируемся на экспорте высококачественных текстильных изделий, которые производятся в Туркменистане. "
              : "Amul Yildyzy is a textile exporter based in Ashgabat, Turkmenistan. We specialize in the export of high quality textile products that are produced in Turkmenistan. "}
          </p>
          <img
            src={aboutImg}
            alt="img"
            className="aboutimg1"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
};

export default Part4;
