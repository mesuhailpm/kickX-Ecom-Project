import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

export const ClientNavbar = () => {
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
  );
};
