import React, { useContext, useState } from "react";

import "./Section4.css";
import { Context } from "../../../context/Context";

const Section4 = () => {
  const { dil } = useContext(Context);
  const [production, setProduction] = useState(0);
  // const count = ()=>{
  //     setTimeout(()=>{
  //         setProduction(production+=125);
  //     },500);
  //     if(production<5000){
  //         count();
  //     }
  // }
  // count();

  const counter = (num) => {
    for (let i = 0; i <= num; i++) {
      return num;
    }
    setTimeout(() => {
      setProduction(num);
    }, 500);
  };

  counter(5000);

  return (
    <div>
      <div className="Section4container">
        <div className="section4Div">
          <div className="section4text1" data-aos="fade-up">
            <h1 className="section4H1">5000</h1>
            <p className="section4p">
              {dil === "RU" ? "Ежемесячно производство" : "Monthly production"}
            </p>
          </div>

          <div className="section4text2" data-aos="zoom-out">
            <h1 className="section4H1">
              +10 {dil === "RU" ? "годы" : "years"}
            </h1>
            <p className="section4p">
              {dil === "RU" ? "Опыт работы в сфере" : "Experience in field"}
            </p>
          </div>

          <div className="section4text3" data-aos="fade-down">
            <h1 className="section4H1">1000</h1>
            <p className="section4p">
              {dil === "RU"
                ? "Минимальный размер заказа"
                : "Minimum order size"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
