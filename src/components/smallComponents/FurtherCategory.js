import React, { useEffect, useState } from 'react'
import { useShop } from '../../hooks';
import style from '../../styles/furthercategory.module.css'


function FurtherCategory(props) {
  const [furtherCategory,setFurtherCategory] = useState([]);
  const data = props.data;
  const shop = useShop();
  useEffect(()=>{
   setFurtherCategory(data);
  },[data])

  const handleShowItems =async (items,title) => {
    shop.setCurrentTitle(title);
    // console.log(items)
    if(items){
      shop.setCurrentItems(items);
    }else{
      shop.setCurrentItems([]);
    }
  }

  return (
    <div className={style.FurtherCategory}>
      { furtherCategory.length > 0 ? furtherCategory.map((value,key)=>{
        return (
            <div key={key} className={style.FurtherCategoryItem} onClick={()=>{handleShowItems(value.items,value.f_title)}}><h2>{value.f_title}</h2></div>
        )
      }) : <h3 style={{textAlign:'center'}}>No SubCategory</h3>}
    </div>
  )
}

export default FurtherCategory
