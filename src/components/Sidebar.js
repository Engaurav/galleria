import React, { useEffect, useState } from 'react'
import { useShop } from '../hooks';
import style from '../styles/sidebar.module.css'
import Category from './smallComponents/Category'
import SubCategory from './smallComponents/SubCategory'
function Sidebar() {
  const [showSubCategory,setShowSubCategory] = useState(false);
  const [subCategory,setSubCategory] = useState({});
  const [ classId, setClassId] = useState(0);
  const [category,setCategory] = useState([]);
  const shop = useShop();

  useEffect(()=>{
    setCategory(shop.allProducts)
  },[shop.allProducts])


  const handleSubCategory =async (id)=> {
    await setShowSubCategory(false);
    let subcatclass = document.getElementsByClassName(style.SidebarCat);
    subcatclass[classId].style.margin = await '7px 7px';
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
    let subcatclass = document.getElementsByClassName(style.SidebarCat);
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
      {/* <SubCategory/> */}
    </div>
  )
}

export default Sidebar
