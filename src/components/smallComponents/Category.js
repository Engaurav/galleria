import React from 'react'
import style from '../../styles/sidebar.module.css'

function Category(props) {
  const { img , title,id } = props.data;
  return (
    <>
    <div className={style.SidebarCat} onMouseEnter={()=>{props.handleSubCategory(id)}}>
        <div className={style.SidebarCatImage}>
          <img src={img} alt='mobile'/>
        </div>
        <div className={style.SidebarCatTitle}>
            {title}
        </div>
    </div>
   
    </>
  )
}

export default Category
