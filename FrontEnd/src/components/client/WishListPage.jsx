import { ShoppingOutlined, HeartOutlined } from "@ant-design/icons";
import ProductImage from "../../../public/shoetransparent.png";
import { useGlobalContext } from "../AppProvider";

const WishListPage = () => {
  const { wishLength } = useGlobalContext();
  return (
    <div className="wish-list">
      <h2 className="title">Wishlist</h2>
      <div className="all-collection-items">
        {Array.from({ length: wishLength }, (_, idx) => {
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
              <div className="absolute-parent">
                <div className="cart-icon-box">
                  <HeartOutlined className="wish-icon-product product-overlay-icon" />
                </div>
                <div className="cart-icon-box">
                  <ShoppingOutlined className="cart-bag-item product-overlay-icon" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishListPage;
