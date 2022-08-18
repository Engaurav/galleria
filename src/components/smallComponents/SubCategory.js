import React, { useEffect, useState } from 'react';
import { useShop } from '../../hooks';
import style from '../../styles/subcategory.module.css'
import FurtherCategory from './FurtherCategory';

function SubCategory(props) {
  const [subCategory,setSubCategory] = useState([]);
  const [subCategory1,setSubCategory1] = useState([]);

  const [showfurtherCategory,setShowfurtherCategory] = useState(false);
  const [furtherCategory,setFurtherCategory] = useState([]);
  const [ classId, setClassId] = useState(0);
  const [search,setSearch] = useState();
  const shop = useShop();
  const data = props.data;

  useEffect(()=>{
    if(data.subcategory){
        setSubCategory(data.subcategory);
        setSubCategory1(data.subcategory);
    }else{
        setSubCategory1([]);
        setSubCategory([]);
    }

  },[data.subcategory,data.title])

  const handleFurtherSubCategory =async (sub_id)=> {
    await setShowfurtherCategory(false)
    // console.log(subCategory[sub_id])
    let furtherCatClass = document.getElementsByClassName(style.SubCategoryItem); 
    furtherCatClass[classId].style.background =await '#efcfa4'; 
    if(subCategory[sub_id].further_category){
        furtherCatClass[classId].style.background =await '#efcfa4';
        furtherCatClass[sub_id].style.background = 'antiquewhite';
        await setClassId(sub_id);
        await setFurtherCategory(subCategory[sub_id].further_category)
        await setShowfurtherCategory(true)
    }

  }

  const handleShowItems =async (items,title) => {
    shop.setCurrentTitle(title);
    console.log(items)
    if(items){
      shop.setCurrentItems(items);
    }else{
      shop.setCurrentItems([]);
    }
  }

  const handleSearch = (e) =>{
    let subData = subCategory1.filter((value,key)=>{
      return value.sub_title.includes(e.target.value);
    })
    setSubCategory(subData);
  }


  return (
    <div className={style.SubCategory} >
      <div><input type='search' style={{width:'155px',margin:'0 1px'}} onKeyUp={(e)=>{handleSearch(e)}} placeholder='Search Category'/></div>
      { subCategory.length > 0 ? subCategory.map((value,key)=>{
        return (
            <div key={key} className={style.SubCategoryItem} onMouseEnter={()=>{handleFurtherSubCategory(value.sub_id)}} onClick={()=>{handleShowItems(value.items,value.sub_title)}}><h2>{value.sub_title}</h2></div>
        )
      }) : <h3 style={{textAlign:'center'}}>No SubCategory</h3>}
    { showfurtherCategory ? <FurtherCategory data = {furtherCategory}/> : ''}
    </div>
  )
}

export default SubCategory
