import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer bg-dark text-light py-5" id="footer">
      <div className="footer-content container mb-4 row row-gap-4 row-gap-lg-0 ">
        <div className="footer-left flex-grow-1 col-xs-12 col-sm-6 col-lg-6">
          <img src={assets.logo} alt="logo" />
          <p className="mt-4 text-white-50">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients an culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, One delicious meal at a time.
          </p>
          <div className="social-links d-flex gap-3">
            <img src={assets.facebook_icon} alt="facebook icon" />
            <img src={assets.twitter_icon} alt="twitter icon" />
            <img src={assets.linkedin_icon} alt="linkedIn icon" />
          </div>
        </div>
        <div className="footer-center col-xs-12 col-sm-6 col-lg-3">
          <h2 className="text-uppercase">company</h2>
          <ul className="text-start">
            <li>home</li>
            <li>about us</li>
            <li>delivery</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className="footer-right col-xs-12 col-sm-6 col-lg-3">
          <h2 className="text-uppercase">get in touch</h2>
          <ul className="text-start">
            <li>+20-011-2345-6789</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="container" />
      <div className="container footer-copyright text-center text-capitalize mt-4">
        copyright 2024 @ <span>tomato.com</span> - all rights reserved.
      </div>
    </div>
  );
};

export default Footer;
