import React, { useContext } from "react";

import "./Part1.css";
import { Context } from "../../../context/Context";

const Part1 = () => {
  const { dil } = useContext(Context);
  return (
    <div>
      <div className="section1Container">
        <div className="aboutHeaderDIv">
          <h2 className="aboutHeaderText" data-aos="fade-down">
            {dil === "RU"
              ? " Компания «Амуль йылдызы»  Предлагает вашему вниманию услуги экспорта текстиля из Туркменистана от производителей Ашхабадского текстильного комплекса и Текстильного комплекса им. Туркменбаши. В ассортименте имеются  изделия такие как — полотенца, банные халаты, постельное бельё из 100% хлопка высокого качества, так же предоставлем своим партнёрам низкие цены при высоком качестве товара. "
              : " The company «Amul Yildyzy» Offers to your attention the services of exporting textiles from Turkmenistan from the manufacturers of the Ashgabat Textile Complex and the Textile Complex named after Turkmenbashi. The assortment includes products such as towels, bathrobes, bed linen made of high quality 100% cotton, we will also provide our partners with low prices with high quality goods."}
          </h2>
          {/* <h2 className="aboutHeaderText aboutHeaderText2" data-aos="fade-up">
            {" "}
            {dil === "RU"
              ? "Мы специализируемся на производстве высококачественных текстильных изделий, которые с гордостью производятся в Туркменистане. Наша компания зарегистрирована в"
              : "We specialize in producing high-quality textile products that are proudly made in Turkmenistan. Ourcompany is registered with the"}{" "}
            <span className="part1Highlited">
              {dil === "RU" ? "Министерство Финансов" : "Ministry of Finance"}
            </span>{" "}
            {dil === "RU" ? "и" : "and"}
            <span className="part1Highlited">
              {" "}
              {dil === "RU"
                ? "Экономика Туркменистана"
                : "Economy of Turkmenistan"}
            </span>
            ,{" "}
            {dil === "RU"
              ? "и наш регистрационный номер №15483596."
              : "and our registration number is №15483596."}
          </h2> */}
        </div>
      </div>
    </div>
  );
};

export default Part1;
