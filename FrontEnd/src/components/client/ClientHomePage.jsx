import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";
import PumaLogo from "../../../public/pumalogo.png";
import AdidasLogo from "../../../public/adidaslogo.png";
import NikeLogo from "../../../public/nikelogo.png";
import PopularCollection from "../../../public/shoetrans.png";
import ProductImage from "../../../public/shoetransparent.png";
import SliderHeader from "./SliderHeader";
import Showrooms from "./Showrooms";
import DiscoverAll from "./DiscoverAll";
import Footer from "./Footer";

const ClientHomePage = () => {
  return (
    <div className="client-home">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5em 3em",
          //   backgroundColor: "blue",
        }}
        className="client-navbar"
      >
        <div>
          <h2 className="web-title">kick X</h2>
        </div>
        <div>
          <ul
            className="menus"
            style={{
              display: "flex",
              listStyleType: "none",
              columnGap: "1.5em",
              textTransform: "capitalize",
            }}
          >
            <li>Home</li>
            <li>Shop</li>
            <li>Product</li>
            <li>contact us</li>
          </ul>
        </div>
        <div style={{ display: "flex", columnGap: "1em" }}>
          <span>
            <SearchOutlined className="icon" />
          </span>
          <span className="wish-icon-parent">
            <HeartOutlined className="icon wish-icon" />
            <h6 className="wish-count">5</h6>
          </span>
          <span className="bag-icon-parent">
            <ShoppingCartOutlined className="icon bag-icon-child" />
            <h6 className="bag-count">12</h6>
          </span>
        </div>
      </div>
      <SliderHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0em 0em 2em 0",
          margin: "0em 3em",
          //   background: "blue",
          borderBottom: "2px solid rgb(143, 138, 138)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "1.35em",
          }}
        >
          <span style={{ fontSize: ".65em", fontWeight: "bold" }}>
            Top rated
          </span>
          <span style={{ fontWeight: "bold" }}>BRANDS</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "4em",
          }}
          className="brand-logos"
        >
          <img src={AdidasLogo} alt="" className="img-brand-logo" />
          <img src={PumaLogo} alt="" className="img-brand-logo" />
          <img src={NikeLogo} alt="" className="img-brand-logo" />
        </div>
      </div>
      <div
        style={{ padding: "0em 3em", margin: "2em 0em" }}
        className="collections"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "4em",
          }}
        >
          <h2 className="popular">Popular Collections</h2>
          <h4
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              cursor: "pointer",
            }}
            className="discover"
          >
            Discover All
          </h4>
        </div>
        <div className="collection-items">
          {Array.from({ length: 3 }, (_, idx) => {
            return (
              <div key={idx} className="collection-item">
                <img
                  className="collection-item-image"
                  src={PopularCollection}
                  alt=""
                />
                <div className="popular-collection-item-name">
                  <h5>Nike Air Max 270 React</h5>
                  <h4>$280.00</h4>
                </div>
                <div
                  onClick={() => {
                    alert("cart clicked");
                  }}
                  className="popular-cart-bag-parent"
                >
                  <ShoppingOutlined className="popular-cart-bag-item" />{" "}
                  <h6>Add to Cart</h6>
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
      <div
        style={{ padding: "0em 3em", margin: "2em 0em" }}
        className="collections"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "4em",
          }}
        >
          <h2 className="popular">Trending Now</h2>
          <h4
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              cursor: "pointer",
            }}
            className="discover"
          >
            Discover All
          </h4>
        </div>
        <div className="collection-items">
          {Array.from({ length: 2 + 1 }, (_, idx) => {
            return (
              <div key={idx} className="collection-item">
                <img
                  className="collection-item-image"
                  src={PopularCollection}
                  alt=""
                />
                <div className="popular-collection-item-name">
                  <h5>Nike Air Max 270 React</h5>
                  <h4>$280.00</h4>
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
      <div
        style={{ padding: "0em 3em", margin: "2em 0em" }}
        className="all-collections"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "4em",
          }}
        >
          <h2 className="popular">All Collections</h2>
          <h4
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              cursor: "pointer",
            }}
            className="discover"
          >
            Discover All
          </h4>
        </div>
        <div className="all-collection-items">
          {Array.from({ length: 12 }, (_, idx) => {
            return (
              <div key={idx} className="all-collection-item">
                <img
                  className="all-collection-item-image"
                  src={ProductImage}
                  alt=""
                />
                <div className="all-collection-item-name">
                  <h5>Nike Air Max 270 React</h5>
                  <h4>$280.00</h4>
                </div>
                <div
                  onClick={() => {
                    alert("cart clicked");
                  }}
                  className="cart-bag-parent"
                >
                  <ShoppingOutlined className="cart-bag-item" />
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
      <DiscoverAll />
      <Showrooms />
      <div className="member-container">
        <div>
          <h1 className="become">Become</h1>
          <h4 className="member">A member</h4>
          <br />
          <p className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur
            labore. Perferendis accusantium possimus ut?
          </p>
          <br />
          <button className="join-now">JOIN NOW</button>
        </div>
        <div>
          <h1 className="k">kick X</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientHomePage;
