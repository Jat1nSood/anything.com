import React from "react";
import makeup from "../assets/makeup.jpg";
import fashion from "../assets/fashion.jpg";
import gadgets from "../assets/gadgets.jpg";
import wfh from "../assets/wfh.jpg";
import revamp from "../assets/revamp.jpg";
import gym from "../assets/gym.jpg";
import bazar from "../assets/bazar.jpg";
import home from "../assets/home.jpg";

import { useNavigate } from "react-router-dom";

import "../CSS/bigCard.css";
export default function BigCards() {
  const navigate = useNavigate();

  function handleSeeMore(categoryname) {
    // console.log(`/category/${categoryname}`);
    navigate(`/category/${categoryname}`);
  }
  return (
    <div className="bigCardOuter">
      <div className="bigCardContainer">
        <div className="bigCard">
          <h2>Makeup products</h2>
          <img src={makeup} alt="" />
          {/* <Link onClick={() => handleSeeMore("makeup")} >
            <p>See more</p>
          </Link> */}

          <p className="bigCardLink" onClick={() => handleSeeMore("makeup")}>
            See more
          </p>
        </div>

        <div className="bigCard">
          <h2>New looks for new season </h2>
          <img src={fashion} alt="" />

          <p className="bigCardLink" onClick={() => handleSeeMore("fashion")}>
            See more
          </p>
        </div>
        <div className="bigCard">
          <h2>Do up your home</h2>
          <img src={home} alt="" />

          <p
            className="bigCardLink"
            onClick={() => handleSeeMore("decoration")}
          >
            See more
          </p>
        </div>
        <div className="bigCard">
          <h2>Smart Gadgets</h2>
          <img src={gadgets} alt="" />

          <p
            onClick={() => handleSeeMore("smart gadgets")}
            className="bigCardLink"
          >
            See more
          </p>
        </div>
        <div className="bigCard">
          <h2>Value bazar</h2>
          <img src={bazar} alt="" />

          <p onClick={() => handleSeeMore("grocery")} className="bigCardLink">
            See more
          </p>
        </div>

        <div className="bigCard">
          <h2>Work from home essentials</h2>
          <img src={wfh} alt="" />
          <p onClick={() => handleSeeMore("wfh")} className="bigCardLink">
            See more
          </p>
        </div>

        <div className="bigCard">
          <h2>Revamp your home in style </h2>
          <img src={revamp} alt="" />

          <p onClick={() => handleSeeMore("furniture")} className="bigCardLink">
            See more
          </p>
        </div>

        <div className="bigCard">
          <h2>Gym equipments</h2>
          <img src={gym} alt="" />
            <p onClick={() => handleSeeMore("gym")} className="bigCardLink">
              See more
            </p>
        </div>
      </div>
    </div>
  );
}
