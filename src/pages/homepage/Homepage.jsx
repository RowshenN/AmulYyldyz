import React, { useContext, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Homepage.css";

import { Context } from "../../context/Context";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import Section2 from "./section2/Section2";
import ImgCarousel from "./ImgCarousel/ImgCarousel";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
import ContactForm from "../contact/contactform/ContactForm";
import narrow from "../../images/left narrow.svg";
import narrow2 from "../../images/right narrow.svg";
import img1 from "../../images/home-img1.png";
import Slider from "react-slick";
import { Carousel } from "antd";
import { BASE_URL, axiosInstance } from "../../utils/axiosIntance";
import Section6 from "./Section6/Section6";
const Homepage = (props) => {
  const { dil } = useContext(Context);
  const slider = useRef(null);
  const [banners, setBanners] = useState([]);
  AOS.init({ duration: 700, delay: 150});

  useEffect(() => {
    getBanner();
  }, []);
  const getBanner = () => {
    axiosInstance
      .get("/api/banner/all")
      .then((res) => {
        console.log(res.data);
        setBanners(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navigation />
      <div className="homeHeaderDiv" data-aos="fade-down" data-aos-ease="ease">
        <div className="homeHeader">
          <h1 className="homeHeaderText">
            {dil === "RU"
              ? "Поднимите свой повседневный уровень на новый уровень с нашими естественными элегантными полотенцами и простынями"
              : "Elevate Your Everyday with Our Naturally Elegant Towels and Bedsheets"}
          </h1>
        </div>
      </div>

      <div className="relative mb-[60px] w-[90%] mx-auto lg:h-[400px] 2xl:h-[450px]">
        <Carousel
          className=" w-full  lg:h-[400px] 2xl:h-[450px]"
          autoplay
          autoplaySpeed={5000}
          speed={5000}
          dots={false}
          infinite={true}
          waitForAnimate={true}
          effect="fade"
          ref={slider}
        >
          {banners?.map((item, i) => {
            return (
              <>
                <img
                  key={1}
                  src={BASE_URL + item?.img}
                  alt={"img" + i + 1}
                  className="lg:h-[400px] 2xl:h-[450px] w-full object-cover"
                />
                <div
                  className="homeImgTextDiv"
                  //  data-aos="fade-down" data-aos-dalay="200"
                >
                  <p className="homeImgText1">
                    {(i + 1).toString().padStart(2, 0)}/
                  </p>
                  <p className="homeImgText2">
                    {banners?.length.toString().padStart(2, 0)}
                  </p>
                </div>
              </>
            );
          })}
        </Carousel>
        <div
          onClick={() => slider.current.prev()}
          className="narrow1Div"
          // data-aos="fade-up"
          // data-aos-ease="ease"
        >
          <img src={narrow} alt="narrow" className="narrow" />
        </div>
        <div
          onClick={() => slider.current.next()}
          className="narrow2Div"
          //  data-aos="fade-down" data-aos-delay="200"
        >
          <img src={narrow2} alt="narrow" className="narrow" />
        </div>
      </div>

      <Section2 />
      <ImgCarousel />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Homepage;
