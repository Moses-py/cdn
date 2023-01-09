import React from "react";
import "./footer.css";
// import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
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

            <div className="footer-div-2">
              <h6>Businesses</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">
                    Chuks Darls Liquor
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    Chuks Darls Homes
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    Chuks Darls Farms
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-div-3">
              <h6>Legal</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">Terms and Conditions</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="footer-div-4">
              <h6>About Us</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">
                    Our Teams
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                    Contact Us
                  </a>
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
