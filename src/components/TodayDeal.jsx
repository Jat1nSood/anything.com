// import React from "react";
// import "../CSS/todaydeals.css";
// import product from "../assets/product.jpg";
// import bata from "../assets/bata.jpg";
// import PC from "../assets/PC.jpg";
// import tv from "../assets/tv.jpg";
// import  accessories from "../assets/accessories.jpg";
// import  clothes from "../assets/clothes.jpg";
// import { useNavigate } from "react-router-dom";

// export default function TodayDeal() {
//   const navigate = useNavigate();
//   const handleClick = (where)=>{
//     navigate(`/category/${where}`)
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="todayDealsContainer">
//       <h1>Today's Deals</h1>

//       <div className="scrollableDealsCardContainer">
//         <div className="todayDealsCard">
//           <img onClick={() =>handleClick('fashion')}  src={product} />
//           <div className="todayDealTitle">Upto 50% off </div>
//           <div className="todayDealDescription">
//             Shirts, Joggers & more
//           </div>
//         </div>

//         <div className="todayDealsCard">
//         <img onClick={() =>handleClick('pc')} src={PC} />
//           <div className="todayDealTitle">Upto 50% off </div>
//           <div className="todayDealDescription">
//            Best offers on PC
//           </div>

//         </div>

//         <div className="todayDealsCard">
//         <img onClick={()=>handleClick('shoes')}src={bata} />
//           <div className="todayDealTitle">Upto 50% off </div>
//           <div className="todayDealDescription">
//             Bata, Hush & more
//           </div>
//         </div>

//         <div className="todayDealsCard">
//         <img onClick={()=>handleClick('electronics')} src={tv} />
//           <div className="todayDealTitle">Upto 50% off </div>
//           <div className="todayDealDescription">
//             TV, Refrigerator & more
//           </div>
//         </div>
//         <div className="todayDealsCard">
//         <img onClick={()=>handleClick('fashion')} src={clothes} />
//           <div className="todayDealTitle">Upto 50% off</div>
//           <div className="todayDealDescription">
//             Shirts, Joggers & more
//           </div>
//         </div>

//         <div className="todayDealsCard">
//         <img onClick={()=>handleClick('electronics')} src={accessories} />
//           <div className="todayDealTitle">Upto 50% off </div>
//           <div className="todayDealDescription">
//             Mobile, Accessories & more
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }
// import React, { useState } from "react";
// import "../CSS/todaydeals.css";
// import product from "../assets/product.jpg";
// import bata from "../assets/bata.jpg";
// import PC from "../assets/PC.jpg";
// import tv from "../assets/tv.jpg";
// import accessories from "../assets/accessories.jpg";
// import clothes from "../assets/clothes.jpg";
// import { useNavigate } from "react-router-dom";

// export default function TodayDeal() {
//   const navigate = useNavigate();
//   const handleClick = (where) => {
//     navigate(`/category/${where}`);
//   };

//   const dealsData = [
//     { image: product, category: "fashion", description: "Shirts, Joggers & more" },
//     { image: PC, category: "pc", description: "Best offers on PC" },
//     { image: bata, category: "shoes", description: "Bata, Hush & more" },
//     { image: tv, category: "electronics", description: "TV, Refrigerator & more" },
//     { image: clothes, category: "fashion", description: "Shirts, Joggers & more" },
//     { image: accessories, category: "electronics", description: "Mobile, Accessories & more" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % dealsData.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + dealsData.length) % dealsData.length);
//   };

//   return (
//     <div className="todayDealsContainer">
//       <h1>Today's Deals</h1>

//       <div className="carouselContainer">
//         <div className="todayDealsCard">
//           <img onClick={() => handleClick(dealsData[currentIndex].category)} src={dealsData[currentIndex].image} />
//           <div className="todayDealTitle">Upto 50% off </div>
//           <div className="todayDealDescription">{dealsData[currentIndex].description}</div>
//         </div>
//         <div className="carouselNav">
//           <button onClick={handlePrev}>&lt;</button>
//           <button onClick={handleNext}>&gt;</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import "../CSS/todaydeals.css";
// import product from "../assets/product.jpg";
// import bata from "../assets/bata.jpg";
// import PC from "../assets/PC.jpg";
// import tv from "../assets/tv.jpg";
// import accessories from "../assets/accessories.jpg";
// import clothes from "../assets/clothes.jpg";
// import { useNavigate } from "react-router-dom";

// export default function TodayDeal() {
//   const navigate = useNavigate();
//   const handleClick = (where) => {
//     navigate(`/category/${where}`);
//   };

//   const dealsData = [
//     {
//       image: product,
//       category: "fashion",
//       description: "Shirts, Joggers & more",
//     },
//     { image: PC, category: "pc", description: "Best offers on PC" },
//     { image: bata, category: "shoes", description: "Bata, Hush & more" },
//     {
//       image: tv,
//       category: "electronics",
//       description: "TV, Refrigerator & more",
//     },
//     {
//       image: clothes,
//       category: "fashion",
//       description: "Shirts, Joggers & more",
//     },
//     {
//       image: accessories,
//       category: "electronics",
//       description: "Mobile, Accessories & more",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % dealsData.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + dealsData.length) % dealsData.length
//     );
//   };

