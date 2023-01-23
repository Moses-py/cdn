import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="foooter-div-1">
              <img
                src="\assets\Logo=yellow.png"
                alt="brand-logo"
                className="brand-logo"
              />
              <p className="text-justify">
                Chuks-Darls is a major distributor of ethanol who recently
                diversified into real estate with over 5+ estates in the city of
                Aba.
              </p>
            </div>

            <div className="footer-div-2 footer-align-right">
              <h6>Businesses</h6>
              <ul className="footer-links">
                <li>
                  <a href="/cdn-liquor">Chuks Darls Liquor</a>
                </li>
                <li>
                  <a href="/cdn-estates">Chuks Darls Estates</a>
                </li>
                <li>
                  <a href="/">Chuks Darls Farms</a>
                </li>
              </ul>
            </div>

            <div className="footer-div-3">
              <h6>Legal</h6>
              <ul className="footer-links">
                <li>
                  <a href="/">Terms and Conditions</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="footer-div-4 footer-align-right">
              <h6>About Us</h6>
              <ul className="footer-links">
                <li>
                  <a href="/cdn-about">Our Teams</a>
                </li>
                <li>
                  <a href="/cdn-about">Our Story</a>
                </li>
                <li>
                  <a href="/cdn-about">Careers</a>
                </li>
                <li>
                  <a href="/cdn-about">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="copyright-container">
          <div className="copyright-wrapper">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by
              <a href="/"> Chuck Darls</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
