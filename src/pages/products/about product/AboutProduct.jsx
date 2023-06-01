import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./AboutProduct.css";
import Navigation from "../../../components/navigation/Navigation";
import Footer from "../../../components/footer/Footer";
import big from "../../../images/big.png";
import small from "../../../images/small.png";
import FilterInfo from "./filterInfo/FilterInfo";
import heart from "../../../images/simple-heart.svg";
import redheart from "../../../images/redheart.svg";
import { Context } from "../../../context/Context";
import { BASE_URL2, axiosInstance } from "../../../utils/axiosIntance";

const AboutProduct = (props) => {
  const { id } = useParams();
  const [product, seProduct] = useState({});
  const [selectedImg, setSelectedImg] = useState(null);
  const [added, setAdded] = useState(true);
  const { dil, AddToFav } = useContext(Context);
  const navigate = useNavigate();
  AOS.init({ duration: 600, delay: 100 });

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    axiosInstance
      .get("/api/product/" + id)
      .then((data) => {
        console.log(data.data);
        seProduct(data.data);
        setSelectedImg(BASE_URL2 + data.data?.Imgs[0]?.img);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navigation />

      <div className="navigasiyaDiv">
        <h2 className="navigasiya" data-aos="fade-down">
          <span onClick={() => navigate("/homepage")}>
            {dil === "RU" ? "Главная" : "Homepage"}
          </span>{" "}
          /{" "}
          <span onClick={() => navigate("/products")}>
            {dil === "RU" ? "Продукты" : "Products"}
          </span>{" "}
          / Product page
        </h2>
      </div>

      <div className="aboutproductContainer">
        <div className="aboutproductDiv">
          <div className="aboutImagesDiv">
            <img
              src={selectedImg ? selectedImg : ""}
              alt="big"
              className="bigImg"
              data-aos="fade-right"
            />
            <div className="smallImageDiv" data-aos="fade-up">
              {product?.Imgs?.map((item, i) => {
                return (
                  <img
                    onClick={() => setSelectedImg(BASE_URL2 + item.img)}
                    key={"img" + item.img}
                    src={BASE_URL2 + item.img}
                    alt="small"
                    className="smallimg"
                  />
                );
              })}
            </div>
          </div>

          <div className="aboutInformationDiv">
            <h1 className="aboutHeader" data-aos="fade-left">
              {dil === "RU" ? product?.name_ru : product?.name_en}
            </h1>

            <div className="infoDiv">
              <div className="infodiv1" data-aos="zoom-out-left">
                <FilterInfo
                  name={dil === "RU" ? "Категория:" : "Category:"}
                  text={
                    dil === "RU"
                      ? product?.Category?.name_ru
                      : product?.Category?.name_en
                  }
                />
                <FilterInfo
                  name={dil === "RU" ? "Код продукта:" : "Product code:"}
                  text={product?.code}
                />
              </div>

              <div className="infodiv1" data-aos="zoom-out-right">
                <FilterInfo
                  name={dil === "RU" ? "Материал:" : "Material:"}
                  text={
                    dil === "RU"
                      ? product?.Material?.name_ru
                      : product?.Material?.name_en
                  }
                />
                <FilterInfo
                  name={dil === "Ru" ? "Цвет:" : "Color:"}
                  text={
                    dil === "RU"
                      ? product?.Color?.name_ru
                      : product?.Color?.name_en
                  }
                />
              </div>
            </div>

            <div className="infoTextDiv" data-aos="fade-left">
              <p className="infoText">
                {dil === "RU"
                  ? product?.description_ru
                  : product.description_en}
              </p>
              <p className="infoText">
                {/* Размеры на односпальное постельное белье: Наволочка: 50 x 70
                Пододеяльник: 160 x 220 Простыня: 160 x 240 Размеры на
                двуспальное постельное белье: Наволочка: 50 x 70 Пододеяльник:
                200 x 220 Простыня: 240 x 260 */}
                {dil === "RU" ? product?.razmer_ru : product.razmer_en}
              </p>
            </div>

            <div
              className="infoButonDiv"
              onClick={() => {
                setAdded(!added);
                AddToFav(product);
              }}
            >
              {added ? (
                <img src={heart} alt="heart" className="heart-icon" />
              ) : (
                <img src={redheart} alt="heart" className="heart-icon" />
              )}
              <button className="infobuton">
                <span className="infobutonText">
                  {dil === "RU" ? "Добавить в избранное" : "Add to favourites"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutProduct;
