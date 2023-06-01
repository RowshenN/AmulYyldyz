import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Favorites.css";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import Pagename from "../../components/pagename/Pagename";
import { Context } from "../../context/Context";
import { BASE_URL2 } from "../../utils/axiosIntance";

AOS.init({ duration: 700, delay: 150 });

const Favorites = () => {
  const { dil } = useContext(Context);
  const navigate = useNavigate();
  const favProducts = JSON.parse(localStorage.getItem("FavHarytlar"));
  return (
    <div>
      <Navigation />

      <div className="navigasiyaDiv" data-aos="fade-right">
        <h2 className="navigasiya">
          <span onClick={() => navigate("/homepage")}>
            {dil === "RU" ? "Главная" : "Homepage"}
          </span>{" "}
          /{" "}
          <span onClick={() => navigate("/favourites")}>
            {dil === "RU" ? "Избранное" : "Favourites"}
          </span>
        </h2>
      </div>

      <div className="pagename_div" data-aos="fade-left">
        <Pagename head={dil === "RU" ? "Избранное" : "Favourites"} />
      </div>
      <div className="favoritesContainer">
        <div className="favoritesCardDiv">
          {favProducts?.map((item, i) => {
            return (
              <div
                key={"pro" + item.name_en}
                className="product_Div !w-fit"
                data-aos="fade-right"
              >
                <Card
                  selected={true}
                  id={item.id}
                  data={item}
                  surat={BASE_URL2 + item?.Imgs[0]?.img}
                  name={dil === "RU" ? item?.name_ru : item?.name_en}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Favorites;
