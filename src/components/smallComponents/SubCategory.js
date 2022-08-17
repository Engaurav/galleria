import React, { useEffect, useState } from 'react';
import style from '../../styles/subcategory.module.css'
import FurtherCategory from './FurtherCategory';

function SubCategory(props) {
  const [subCategory,setSubCategory] = useState([]);
  const [showfurtherCategory,setShowfurtherCategory] = useState(false);
  const [furtherCategory,setFurtherCategory] = useState([]);

  const data = props.data;

  useEffect(()=>{
    if(data.subcategory){
        setSubCategory(data.subcategory);
    }else{
        setSubCategory([]);
    }

  },[data.subcategory,data.title])

  const handleFurtherSubCategory =async (sub_id)=> {
    await setShowfurtherCategory(false)
    console.log(subCategory[sub_id])
    

    if(subCategory[sub_id].further_category){
        await setFurtherCategory(subCategory[sub_id].further_category)
        await setShowfurtherCategory(true)
    }

  }

  return (
    <div className={style.SubCategory} >
      {/* <h2>  {data.title}</h2> */}
      { subCategory.length > 0 ? subCategory.map((value,key)=>{
        return (
            <div key={key} className={style.SubCategoryItem} onMouseEnter={()=>{handleFurtherSubCategory(value.sub_id)}}><h2>{value.sub_title}</h2></div>
        )
      }) : <h3 style={{textAlign:'center'}}>No SubCategory</h3>}
    { showfurtherCategory ? <FurtherCategory data = {furtherCategory}/> : ''}
    </div>
  )
}

export default SubCategory
