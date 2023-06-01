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
// import Filter_items from "./drawer_filter_items/Filter_items";
import CheckBox from "../../components/checked/checkbox";
import { BASE_URL2, axiosInstance } from "../../utils/axiosIntance";

const Products = (props) => {
  const { dil } = useContext(Context);
  const navigate = useNavigate();

  const [Color, setColor] = useState([]);
  const [filterColor, setFilterColor] = useState(Color);
  const [category, setCategory] = useState([]);
  const [width, setWidth] = useState([]);
  const [length, setLength] = useState([]);
  const [material, setMaterial] = useState([]);
  const [products, setProducts] = useState([]);

  const [categoryFilters, setCategoryFilters] = useState([]);
  const [widthFilters, setWidthFilters] = useState([]);
  const [lengthFilters, setLengthFilters] = useState([]);
  const [materialFilters, setMaterialFilters] = useState([]);
  const [colorFilters, setColorFilters] = useState([]);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [openCategory, setOpenCategory] = useState(false);
  const [openWidth, setOpenWidth] = useState(false);
  const [openLength, setOpenLength] = useState(false);
  const [openMaterial, setOpenMaterial] = useState(false);

  AOS.init({ duration: 650, delay: 150 });

  useEffect(() => {
    getColors();
    getCategory();
    getWidth();
    getLength();
    getMaterial();
  }, []);

  useEffect(() => {
    getProducts();
    console.log(
      materialFilters,
      categoryFilters,
      widthFilters,
      lengthFilters,
      colorFilters
    );
  }, [
    materialFilters,
    categoryFilters,
    widthFilters,
    lengthFilters,
    colorFilters,
  ]);

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

  const getProducts = () => {
    let materialFilter = [];
    materialFilters.map((item) => {
      materialFilter.push(item.id);
    });
    let categoryFilter = [];
    categoryFilters.map((item) => {
      materialFilter.push(item.id);
    });
    let widthFilter = [];
    widthFilters.map((item) => {
      materialFilter.push(item.id);
    });
    let lengthFilter = [];
    lengthFilters.map((item) => {
      materialFilter.push(item.id);
    });
    let colorFilter = [];
    colorFilters.map((item) => {
      materialFilter.push(item.id);
    });
    axiosInstance
      .get("/api/product/all", {
        params: {
          materials: materialFilter,
          categories: categoryFilter,
          widths: widthFilter,
          lengths: lengthFilter,
          color: colorFilter,
        },
      })
      .then((res) => {
        console.log("products:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategory = () => {
    axiosInstance
      .get("/api/category/all")
      .then((res) => {
        console.log("category", res.data);
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getWidth = () => {
    axiosInstance
      .get("/api/width/all")
      .then((res) => {
        console.log(res.data);
        setWidth(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLength = () => {
    axiosInstance.get("/api/length/all").then((res) => {
      console.log(res.data);
      setLength(res.data);
    });
  };

  const getMaterial = () => {
    axiosInstance
      .get("/api/material/all")
      .then((res) => {
        console.log(res.data);
        setMaterial(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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

  const createCategoryFilter = (item, title) => {
    let array = categoryFilters;
    let is_have = false;
    let index;
    array.map((it, i) => {
      if (it.id === item.id) {
        is_have = true;
        index = i;
      }
    });
    if (is_have) {
      array.splice(index, 1);
      setCategoryFilters([...array]);
    } else {
      array.push({
        id: item?.id,
        title_en: title?.title_en,
        title_ru: title?.title_ru,
        name_en: item?.name_en,
        name_ru: item?.name_ru,
      });
      setCategoryFilters([...array]);
    }
  };

  const removeCategoryFilter = (index) => {
    let array = categoryFilters;
    array.splice(index, 1);
    setCategoryFilters([...array]);
  };

  const isCheckedCategory = async (id) => {
    let is_have = false;
    await categoryFilters?.map((item) => {
      if (item?.id == id) {
        is_have = true;
      }
    });
    console.log(is_have);
    return is_have;
  };

  const createWidthFilter = (item, title) => {
    let array = widthFilters;
    let is_have = false;
    let index;
    array.map((it, i) => {
      if (it.id === item.id) {
        is_have = true;
        index = i;
      }
    });
    if (is_have) {
      array.splice(index, 1);
      setWidthFilters([...array]);
    } else {
      array.push({
        id: item?.id,
        title_en: title?.title_en,
        title_ru: title?.title_ru,
        name: item?.name,
      });
      setWidthFilters([...array]);
    }
  };

  const removeWidthFilter = (index) => {
    let array = widthFilters;
    array.splice(index, 1);
    setWidthFilters([...array]);
  };

  const createLengthFilter = (item, title) => {
    let array = lengthFilters;
    let is_have = false;
    let index;
    array.map((it, i) => {
      if (it.id === item.id) {
        is_have = true;
        index = i;
      }
    });
    if (is_have) {
      array.splice(index, 1);
      setLengthFilters([...array]);
    } else {
      array.push({
        id: item?.id,
        title_en: title?.title_en,
        title_ru: title?.title_ru,
        name: item?.name,
      });
      setLengthFilters([...array]);
    }
  };

  const removeLengthFilter = (index) => {
    let array = lengthFilters;
    array.splice(index, 1);
    setLengthFilters([...array]);
  };

  const createMaterialFilter = (item, title) => {
    let array = materialFilters;
    let is_have = false;
    let index;
    array.map((it, i) => {
      if (it.id === item.id) {
        is_have = true;
        index = i;
      }
    });
    if (is_have) {
      array.splice(index, 1);
      setMaterialFilters([...array]);
    } else {
      array.push({
        id: item?.id,
        title_en: title?.title_en,
        title_ru: title?.title_ru,
        name_en: item?.name_en,
        name_ru: item?.name_ru,
      });
      setMaterialFilters([...array]);
    }
  };

  const removeMaterialFilter = (index) => {
    let array = materialFilters;
    array.splice(index, 1);
    setMaterialFilters([...array]);
  };

  const createColorFilter = (item, title) => {
    let array = colorFilters;
    let is_have = false;
    let index;
    array.map((it, i) => {
      if (it.id === item.id) {
        is_have = true;
        index = i;
      }
    });
    if (is_have) {
      array.splice(index, 1);
      setColorFilters([...array]);
    } else {
      array.push({
        id: item?.id,
        title_en: title?.title_en,
        title_ru: title?.title_ru,
        name_en: item?.name_en,
        name_ru: item?.name_ru,
      });
      setColorFilters([...array]);
    }
  };

  const removeColorFilter = (index) => {
    let array = colorFilters;
    array.splice(index, 1);
    setCategoryFilters([...array]);
  };

  return (
    <div>
      <Drawer
        placement="right"
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        // key={"placement"}
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
          <button className="filter_button" onClick={() => setOpen(false)}>
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
        // key={"placement"}
      >
        <div className="drawer2_container" data-aos="fade-down">
          <DrawerHeader
            header={dil === "RU" ? "Категория" : "Category"}
            icon="/burger-button.svg"
            close={() => setOpenCategory(false)}
          />
          {category?.map((itemCategory, i) => {
            return (
              <div
                onClick={() =>
                  createCategoryFilter(itemCategory, {
                    title_en: "Category",
                    title_ru: "Категория",
                  })
                }
                key={"category" + i}
                style={{ scrollbarColor: "#32BB78" }}
                className="max-h-[250px] overflow-auto scrollbar-hide"
              >
                <div
                  className={
                    "flex items-center py-3 text-left border-t-[1px] pt-4 border-t-neutral-300"
                  }
                >
                  <CheckBox />
                  <span
                    htmlFor="brend1"
                    className="text-[16px] cursor-pointer font-light text-neutral-900 font-[300] "
                  >
                    {dil === "RU"
                      ? itemCategory?.name_ru
                      : itemCategory?.name_en}
                  </span>
                </div>
              </div>
            );
          })}
          <button
            className="filter_button"
            onClick={() => setOpenCategory(false)}
          >
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
        // key={"placement"}
      >
        <div className="drawer2_container" data-aos="fade-down">
          <DrawerHeader
            header={dil === "RU" ? "Ширина" : "Width"}
            icon="/burger-button.svg"
            close={() => setOpenWidth(false)}
          />
          {width?.map((itemWidth, i) => {
            return (
              <div
                onClick={() =>
                  createWidthFilter(itemWidth, {
                    title_en: "Width",
                    title_ru: "Ширина",
                  })
                }
                key={"width" + i}
                style={{ scrollbarColor: "#32BB78" }}
                className="max-h-[250px] overflow-auto scrollbar-hide"
              >
                <div
                  className={
                    "flex items-center py-3 text-left pt-4  border-t-[1px] border-t-neutral-300"
                  }
                >
                  <CheckBox />
                  <span
                    htmlFor="brend3"
                    className="text-[16px] cursor-pointer font-light text-neutral-900 font-[300] "
                  >
                    {itemWidth?.name}
                  </span>
                </div>
              </div>
            );
          })}
          <button className="filter_button" onClick={() => setOpenWidth(false)}>
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
        // key={"placement"}
      >
        <div className="drawer2_container" data-aos="fade-down">
          <DrawerHeader
            header={dil === "RU" ? "Длина" : "Length"}
            icon="/burger-button.svg"
            close={() => setOpenLength(false)}
          />
          {length?.map((itemLength, i) => {
            return (
              <div
                onClick={() =>
                  createLengthFilter(itemLength, {
                    title_en: "Length",
                    title_ru: "Длина",
                  })
                }
                key={"length" + i}
                style={{ scrollbarColor: "#32BB78" }}
                className="max-h-[250px] overflow-auto scrollbar-hide"
              >
                <div
                  className={
                    "flex items-center py-3 text-left pt-4 border-t-[1px] border-t-neutral-300"
                  }
                >
                  <CheckBox />
                  <span
                    htmlFor="brend6"
                    className="text-[16px] cursor-pointer font-light text-neutral-900 font-[300] "
                  >
                    {itemLength?.name}
                  </span>
                </div>
              </div>
            );
          })}
          <button
            className="filter_button"
            onClick={() => setOpenLength(false)}
          >
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
        // key={"placement"}
      >
        <div className="drawer2_container" data-aos="fade-down">
          <DrawerHeader
            header={dil === "RU" ? "Материал" : "Material"}
            icon="/burger-button.svg"
            close={() => setOpenMaterial(false)}
          />
          {material?.map((itemMaterial, i) => {
            return (
              <div
                onClick={() =>
                  createMaterialFilter(itemMaterial, {
                    title_en: "Material",
                    title_ru: "Материал",
                  })
                }
                key={"mat" + i}
                style={{ scrollbarColor: "#32BB78" }}
                className="max-h-[250px] overflow-auto scrollbar-hide"
              >
                <div
                  className={
                    "flex items-center py-3 text-left pt-4  border-t-[1px] border-t-neutral-300"
                  }
                >
                  <CheckBox />
                  <span
                    htmlFor="brend9"
                    className="text-[16px] cursor-pointer font-light text-neutral-900 font-[300] "
                  >
                    {dil === "RU"
                      ? itemMaterial?.name_ru
                      : itemMaterial?.name_en}
                  </span>
                </div>
              </div>
            );
          })}
          <button
            className="filter_button"
            onClick={() => setOpenMaterial(false)}
          >
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
        // key={"placement"}
      >
        <div className="drawer2_container" data-aos="fade-down">
          <DrawerHeader
            header={dil === "RU" ? "Цвет" : "Color"}
            icon="/burger-button.svg"
            close={closeDrawer2Handler}
          />
          <input
            onKeyUp={(e) => SearchColor(e.target.value)}
            className="w-full h-[50px] mt-2 outline-none p-4 rounded-[8px] border-[1px] border-neutral-300"
            type="text"
            placeholder="Search"
          />
          <div
            style={{ scrollbarColor: "#32BB78" }}
            className="max-h-[250px] overflow-auto scrollbar-hide pt-4"
          >
            {filterColor?.map((item, index) => {
              return (
                <div
                  onClick={() =>
                    createColorFilter(item, {
                      title_en: "Color",
                      title_ru: "Цвет",
                    })
                  }
                  key={"filtercolor" + index}
                  className={
                    "flex items-center py-3 text-left  pt-4 border-t-[1px] border-t-neutral-300"
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
          <button className="filter_button" onClick={closeDrawer2Handler}>
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
        <div className="md1:block hidden" data-aos="fade-up">
          {/* filter */}

          <div className="w-full px-4 mb-4 select-none rounded-[8px] border-[1px] border-neutral-300">
            <h1 className="py-3 text-[20px] border-b-[1px] border-b-neutral-300 text-neutral-900 font-pts text-left">
              {dil === "RU" ? "Категория" : "Category"}
            </h1>

            {category?.map((itemCategory, i) => {
              return (
                <div
                  onClick={() =>
                    createCategoryFilter(itemCategory, {
                      title_en: "Category",
                      title_ru: "Категория",
                    })
                  }
                  key={"category" + i}
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
                      {dil === "RU"
                        ? itemCategory?.name_ru
                        : itemCategory?.name_en}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full px-4 mb-4 select-none rounded-[8px] border-[1px] border-neutral-300">
            <h1 className="py-3 text-[20px] border-b-[1px] border-b-neutral-300 text-neutral-900 font-pts text-left">
              {dil === "RU" ? "Ширина" : "Width"}
            </h1>

            {width?.map((itemWidth, i) => {
              return (
                <div
                  onClick={() =>
                    createWidthFilter(itemWidth, {
                      title_en: "Width",
                      title_ru: "Ширина",
                    })
                  }
                  key={"width" + i}
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
                      {itemWidth?.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full px-4 mb-4 select-none rounded-[8px] border-[1px] border-neutral-300">
            <h1 className="py-3 text-[20px] border-b-[1px] border-b-neutral-300 text-neutral-900 font-pts text-left">
              {dil === "RU" ? "Длина" : "Length"}
            </h1>

            {length?.map((itemLength, i) => {
              return (
                <div
                  onClick={() =>
                    createLengthFilter(itemLength, {
                      title_en: "Length",
                      title_ru: "Длина",
                    })
                  }
                  key={"length" + i}
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
                      {itemLength?.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full px-4 mb-4 select-none rounded-[8px] border-[1px] border-neutral-300">
            <h1 className="py-3 text-[20px] border-b-[1px] border-b-neutral-300 text-neutral-900 font-pts text-left">
              {dil === "RU" ? "Материал" : "Material"}
            </h1>

            {material?.map((itemMaterial, i) => {
              return (
                <div
                  onClick={() =>
                    createMaterialFilter(itemMaterial, {
                      title_en: "Material",
                      title_ru: "Материал",
                    })
                  }
                  key={"mat" + i}
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
                      {dil === "RU"
                        ? itemMaterial?.name_ru
                        : itemMaterial?.name_en}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full px-4 mb-4 select-none rounded-[8px] border-[1px] border-neutral-300">
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
                    onClick={() =>
                      createColorFilter(item, {
                        title_en: "Color",
                        title_ru: "Цвет",
                      })
                    }
                    key={"filtercolor" + index}
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
              {categoryFilters?.map((item, i) => {
                return (
                  <FilterText
                    remove={removeCategoryFilter}
                    index={i}
                    header={dil === "RU" ? item?.title_ru : item?.title_en}
                    text={dil === "RU" ? item?.name_ru : item?.name_en}
                  />
                );
              })}

              {widthFilters?.map((item, i) => {
                return (
                  <FilterText
                    remove={removeWidthFilter}
                    index={i}
                    header={dil === "RU" ? item?.title_ru : item?.title_en}
                    text={item?.name}
                  />
                );
              })}

              {lengthFilters?.map((item, i) => {
                return (
                  <FilterText
                    remove={removeLengthFilter}
                    index={i}
                    header={dil === "RU" ? item?.title_ru : item?.title_en}
                    text={item?.name}
                  />
                );
              })}

              {materialFilters?.map((item, i) => {
                return (
                  <FilterText
                    remove={removeMaterialFilter}
                    index={i}
                    header={dil === "RU" ? item?.title_ru : item?.title_en}
                    text={dil === "RU" ? item?.name_ru : item?.name_en}
                  />
                );
              })}
              {colorFilters?.map((item, i) => {
                return (
                  <FilterText
                    remove={removeColorFilter}
                    index={i}
                    header={dil === "RU" ? item?.title_ru : item?.title_en}
                    text={dil === "RU" ? item?.name_ru : item?.name_en}
                  />
                );
              })}
            </div>
          </div>

          <div className="productsCardDiv md1:ml-4 ml-0">
            {products?.map((item, i) => {
              return (
                <div
                  key={"pro" + item.name_en}
                  className="product_Div !w-fit"
                  data-aos="fade-right"
                >
                  <Card
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
      </div>

      <Footer />
    </div>
  );
};

export default Products;
