import React from "react";
import "../CSS/footer.css";
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer">

          <div className="linksContainer">
            <div className="container1">
              <h4 className="linksHeading">Get to Know Us</h4>
              <p>About Us</p>

              <p>Careers</p>

              <p>Press Release</p>
              <p>Anything science</p>
            </div>
            <div className="container1">
              <h4>Connect with Us</h4>

              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </div>
            <div className="container1">
              <h4>Make Money With Us </h4>

              <p>Sell On Anything</p>
              <p>Fulfilment by Anything</p>
              <p>Anything Pay on Merchants</p>
              <p>Advertise Your Products</p>
            </div>
          </div>

          <div className="footerLine">

          </div>

          <div className="footerCopyright">
            <h1>AnyThing.com</h1>
            <p>All Copyrights Reserved 2023.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
