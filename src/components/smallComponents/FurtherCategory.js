import React, { useEffect, useState } from 'react'
import style from '../../styles/furthercategory.module.css'


function FurtherCategory(props) {
  const [furtherCategory,setFurtherCategory] = useState([]);
  const data = props.data;
  console.log(data)

  useEffect(()=>{
   setFurtherCategory(data);
  },[data])
  return (
    <div className={style.FurtherCategory}>
      { furtherCategory.length > 0 ? furtherCategory.map((value,key)=>{
        return (
            <div key={key} className={style.FurtherCategoryItem}><h2>{value.f_title}</h2></div>
        )
      }) : <h3 style={{textAlign:'center'}}>No SubCategory</h3>}
    </div>
  )
}

export default FurtherCategory
