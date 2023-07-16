import React from 'react'
import electronics from '../assets/electronics.jpg'
import product from '../assets/product.jpg'

import beauty from '../assets/beauty.jpg'
import grocery from '../assets/grocery.jpg'


import '../CSS/shopbycategory.css'

export default function ShopByCategory() {
  return (

    <div className='outerCategoryContainer'>
        <h1>Shop By Category</h1>
    <div className='categoryContainer'>


        <div className='category'>
            <img src={electronics}/>
            <h2>Electronics</h2>

        </div>

        <div className='category'>
        <img src={product}/>

            <h2>Fashion</h2>
        </div>

        <div className='category'>
        <img src={beauty}/>

            <h2>Lifestyle</h2>
        </div>

        <div className='category'>
        <img src={grocery}/>

            <h2>Groceries</h2>
        </div>
      
    </div>
    </div>
  )
}
