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
    img : "https://i.ibb.co/cFMGqKk/3137807.png"
  },{
    id : "1",
    title : "Fashion",
    img : "https://cdn-icons-png.flaticon.com/512/7417/7417663.png"
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
