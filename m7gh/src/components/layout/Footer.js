import React from "react";
import FooterAbout from "../footer/FooterAbout";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer grey darken-3">
        <div className="container ">
          <div className="row">
            <div className="col s12 l6">
              <FooterAbout />
            </div>
            <div class="col s12 l4 offset-l2">
              <h5>Connect</h5>
              <ul>
                <li>
                  <a href="#" class="grey-text text-lighten-3">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright grey darken-4">
          <div class="container center-alight">&copy; 2018</div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
