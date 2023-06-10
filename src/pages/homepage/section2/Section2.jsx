import React, { useContext } from "react";

import "./Section2.css";
import { Context } from "../../../context/Context";

const Section2 = () => {
  const { dil } = useContext(Context);
  return (
    <div className="section2Div">
      <div className="section2Container">
        <div
          className="section2HeaderDiv"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-ease="ease"
        >
          <h1 className="section2HeaderText">
            {dil === "RU"
              ? "«Амуль Йылдызы» — ведущий экспортер полотенец и постельного белья премиум-класса в Туркменистане."
              : "Amul Yyldyzy is the leading exporter of premium class towels and bed linen in Turkmenistan."}
          </h1>
        </div>

        <div className="section2TextContainer">
          <div className="textDiv1" data-aos="fade-up" data-aos-ease="ease">
            <h2 className="section2H2">01</h2>
            <h3 className="section2H3">
              {dil === "RU" ? "Качество:" : "Quality:"}
            </h3>
            <p className="section2P">
              {dil === "RU"
                ? "Наше постельное бельё изготовлено из материалов премиум-класса обеспечивающий  комфортный и спокойный сон."
                : "Our bed linen is made from premium materials for a comfortable and restful sleep."}
            </p>
          </div>

          <div className="textDiv2" data-aos="zoom-out" data-aos-ease="ease">
            <h2 className="section2H2">02</h2>
            <h3 className="section2H3">
              {dil === "RU" ? "Устойчивость:" : "Sustainability:"}
            </h3>
            <p className="section2P">
              {dil === "RU"
                ? "Экологичность и ответственный подход к выбору материалов."
                : "Eco-friendly practices and responsible sourcing of materials."}
            </p>
          </div>

          <div className="textDiv3" data-aos="fade-down" data-aos-ease="ease">
            <h2 className="section2H2">03</h2>
            <h3 className="section2H3">
              {dil === "RU"
                ? "Удовлетворенность клиентов:"
                : "Customer satisfaction:"}
            </h3>
            <p className="section2P">
              {dil === "RU"
                ? "Исключительный сервис и быстрая и надежная доставка по всему миру."
                : "Exceptional service and fast, reliable shipping worldwide."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
