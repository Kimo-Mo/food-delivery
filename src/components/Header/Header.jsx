import "./Header.css";
import HeaderImg from "/header_img.png"
const Header = () => {
  return (
    <div className="header">
        <img  src={HeaderImg} alt="Header Img" />
      <div className="header-content">
        <h1 className="fs-1 mb-xl-5 mb-3">order your favorite food here</h1>
        <p className="d-none d-md-block fs-6">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients an culinary expertise. Our mission
          is to satisfy your cravings and elevate your dining experience, One
          delicious meal at a time.
        </p>
        <button className="btn fs-6">view menu</button>
      </div>
    </div>
  );
};

export default Header;
