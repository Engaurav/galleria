import React from 'react'
import style from '../../styles/sidebar.module.css'

function Category(props) {

  const { img , title } = props.data;
  return (
    <div className={style.SidebarCat}>
        <div className={style.SidebarCatImage}>
          <img src={img} alt='mobile'/>
        </div>
        <div className={style.SidebarCatTitle}>
            {title}
        </div>
    </div>
  )
}

export default Category