//   return (
//     <div className="todayDealsContainer">
//       <h1>Today's Deals</h1>

//       <div
//         className={`scrollableDealsCardContainer ${
//           isMobile ? "mobileCarousel" : ""
//         }`}
//       >
       
//           <div className="todayDealsCard">
//             <img onClick={() => handleClick("fashion")} src={product} />
//             <div className="todayDealTitle">Upto 50% off </div>
//             <div className="todayDealDescription">Shirts, Joggers & more</div>
//           </div>

//           <div className="todayDealsCard">
//             <img onClick={() => handleClick("pc")} src={PC} />{" "}
//             <div className="todayDealTitle">Upto 50% off </div>
//             <div className="todayDealDescription">Best offers on PC</div>
//           </div>

//           <div className="todayDealsCard">
//             <img onClick={() => handleClick("shoes")} src={bata} />
//             <div className="todayDealTitle">Upto 50% off </div>
//             <div className="todayDealDescription">Bata, Hush & more</div>
//           </div>

//           <div className="todayDealsCard">
//             <img onClick={() => handleClick("electronics")} src={tv} />
//             <div className="todayDealTitle">Upto 50% off </div>
//             <div className="todayDealDescription"> TV, Refrigerator & more</div>
//           </div>
//           <div className="todayDealsCard">
//             <img onClick={() => handleClick("fashion")} src={clothes} />
//             <div className="todayDealTitle">Upto 50% off</div>
//             <div className="todayDealDescription">Shirts, Joggers & more</div>
//           </div>

//           <div className="todayDealsCard">
//             {" "}
//             <img
//               onClick={() => handleClick("electronics")}
//               src={accessories}
//             />{" "}
//             <div className="todayDealTitle">Upto 50% off </div>
//             <div className="todayDealDescription">
//               Mobile, Accessories & more
//             </div>
//           </div>
        
//         {/* <img onClick={() => handleClick(dealsData[currentIndex].category)} src={dealsData[currentIndex].image} />
//           <div className="todayDealTitle">Upto 50% off </div>
//           <div className="todayDealDescription">{dealsData[currentIndex].description}</div> */}
//       </div>
//       {isMobile && (
//         <div className="carouselNav">
//           <button onClick={handlePrev}>&lt;</button>
          
//           <button onClick={handleNext}>&gt;</button>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import "../CSS/todaydeals.css";
import product from "../assets/product.jpg";
import bata from "../assets/bata.jpg";
import PC from "../assets/PC.jpg";
import tv from "../assets/tv.jpg";
import accessories from "../assets/accessories.jpg";
import clothes from "../assets/clothes.jpg";
import { useNavigate } from "react-router-dom";

export default function TodayDeal() {
  const navigate = useNavigate();
  const handleClick = (where) => {
    navigate(`/category/${where}`);
  };

  const dealsData = [
    {
      image: product,
      category: "fashion",
      description: "Shirts, Joggers & more",
    },
    { image: PC, category: "pc", description: "Best offers on PC" },
    { image: bata, category: "shoes", description: "Bata, Hush & more" },
    {
      image: tv,
      category: "electronics",
      description: "TV, Refrigerator & more",
    },
    {
      image: clothes,
      category: "fashion",
      description: "Shirts, Joggers & more",
    },
    {
      image: accessories,
      category: "electronics",
      description: "Mobile, Accessories & more",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dealsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + dealsData.length) % dealsData.length
    );
  };

  return (
    <>

    {isMobile ? (
      <>
      <div className="todayDealsContainer">
      <h1>Today's Deals</h1>

      <div className="scrollableDealsCardContainer">
      <button onClick={handlePrev}>&lt;</button>

        {dealsData.map((deal, index) => (
          <div
            key={index}
            className={`todayDealsCard ${
              currentIndex === index ? "activeCard" : ""
            }`}
          >
            <img
              onClick={() => handleClick(deal.category)}
              src={deal.image}
              alt=""
            />
            <div className="todayDealTitle">Upto 50% off </div>
            <div className="todayDealDescription">{deal.description}</div>
          </div>
        ))}
              <button onClick={handleNext}>&gt;</button>

      </div>


   
      </div>
      
      </>
    )
        :<>
         <div className="todayDealsContainer">
      <h1>Today's Deals</h1>

      <div className="scrollableDealsCardContainer">
        {dealsData.map((deal, index) => (
          <div
            key={index}
            className={`todayDealsCard ${
              currentIndex === index ? "activeCard" : ""
            }`}
          >
            <img
              onClick={() => handleClick(deal.category)}
              src={deal.image}
              alt=""
            />
            <div className="todayDealTitle">Upto 50% off </div>
            <div className="todayDealDescription">{deal.description}</div>
          </div>
        ))}
      </div>
      </div>
         
         </>
        }
    </>
  );
}
