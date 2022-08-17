import React, { useState } from 'react'
import style from '../styles/sidebar.module.css'
import Category from './smallComponents/Category'
import SubCategory from './smallComponents/SubCategory'
function Sidebar() {
  const [showSubCategory,setShowSubCategory] = useState(false);
  const [subCategory,setSubCategory] = useState({});
  const [ classId, setClassId] = useState(0);
  let category = [{
    id:"0",
    title : "Mobile",
    img : "https://i.ibb.co/cFMGqKk/3137807.png",
    subcategory : [{
      sub_id : "0",
      sub_title : "Apple",
      items : [{
        brand: "Apple",
        detail : "iPhone 12 (Purple, 256 GB)",
        price : 80900,
        img: 'https://rukminim1.flixcart.com/image/416/416/ko0d6kw0/mobile/6/h/y/iphone-12-mjnm3hn-a-apple-original-imag2k2v6ehvnzfd.jpeg'
      },{
        brand: "Apple",
        detail : "iPhone 11 (Purple, 64 GB)",
        price : 49999,
        img: 'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/y/k/z/iphone-11-64-a-mwlx2hn-a-apple-0-original-imafkg24ymsjav9h.jpeg'
      },{
        brand: "Apple",
        detail : "iPhone 12 (Blue, 64 GB)",
        price : 65999,
        img: 'https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg'
      },]
    },{
      sub_id : "1",
      sub_title : "Samsung",
    },{
      sub_id : "2",
      sub_title : "Oneplus",
    },{
      sub_id : "3",
      sub_title : "Realme",
    },{
      sub_id : "4",
      sub_title : "Vivo",
    },{
      sub_id : "5",
      sub_title : "Oppo",
    },]
  },{
    id : "1",
    title : "Fashion",
    img : "https://cdn-icons-png.flaticon.com/512/7417/7417663.png",
    subcategory : [{
      sub_id : "0",
      sub_title : "Men's Top Wear",
      further_category : [{
        f_id : "0",
        f_title : "Men's Tshirt",
        items : [{
          brand: "Puma",
          detail : "Graphic Print Men Round Neck White T-Shirt",
          price : 1799,
          img: 'https://rukminim1.flixcart.com/image/880/1056/l4hcx3k0/t-shirt/m/p/q/4xl-53681602-puma-original-imagfd76fettrqtm.jpeg'
        },{
          brand: "Nike",
          detail : "Printed Men Round Neck Green T-Shirt",
          price : 1595,
          img: 'https://rukminim1.flixcart.com/image/880/1056/l41n2q80/t-shirt/4/q/g/m-dr1288-353-nike-original-imagff7uwnxttytv.jpeg'
        },{
          brand: "Flying Machine",
          detail : "Solid Men Round Neck Black T-Shirt",
          price : 999,
          img: 'https://rukminim1.flixcart.com/image/880/1056/l111lzk0/t-shirt/w/4/g/4xl-fmtsh0643-flying-machine-original-imagczenqxu9kcze.jpeg'
        },{
          brand: "Flying Machine",
          detail : "Printed Men Polo Neck Blue T-Shirt",
          price : 1599,
          img: 'https://rukminim1.flixcart.com/image/880/1056/kdga1zk0/t-shirt/t/p/0/xl-fmts3170-flying-machine-original-imafucx8zqymhj4m.jpeg'
        },{
          brand: "Adidas",
          detail : "Printed Men Round Neck White T-Shirt",
          price : 1399,
          img: 'https://rukminim1.flixcart.com/image/880/1056/xif0q/t-shirt/9/4/j/m-hk9160-adidas-original-imagh3zf5ehpzchg.jpeg'
        },]
      },{
        f_id : "1",
        f_title : "Men's Casual Shirt"
      },{
        f_id : "2",
        f_title : "Men's Formal Shirt"
      },{
        f_id : "3",
        f_title : "Men's Blazer"
      },{
        f_id : "4",
        f_title : "Men's Kurta"
      },]
    },{
      sub_id : "1",
      sub_title : "Men's Bottom Wear",
      further_category : [{
        f_id : "0",
        f_title : "Men's Jeans"
      },{
        f_id : "1",
        f_title : "Men's Trouser"
      },{
        f_id : "2",
        f_title : "Men's Formal Pant"
      },{
        f_id : "3",
        f_title : "Men's Short"
      },{
        f_id : "4",
        f_title : "Men's Cargos"
      },]
    },{
      sub_id : "2",
      sub_title : "Women Ethnic",
    },{
      sub_id : "3",
      sub_title : "Women Western",
    },{
      sub_id : "4",
      sub_title : "Men Footwear",

    },{
      sub_id : "5",
      sub_title : "Women Footwear",
    },{
      sub_id : "6",
      sub_title : "Watches and Accesories",
    },{
      sub_id : "7",
      sub_title : "Bag's and Luggages",
    },]
  },{
    id:"2",
    title : "Electronics",
    img : 'https://i.ibb.co/QPXBG00/3659898.png'
  },{
    id:"3",
    title:"Home",
    img : 'https://cdn-icons-png.flaticon.com/512/5234/5234853.png'
  },{
    id:"4",
    title:"Appliances",
    img :'https://i.ibb.co/9ZpPJ2c/3362679.png'
  }]
  const handleSubCategory =async (id)=> {
    await setShowSubCategory(false);
    // console.log(category[id]);
    let subcatclass = document.getElementsByClassName('sidebar_SidebarCat__gyveP');

    subcatclass[classId].style.margin =await '7px 7px';
    subcatclass[classId].style.borderRadius =await '6px';
    subcatclass[classId].style.background =await 'antiquewhite';

    subcatclass[id].style.margin = '7px 0px';
    subcatclass[id].style.borderRadius = '0';
    subcatclass[id].style.background = '#efcfa4';

    await setClassId(id);
    await setSubCategory(category[id]);
    await setShowSubCategory(true);

  }


  const handleHideSubCategories =async () =>{
    await setShowSubCategory(false);
    let subcatclass = document.getElementsByClassName('sidebar_SidebarCat__gyveP');
    subcatclass[classId].style.margin =await '7px 7px';
    subcatclass[classId].style.borderRadius =await '6px';
    subcatclass[classId].style.background =await 'antiquewhite';

  }



  return (
    <div className={style.Sidebar} onMouseLeave={()=>{handleHideSubCategories()}}>
      <div className={style.SidebarTitle} >
        <img src='https://cdn-icons-png.flaticon.com/512/7887/7887819.png' alt='category' /> 
        {/* <span>Category</span> */}
      </div>
      {category.map((val,key)=>{
        return <Category data={val} key={key} handleSubCategory = {handleSubCategory}/>
      })}
      {showSubCategory ?  <SubCategory data = {subCategory}/> : '' }
    </div>
  )
}

export default Sidebar
