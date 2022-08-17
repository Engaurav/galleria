import React from 'react';
import style from '../../styles/subcategory.module.css'

function SubCategory(props) {
  const data = props.data;
  console.log(data)
  return (
    <div className={style.SubCategory} >
      <h2>  {data.title}</h2>
    
    </div>
  )
}

export default SubCategory
