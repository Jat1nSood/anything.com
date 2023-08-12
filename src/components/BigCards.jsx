import React from 'react'
import makeup from '../assets/makeup.jpg'
import fashion from '../assets/fashion.jpg'
import gadgets from '../assets/gadgets.jpg'
import wfh from '../assets/wfh.jpg'
import revamp from '../assets/revamp.jpg'
import gym from '../assets/gym.jpg'
import bazar from '../assets/bazar.jpg'
import home from '../assets/home.jpg'

import { useNavigate } from 'react-router-dom'


import '../CSS/bigCard.css'
import { Link } from 'react-router-dom'
export default function BigCards() {
    const navigate = useNavigate();

    function handleSeeMore(categoryname){
        console.log("function called")
        navigate(`/category/${categoryname}`);

    }
  return (
    <div className='bigCardOuter'>

        <div className='bigCardContainer'>
            <div className='bigCard'>
                <h2>Makeup products</h2>
                <img src={makeup} alt=""/>
                <Link onClick = {handleSeeMore("makeup")}className='bigCardLink'><p>See more</p></Link>
            </div>

            <div className='bigCard'>
                <h2>New looks for new season </h2>
                <img src={fashion} alt=""/>
                <Link onClick = {handleSeeMore("fashion")}className='bigCardLink'><p>See more</p></Link>

            </div>
            <div className='bigCard'>
                <h2>Do up your home</h2>
                <img src={home} alt=""/>
                <Link onClick = {() =>handleSeeMore("decoration")}className='bigCardLink'><p>See more</p></Link>

            </div>
            <div className='bigCard'>
                <h2>Smart Gadgets</h2>
                <img src={gadgets} alt=""/>
                <Link onClick = {()=>handleSeeMore("smart gadgets")} className='bigCardLink'><p>See more</p></Link>

            </div>
            <div className='bigCard'>
                <h2>Value bazar</h2>
                <img src={bazar} alt=""/>
                <Link onClick = {()=>handleSeeMore("grocery")}className='bigCardLink'><p>See more</p></Link>

            </div>

            <div className='bigCard'>
                <h2>Work from home essentials</h2>
                <img src={wfh} alt=""/>
                <Link onClick = {()=>handleSeeMore("wfh")} className='bigCardLink'><p>See more</p></Link>

            </div>

            <div className='bigCard'>
                <h2>Revamp your home in style </h2>
                <img src={revamp} alt=""/>
                <Link onClick = {() =>handleSeeMore("furniture")} className='bigCardLink'><p>See more</p></Link>

            </div>

            <div className='bigCard'>
                <h2>Gym equipments</h2>
                <img src={gym} alt=""/>
                <Link onClick = {() =>handleSeeMore("gym")}className='bigCardLink'><p>See more</p></Link>

            </div>
        </div>

    </div>
  )
}
