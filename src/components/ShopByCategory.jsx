import React from 'react'

import electronics from '../assets/electronics.jpg'
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

        <Category imgsrc={electronics} name="Electronics" />
        <Category imgsrc={product} name="Fashion" />
        <Category imgsrc={beauty} name="Lifestyle" />
        <Category imgsrc={grocery} name="Groceries" />
      
    </div>
    </div>
  )
}
