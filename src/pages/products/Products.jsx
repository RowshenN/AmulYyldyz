import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './Products.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'
import FilterText from './filterText/FilterText'
import Pagename from '../../components/pagename/Pagename'
import { Context } from '../../context/Context'
import icon from '../../images/filter-icon.svg'
import { Drawer } from 'antd'
import DrawerItem from './drawerItem/DrawerItem'
import DrawerHeader from './DrawerHeader/DrawerHeader'
import Filter_items from './drawer_filter_items/Filter_items'


const Products = (props) => {
  const {dil} = useContext(Context);

  const [brends, setBrends] = useState([
    { id: 1, name: "Mars" },
    { id: 1, name: "Pepsi" },
    { id: 1, name: "Colo" },
    { id: 1, name: "Snicers" },
    { id: 1, name: "Turan" },
    { id: 1, name: "Apple" },
    { id: 1, name: "Fanta" },
    { id: 1, name: "Sprite" },
]);

const [filterBrends, setFilterBrends] = useState(brends);
const SearchBrends = (value) => {
  let filter = value.toUpperCase();
  let newArray = brends.filter((item) => {
      return item.name.toUpperCase().indexOf(filter) > -1;
  });
  if (value.length === 0) {
      setFilterBrends([...brends]);
  } else {
      setFilterBrends([...newArray]);
  }
};
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false)
  const closeDrawer2Handler = () => {
    setOpen2(false);
  }
  const openDrawer2Handler = () =>{
    setOpen2(true)
  };
  AOS.init({duration: 600, delay: 150}) 

  const [openCategory, setOpenCategory] = useState(false);
  const [openWidth, setOpenWidth] = useState(false);
  const [openLength, setOpenLength] = useState(false);
  const [openMaterial, setOpenMaterial] = useState(false);

  return (
    <div>
      
       <Drawer
         placement="right"
         closable={false}
         onClose={()=>setOpen(false)}
         open={open}
         key={"placement"}
        >
          <div className="drawer_container" data-aos="fade-up">
            <DrawerHeader header="Filter" icon="/left.svg" close={() => setOpen(false)} />
            <div className="drawer_items">
              <DrawerItem header="Category:" open={() => setOpenCategory(true)} />
              <DrawerItem header="Width:" open={() => setOpenWidth(true)} />
              <DrawerItem header="Length:" text="0.04" open={() => setOpenLength(true)} />
              <DrawerItem header="Material:" text="cotton" open={() => setOpenMaterial(true)} />
              <DrawerItem header="Color:" text="beige" open={openDrawer2Handler} />
            </div>
            <button className="filter_button"><span className="filter_button_text">Filter</span></button>
          </div>
        </Drawer>



        <Drawer
         placement="right"
         closable={false}
         onClose={()=>setOpenCategory(false)}
         open={openCategory}
         key={"placement"}
        >
          <div className="drawer2_container" data-aos="fade-down">
           <DrawerHeader header="Category" icon="/burger-button.svg" close={()=>setOpenCategory(false)} />
           <div className="drawer2_items">
             <Filter_items text="Category" />
             <Filter_items text="Category" />
             <Filter_items text="Category" />
             <Filter_items text="Category" />
             <Filter_items text="Category" />
             <Filter_items text="Category" />
             <Filter_items text="Category" />
            </div>
            <button className="filter_button"><span className="filter_button_text">Choose</span></button>
          </div>          
        </Drawer>


        <Drawer
         placement="right"
         closable={false}
         onClose={()=>setOpenWidth(false)}
         open={openWidth}
         key={"placement"}
        >
          <div className="drawer2_container" data-aos="fade-down">
           <DrawerHeader header="Width" icon="/burger-button.svg" close={()=>setOpenWidth(false)} />
           <div className="drawer2_items">
             <Filter_items text="Width" />
             <Filter_items text="Width" />
             <Filter_items text="Width" />
             <Filter_items text="Width" />
             <Filter_items text="Width" />
             <Filter_items text="Width" />
             <Filter_items text="Width" />
            </div>
            <button className="filter_button"><span className="filter_button_text">Choose</span></button>
          </div>          
        </Drawer>


        <Drawer
         placement="right"
         closable={false}
         onClose={()=>setOpenLength(false)}
         open={openLength}
         key={"placement"}
        >
          <div className="drawer2_container" data-aos="fade-down">
           <DrawerHeader header="Length" icon="/burger-button.svg" close={()=>setOpenLength(false)} />
           <div className="drawer2_items">
             <Filter_items text="Length" />
             <Filter_items text="Length" />
             <Filter_items text="Length" />
             <Filter_items text="Length" />
             <Filter_items text="Length" />
             <Filter_items text="Length" />
             <Filter_items text="Length" />
            </div>
            <button className="filter_button"><span className="filter_button_text">Choose</span></button>
          </div>          
        </Drawer>


        <Drawer
         placement="right"
         closable={false}
         onClose={()=>setOpenMaterial(false)}
         open={openMaterial}
         key={"placement"}
        >
          <div className="drawer2_container" data-aos="fade-down">
           <DrawerHeader header="Material" icon="/burger-button.svg" close={()=>setOpenMaterial(false)} />
           <div className="drawer2_items">
             <Filter_items text="Material" />
             <Filter_items text="Material" />
             <Filter_items text="Material" />
             <Filter_items text="Material" />
             <Filter_items text="Material" />
             <Filter_items text="Material" />
             <Filter_items text="Material" />
            </div>
            <button className="filter_button"><span className="filter_button_text">Choose</span></button>
          </div>          
        </Drawer>


        <Drawer
          placement="right"
          closable={false}
          onClose={()=>setOpen2(false)}
          open={open2}
          key={"placement"}
        >
          <div className="drawer2_container" data-aos="fade-down">
            <DrawerHeader header="Color" icon="/burger-button.svg" close={closeDrawer2Handler} />
              <div className="drawer2_items">
                  <Filter_items text="Beige" />
                  <Filter_items text="White" />
                  <Filter_items text="Bordeaux" />
                  <Filter_items text="Blue" />
                  <Filter_items text="Yellow" />
                  <Filter_items text="Yellow" />
                  <Filter_items text="Yellow" />
              </div>
            <button className="filter_button"><span className="filter_button_text">Choose</span></button>
          </div>
        </Drawer>

      <Navigation />
      <div className="navigasiyaDiv">
       <h2 className='navigasiya' data-aos="fade-right"><span onClick={() =>navigate("/homepage")}>{dil === "RU" ? "Главная" : "Homepage"}</span> / <span onClick={() =>navigate("/products")}>{dil === "RU" ? "Продукты" : "Products"}</span></h2>
      </div>

      <div className="pagename_div" data-aos="fade-left">
        <Pagename head={dil === "RU" ? "Продукты" :"Products"} />
      </div>

      <div className="filter_container">
        <button className="filter_button" onClick={() => setOpen(true)}><img src={icon} alt="icon" className='filter_icon' /><span className="filter_button_text">Filter (2)</span></button>
      </div>

<div className='w-[90%] my-4 mx-auto flex justify-between'>
  <div className='md1:block hidden'>
    {/* filter */}
    <div className="w-full px-4 mb-4 select-none rounded-[8px] border-[1px] border-neutral-300">
                    <h1 className="py-3 text-[20px] border-b-[1px] border-b-neutral-300 text-neutral-900 font-semi text-left">
                        Material
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
                                    <input
                                        className="mr-3 bg-neutral-300 text-neutral-300 border-neutral-300 w-[16px] h-[16px] "
                                        type="checkbox"
                                        id="brend1"
                                    />
                                    <label
                                        htmlFor="brend1"
                                        className="text-[16px] cursor-pointer text-neutral-900 font-[300] "
                                    >
                                        
                                    </label>
                                </div>
                        
                                <div 
                                    className={
                                        "flex items-center py-3 text-left   border-t-[1px] border-t-neutral-300"
                                    }
                                >
                                    <input
                                        className="mr-3 bg-neutral-300 text-neutral-300 border-neutral-300 w-[16px] h-[16px] "
                                        type="checkbox"
                                        id="brend1"
                                    />
                                    <label
                                        htmlFor="brend1"
                                        className="text-[16px] cursor-pointer text-neutral-900 font-[300] "
                                    >
                                        name
                                    </label>
                                </div>
                           
                    </div>
                </div>
    <div className="w-full px-4 mb-4 select-none rounded-[8px] border-[1px] border-neutral-300">
                    <h1 className="py-3 text-[20px] border-b-[1px] border-b-neutral-300 text-neutral-900 font-semi text-left">
                        Brendlar
                    </h1>
                    <input
                        onKeyUp={(e) => SearchBrends(e.target.value)}
                        className="w-full h-[50px] mt-2 outline-none p-4 rounded-[8px] border-[1px] border-neutral-300"
                        type="text"
                        placeholder="Search"
                    />
                    <div
                        style={{ scrollbarColor: "#32BB78" }}
                        className="max-h-[250px] overflow-auto scrollbar-hide"
                    >
                        {filterBrends.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        "flex items-center py-3 text-left   border-t-[1px] border-t-neutral-300"
                                    }
                                >
                                    <input
                                        className="mr-3 bg-neutral-300 text-neutral-300 border-neutral-300 w-[16px] h-[16px] "
                                        type="checkbox"
                                        id="brend1"
                                    />
                                    <label
                                        htmlFor="brend1"
                                        className="text-[16px] cursor-pointer text-neutral-900 font-[300] "
                                    >
                                        {item.name}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
  </div>

  {/* products */}
      <div className="productsContainer">
        <div className="FilterContainer md1:ml-4 ml-0">
         <h1 className="filterH1" data-aos="flip-left">{dil === "RU" ? "Фильтр:" :"Filter:"}</h1>
         <FilterText  header={dil === "RU" ? "Длина" : "Length"} text="0.05"/>
         <FilterText  header={dil === "RU" ? "Ширина" : "Width"} text="3.00"/>
         <FilterText  header={dil === "RU" ? "Цвет" : "Color"} text={dil === "RU" ? "Коричневый" :"Brown"} />
        </div>

        <div className="productsCardDiv md1:ml-4 ml-0">
          <div className="product_Div !w-fit" data-aos="fade-right">
            <Card surat="carImg.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"}/>
          </div>
          <div className="product_Div" data-aos="fade-right">
            <Card surat="cardimg2.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"}/>
          </div> 
          <div className="product_Div" data-aos="fade-left">
            <Card surat="carImg.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"}/>
          </div> 
          <div className="product_Div" data-aos="fade-left">
            <Card surat="cardimg2.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"}/>
          </div> 
          <div className="product_Div" data-aos="fade-right">
            <Card surat="carImg.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"}/>
          </div> 
          <div className="product_Div" data-aos="fade-right">
            <Card surat="cardimg2.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"}/>
          </div> 
          <div className="product_Div" data-aos="fade-left">
            <Card surat="carImg.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"}/>
          </div> 
          <div className="product_Div" data-aos="fade-left">
            <Card surat="cardimg2.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"}/>
          </div>
       </div>
 
      
      </div>
</div>
     
      <Footer />
    </div>
  )
}

export default Products
