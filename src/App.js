import "./App.css";
import "../src/CSS/app.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <>
      {/* Main Div */}

      <div className="main">
        <Router>
        <div className="centerContainer">
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
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
