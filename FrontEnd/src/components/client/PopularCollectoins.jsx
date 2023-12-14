import { ShoppingOutlined } from "@ant-design/icons";
import PopularCollectionImg from "../../../public/shoetrans.png";

export const PopularCollection = () => {
  return (
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
                src={PopularCollectionImg}
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
  );
};
