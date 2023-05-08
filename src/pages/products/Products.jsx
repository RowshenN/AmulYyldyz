import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Products.css";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import FilterText from "./filterText/FilterText";
import Pagename from "../../components/pagename/Pagename";
import { Context } from "../../context/Context";
import icon from "../../images/filter-icon.svg";
import { Drawer } from "antd";
import DrawerItem from "./drawerItem/DrawerItem";
import DrawerHeader from "./DrawerHeader/DrawerHeader";
import Filter_items from "./drawer_filter_items/Filter_items";
import CheckBox from "../../components/checked/checkbox";
import { axiosInstance } from "../../utils/axiosIntance";

const Products = (props) => {
  const { dil } = useContext(Context);
  const navigate = useNavigate();
  const [Color, setColor] = useState([]);
  const [filterColor, setFilterColor] = useState(Color);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [openCategory, setOpenCategory] = useState(false);
  const [openWidth, setOpenWidth] = useState(false);
  const [openLength, setOpenLength] = useState(false);
  const [openMaterial, setOpenMaterial] = useState(false);

  AOS.init({ duration: 650, delay: 150 });

  useEffect(() => {
    getColors();
  }, []);

  const SearchColor = (value) => {
    let filter = value.toUpperCase();
    let newArray = Color.filter((item) => {
      return (
        item.name_ru.toUpperCase().indexOf(filter) > -1 ||
        item.name_en.toUpperCase().indexOf(filter) > -1
      );
    });
    if (value.length === 0) {
      setFilterColor([...Color]);
    } else {
      setFilterColor([...newArray]);
    }
  };

  const closeDrawer2Handler = () => {
    setOpen2(false);
  };

  const openDrawer2Handler = () => {
    setOpen2(true);
  };

  const getColors = () => {
    axiosInstance
      .get("/api/color/all")
      .then((res) => {
        console.log(res.data);
        setColor(res.data);
        setFilterColor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Drawer
        placement="right"
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        key={"placement"}
      >
        <div className="drawer_container" data-aos="fade-up">
          <DrawerHeader
            header={dil === "RU" ? "Фильтр" : "Filter"}
            icon="/left.svg"
            close={() => setOpen(false)}
          />
          <div className="drawer_items pt-4">
            <DrawerItem
              header={dil === "RU" ? "Категория:" : "Category:"}
              open={() => setOpenCategory(true)}
            />
            <DrawerItem
              header={dil === "RU" ? "Ширина:" : "Width:"}
              open={() => setOpenWidth(true)}
            />
            <DrawerItem
              header={dil === "RU" ? "Длина:" : "Length:"}
              text="0.04"
              open={() => setOpenLength(true)}
            />
            <DrawerItem
              header={dil === "RU" ? "Материал:" : "Material:"}
              text={dil === "RU" ? "хлопок" : "cotton"}
              open={() => setOpenMaterial(true)}
            />
            <DrawerItem
              header={dil === "RU" ? "Цвет:" : "Color:"}
              text={dil === "RU" ? "бежевый" : "beige"}
              open={openDrawer2Handler}
            />
          </div>
          <button className="filter_button">
            <span className="filter_button_text">
              {dil === "RU" ? "Фильтр" : "Filter"}
            </span>
          </button>
        </div>
      </Drawer>

      <Drawer
        placement="right"
        closable={false}
        onClose={() => setOpenCategory(false)}
        open={openCategory}
        key={"placement"}
      >
        <div className="drawer2_container" data-aos="fade-down">
          <DrawerHeader
            header={dil === "RU" ? "Категория" : "Category"}
            icon="/burger-button.svg"
            close={() => setOpenCategory(false)}
          />
          <div className="drawer2_items pt-4">
            <Filter_items text={dil === "RU" ? "Полотенца" : "Towels"} />
            <Filter_items text={dil === "RU" ? "Простыни" : "Bedsheets"} />
          </div>
          <button className="filter_button">
            <span className="filter_button_text">
              {dil === "RU" ? "Выбирать" : "Choose"}
            </span>
          </button>
        </div>
      </Drawer>

      <Drawer
        placement="right"
        closable={false}
        onClose={() => setOpenWidth(false)}
        open={openWidth}
        key={"placement"}
      >
        <div className="drawer2_container" data-aos="fade-down">
          <DrawerHeader
            header={dil === "RU" ? "Ширина" : "Width"}
            icon="/burger-button.svg"
            close={() => setOpenWidth(false)}
          />
          <div className="drawer2_items pt-4">
            <Filter_items text="0.53" />
            <Filter_items text="0.70" />
            <Filter_items text="3.00" />
          </div>
          <button className="filter_button">
            <span className="filter_button_text">
              {dil === "RU" ? "Выбирать" : "Choose"}
            </span>
          </button>
        </div>
      </Drawer>

      <Drawer
        placement="right"
        closable={false}
        onClose={() => setOpenLength(false)}
        open={openLength}
        key={"placement"}
      >
        <div className="drawer2_container" data-aos="fade-down">
          <DrawerHeader
            header={dil === "RU" ? "Длина" : "Length"}
            icon="/burger-button.svg"
            close={() => setOpenLength(false)}
          />
          <div className="drawer2_items pt-4">
            <Filter_items text="10.05" />
            <Filter_items text="10.50" />
            <Filter_items text="3.00" />
          </div>
          <button className="filter_button">
            <span className="filter_button_text">
              {dil === "RU" ? "Выбирать" : "Choose"}
            </span>
          </button>
        </div>
      </Drawer>

      <Drawer
        placement="right"
        closable={false}
        onClose={() => setOpenMaterial(false)}
        open={openMaterial}
        key={"placement"}
      >
        <div className="drawer2_container" data-aos="fade-down">
          <DrawerHeader
            header={dil === "RU" ? "Материал" : "Material"}
            icon="/burger-button.svg"
            close={() => setOpenMaterial(false)}
          />
          <div className="drawer2_items pt-4">
            <Filter_items text={dil === "RU" ? "Шелк" : "Silk"} />
            <Filter_items text={dil === "RU" ? "Хлопок" : "Cotton"} />
          </div>
          <button className="filter_button">
            <span className="filter_button_text">
              {dil === "RU" ? "Выбирать" : "Choose"}
            </span>
          </button>
        </div>
      </Drawer>

      <Drawer
        placement="right"
        closable={false}
        onClose={() => setOpen2(false)}
        open={open2}
        key={"placement"}
      >
        <div className="drawer2_container" data-aos="fade-down">
          <DrawerHeader
            header={dil === "RU" ? "Цвет" : "Color"}
            icon="/burger-button.svg"
            close={closeDrawer2Handler}
          />
          <div className="drawer2_items pt-4">
            <Filter_items text={dil === "RU" ? "Бежевый" : "Beige"} />
            <Filter_items text={dil === "RU" ? "Белый" : "White"} />
            <Filter_items text={dil === "RU" ? "Бордо" : "Bordeaux"} />
            <Filter_items text={dil === "RU" ? "Синий" : "Blue"} />
            <Filter_items text={dil === "RU" ? "Желтый" : "Yellow"} />
            <Filter_items text={dil === "RU" ? "Желтый" : "Yellow"} />
            <Filter_items text={dil === "RU" ? "Желтый" : "Yellow"} />
          </div>
          <button className="filter_button">
            <span className="filter_button_text">
              {dil === "RU" ? "Выбирать" : "Choose"}
            </span>
          </button>
        </div>
      </Drawer>

      <Navigation />
      <div className="navigasiyaDiv">
        <h2 className="navigasiya" data-aos="fade-right">
          <span onClick={() => navigate("/homepage")}>
            {dil === "RU" ? "Главная" : "Homepage"}
          </span>
          /
          <span onClick={() => navigate("/products")}>
            {dil === "RU" ? "Продукты" : "Products"}
          </span>
        </h2>
      </div>

      <div className="pagename_div" data-aos="fade-left">
        <Pagename head={dil === "RU" ? "Продукты" : "Products"} />
      </div>

      <div className="filter_container">
        <button className="filter_button" onClick={() => setOpen(true)}>
          <img src={icon} alt="icon" className="filter_icon" />
          <span className="filter_button_text">
            {dil === "RU" ? "Фильтр (2)" : "Filter (2)"}
          </span>
        </button>
      </div>

      <div className="w-[90%] my-4 mx-auto flex justify-between">
        <div className="md1:block hidden" data-aos="fade-right">
          {/* filter */}

          <div
            className="w-full px-4 mb-4 select-none rounded-[8px] border-[1px] border-neutral-300"
            data-aos="fade-down"
          >
            <h1 className="py-3 text-[20px] border-b-[1px] border-b-neutral-300 text-neutral-900 font-pts text-left">
              {dil === "RU" ? "Категория" : "Category"}
            </h1>

            <div
              style={{ scrollbarColor: "#32BB78" }}
              className="max-h-[250px] overflow-auto scrollbar-hide"
            >
              <div
                className={
                  "flex items-center py-3 text-left   border-t-[1px] border-t-neutral-300"
                }
              >
                <CheckBox />
                <span
                  htmlFor="brend1"
                  className="text-[16px] cursor-pointer font-light text-neutral-900 font-[300] "
                >
                  {dil === "RU" ? "Полотенца" : "Towels"}
                </span>
              </div>

              <div
                className={
                  "flex items-center py-3 text-left   border-t-[1px] border-t-neutral-300"
                }
              >
                <CheckBox />
                <span
                  htmlFor="brend2"
                  className="text-[16px] font-light cursor-pointer text-neutral-900 font-[300] "
                >
                  {dil === "RU" ? "Простыни" : "Bedsheets"}
                </span>
              </div>
            </div>
          </div>

          <div
            className="w-full px-4 mb-4 select-none rounded-[8px] border-[1px] border-neutral-300"
            data-aos="fade-up"
          >
            <h1 className="py-3 text-[20px] border-b-[1px] border-b-neutral-300 text-neutral-900 font-pts text-left">
              {dil === "RU" ? "Ширина" : "Width"}
            </h1>

            <div
              style={{ scrollbarColor: "#32BB78" }}
              className="max-h-[250px] overflow-auto scrollbar-hide"
            >
              <div
                className={
                  "flex items-center py-3 text-left   border-t-[1px] border-t-neutral-300"
                }
              >
                <CheckBox />
                <span
                  htmlFor="brend3"
                  className="text-[16px] cursor-pointer font-light text-neutral-900 font-[300] "
                >
                  0.53
                </span>
              </div>

              <div
                className={
                  "flex items-center py-3 text-left   border-t-[1px] border-t-neutral-300"
                }
              >
                <CheckBox />
                <span
                  htmlFor="brend4"
                  className="text-[16px] cursor-pointer font-light text-neutral-900 font-[300] "
                >
                  0.70
                </span>
              </div>

              <div
                className={
                  "flex items-center py-3 text-left   border-t-[1px] border-t-neutral-300"
                }
              >
                <CheckBox />
                <span
                  htmlFor="brend5"
                  className="text-[16px] cursor-pointer font-light text-neutral-900 font-[300] "
                >
                  3.00
                </span>
              </div>
            </div>
          </div>

          <div
            className="w-full px-4 mb-4 select-none rounded-[8px] border-[1px] border-neutral-300"
            data-aos="fade-up"
          >
            <h1 className="py-3 text-[20px] border-b-[1px] border-b-neutral-300 text-neutral-900 font-pts text-left">
              {dil === "RU" ? "Длина" : "Length"}
            </h1>

            <div
              style={{ scrollbarColor: "#32BB78" }}
              className="max-h-[250px] overflow-auto scrollbar-hide"
            >
              <div
                className={
                  "flex items-center py-3 text-left   border-t-[1px] border-t-neutral-300"
                }
              >
                <CheckBox />
                <span
                  htmlFor="brend6"
                  className="text-[16px] cursor-pointer font-light text-neutral-900 font-[300] "
                >
                  10.05
                </span>
              </div>

              <div
                className={
                  "flex items-center py-3 text-left   border-t-[1px] border-t-neutral-300"
                }
              >
                <CheckBox />
                <span
                  htmlFor="brend7"
                  className="text-[16px] cursor-pointer font-light text-neutral-900 font-[300] "
                >
                  10.50
                </span>
              </div>

              <div
                className={
                  "flex items-center py-3 text-left   border-t-[1px] border-t-neutral-300"
                }
              >
                <CheckBox />
                <span
                  htmlFor="brend8"
                  className="text-[16px] cursor-pointer font-light text-neutral-900 font-[300] "
                >
                  3.00
                </span>
              </div>
            </div>
          </div>

          <div
            className="w-full px-4 mb-4 select-none rounded-[8px] border-[1px] border-neutral-300"
            data-aos="fade-up"
          >
            <h1 className="py-3 text-[20px] border-b-[1px] border-b-neutral-300 text-neutral-900 font-pts text-left">
              {dil === "RU" ? "Материал" : "Material"}
            </h1>

            <div
              style={{ scrollbarColor: "#32BB78" }}
              className="max-h-[250px] overflow-auto scrollbar-hide"
            >
              <div
                className={
                  "flex items-center py-3 text-left   border-t-[1px] border-t-neutral-300"
                }
              >
                <CheckBox />
                <span
                  htmlFor="brend9"
                  className="text-[16px] cursor-pointer font-light text-neutral-900 font-[300] "
                >
                  {dil === "RU" ? "Шелк" : "Silk"}
                </span>
              </div>

              <div
                className={
                  "flex items-center py-3 text-left   border-t-[1px] border-t-neutral-300"
                }
              >
                <CheckBox />
                <span
                  htmlFor="brend10"
                  className="text-[16px] cursor-pointer font-light text-neutral-900 font-[300] "
                >
                  {dil === "RU" ? "Хлопок" : "Cotton"}
                </span>
              </div>
            </div>
          </div>

          <div
            className="w-full px-4 mb-4 select-none rounded-[8px] border-[1px] border-neutral-300"
            data-aos="fade-up"
          >
            <h1 className="py-3 text-[20px] border-b-[1px] border-b-neutral-300 text-neutral-900 font-pts text-left">
              {dil === "RU" ? "Цвет" : "Color"}
            </h1>
            <input
              onKeyUp={(e) => SearchColor(e.target.value)}
              className="w-full h-[50px] mt-2 outline-none p-4 rounded-[8px] border-[1px] border-neutral-300"
              type="text"
              placeholder="Search"
            />
            <div
              style={{ scrollbarColor: "#32BB78" }}
              className="max-h-[250px] overflow-auto scrollbar-hide"
            >
              {filterColor?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={
                      "flex items-center py-3 text-left   border-t-[1px] border-t-neutral-300"
                    }
                  >
                    <CheckBox />
                    <span
                      htmlFor="brend11"
                      className="text-[16px] cursor-pointer font-light text-neutral-900 font-[300] "
                    >
                      {dil === "RU" ? item?.name_ru : item?.name_en}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* products */}
        <div className="productsContainer">
          <div className="FilterContainer md1:ml-4 ml-0 items-baseline">
            <h1 className="filterH1" data-aos="flip-left">
              {dil === "RU" ? "Фильтр:" : "Filter:"}
            </h1>
            <div className="flex flex-wrap justify-start">
              <FilterText
                header={dil === "RU" ? "Длина" : "Length"}
                text="0.05"
              />
              <FilterText
                header={dil === "RU" ? "Ширина" : "Width"}
                text="3.00"
              />
              <FilterText
                header={dil === "RU" ? "Цвет" : "Color"}
                text={dil === "RU" ? "Коричневый" : "Brown"}
              />
            </div>
          </div>

          <div className="productsCardDiv md1:ml-4 ml-0">
            <div className="product_Div !w-fit" data-aos="fade-right">
              <Card
                surat="carImg.png"
                name={
                  dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"
                }
              />
            </div>
            <div className="product_Div" data-aos="fade-right">
              <Card
                surat="cardimg2.png"
                name={
                  dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"
                }
              />
            </div>
            <div className="product_Div" data-aos="fade-left">
              <Card
                surat="carImg.png"
                name={
                  dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"
                }
              />
            </div>
            <div className="product_Div" data-aos="fade-left">
              <Card
                surat="cardimg2.png"
                name={
                  dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"
                }
              />
            </div>
            <div className="product_Div" data-aos="fade-right">
              <Card
                surat="carImg.png"
                name={
                  dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"
                }
              />
            </div>
            <div className="product_Div" data-aos="fade-right">
              <Card
                surat="cardimg2.png"
                name={
                  dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"
                }
              />
            </div>
            <div className="product_Div" data-aos="fade-left">
              <Card
                surat="carImg.png"
                name={
                  dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"
                }
              />
            </div>
            <div className="product_Div" data-aos="fade-left">
              <Card
                surat="cardimg2.png"
                name={
                  dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"
                }
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
