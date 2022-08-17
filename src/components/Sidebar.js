import React from 'react'
import style from '../styles/sidebar.module.css'
import Category from './smallComponents/Category'
function Sidebar() {
  let category = [{
    title : "Mobile",
    img : "https://i.ibb.co/cFMGqKk/3137807.png"
  },{
    title : "Fashion",
    img : "https://cdn-icons-png.flaticon.com/512/7417/7417663.png"
  },{
    title : "Electronics",
    img : 'https://i.ibb.co/QPXBG00/3659898.png'
  },{
    title:"Home",
    img : 'https://cdn-icons-png.flaticon.com/512/5234/5234853.png'
  },{
    title:"Appliances",
    img :'https://i.ibb.co/9ZpPJ2c/3362679.png'
  }]
  return (
    <div className={style.Sidebar}>
      <div className={style.SidebarTitle} >
        <img src='https://cdn-icons-png.flaticon.com/512/7887/7887819.png' alt='category' /> 
        {/* <span>Category</span> */}
      </div>
      {category.map((val,key)=>{
        return <Category data={val} key={key}/>
      })}

    </div>
  )
}

export default Sidebar
