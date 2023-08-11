import React from 'react'

import electronicsImage from '../assets/electronics.jpg'
import product from '../assets/product.jpg'
import beauty from '../assets/beauty.jpg'
import grocery from '../assets/grocery.jpg'


import '../CSS/shopbycategory.css'
import Category from './Category'

export default function ShopByCategory() {


  return (

    <div className='outerCategoryContainer'>
        <h1>Shop By Category</h1>
    <div className='categoryContainer'>

        <Category id = {"electronics"} imgsrc={electronicsImage} name="Electronics" />
        <Category id = {"fashion"} imgsrc={product} name="Fashion" />
        <Category id = {"lifestyle"}  imgsrc={beauty} name="Lifestyle" />
        <Category id = {"grocery"} imgsrc={grocery} name="Groceries" />
      
    </div>
    </div>
  )
}
