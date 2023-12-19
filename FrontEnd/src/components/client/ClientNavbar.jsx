import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../AppProvider";

export const ClientNavbar = () => {
  const { wishLength } = useGlobalContext();

  return (
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
        <Link to="/" className="router-link">
          <h2 className="web-title">kick X</h2>
        </Link>
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
          <Link to="/" className="router-link">
            Home
          </Link>
          <Link to="/shop" className="router-link">
            Shop
          </Link>
          <Link to="/product" className="router-link">
            Product
          </Link>
          <Link className="router-link">contact us</Link>
        </ul>
      </div>
      <div style={{ display: "flex", columnGap: "1em" }}>
        <span>
          <SearchOutlined className="icon" />
        </span>
        <Link to="wishlist" className="router-link">
          <span className="wish-icon-parent">
            <HeartOutlined className="icon wish-icon" />
            {wishLength > 0 ? <h6 className="wish-count">{wishLength}</h6> : ""}
          </span>
        </Link>
        <Link to="/cart" className="router-link">
          <span className="bag-icon-parent">
            <ShoppingCartOutlined className="icon bag-icon-child" />
            <h6 className="bag-count">12</h6>
          </span>
        </Link>
      </div>
    </div>
  );
};
