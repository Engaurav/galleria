import React, { useEffect, useState } from 'react'
import { useShop } from '../../hooks';
import style from '../../styles/furthercategory.module.css'


function FurtherCategory(props) {
  const [furtherCategory,setFurtherCategory] = useState([]);
  const [furtherCategory1,setFurtherCategory1] = useState([]);
  const data = props.data;
  const shop = useShop();
  useEffect(()=>{
   setFurtherCategory(data);
   setFurtherCategory1(data);
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

  const handleSearch = (e) =>{
    let furtherData = furtherCategory1.filter((value,key)=>{
      return value.f_title.includes(e.target.value);
    })
    setFurtherCategory(furtherData);
  }

  return (
    <div className={style.FurtherCategory}>
      <div><input type='search' style={{width:'155px',margin:'0 1px'}} onKeyUp={(e)=>{handleSearch(e)}} placeholder='Search Subcategory'/></div>

      { furtherCategory.length > 0 ? furtherCategory.map((value,key)=>{
        return (
            <div key={key} className={style.FurtherCategoryItem} onClick={()=>{handleShowItems(value.items,value.f_title)}}><h2>{value.f_title}</h2></div>
        )
      }) : <h3 style={{textAlign:'center'}}>No SubCategory</h3>}
    </div>
  )
}

export default FurtherCategory
