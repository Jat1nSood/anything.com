import "./App.css";
import "../src/CSS/app.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import CategoryPage from "./components/CategoryPage";
import { RecoilRoot } from "recoil";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";

import { CartProvider } from "./context/context";
import MyCart from "./components/MyCart";
import SoloProduct from "./components/SoloProduct";
import MyOrders from "./components/MyOrders";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="main">
        <RecoilRoot>
          <CartProvider>
            <Router>
              <div className="centerContainerNav">
                <div className="boxWidth">
                  <Navbar />
                </div>
              </div>
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="landingcenterContainer">
                      <div className="boxWidth">
                        <Landing />
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/login"
                  element={
                    <div className="centerContainer">
                      <div className="boxWidth">
                        <Login />
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/register"
                  element={
                    <div className="centerContainer">
                      <div className="boxWidth">
                        <Registration />
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/mycart"
                  element={
                    <div className="centerContainer">
                      <div className="boxWidth">
                        <MyCart />
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/category/:categoryname"
                  element={
                    <div className="centerContainer">
                      <div className="boxWidth">
                        <CategoryPage />
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/soloproduct/:id"
                  element={
                    <div className="centerContainer">
                      <div className="boxWidth">
                        <SoloProduct />
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/myorders"
                  element={
                    <div className="centerContainer">
                      <div className="boxWidth">
                        <MyOrders />
                      </div>
                    </div>
                  }
                />
              </Routes>

              <div className="centerContainerfooter">
              <div className="backToTop">Back To Top</div>

                {/* <div className="boxWidth"> */}
                  <Footer />
                </div>
              {/* </div> */}


            </Router>
          </CartProvider>
        </RecoilRoot>
      </div>
    </>
  );
}

export default App;
