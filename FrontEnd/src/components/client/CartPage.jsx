import { CloseCircleOutlined } from "@ant-design/icons";
import { FaRegHeart, FaTrashAlt } from "react-icons/fa";
import CartImage from "../../../public/shoetransparent.png";

const CartPage = () => {
  return (
    <div className="cart-page-parent">
      {/* <h2>Cart Page</h2> */}
      <div className="cart-left">
        <div className="free-shipping">
          <div>
            <h3>Free Shipping for members</h3>
            <p>
              Become a kick X member for fast and free shipping
              <b style={{ padding: "0 .5em" }}>
                <u>Join Us</u>
              </b>
            </p>
          </div>
          <CloseCircleOutlined className="close-icon" />
        </div>
        <div className="free-shipping">
          <div>
            <h3>20% off select styles</h3>
            <p>Log in and use code kick X 20</p>
          </div>
          <CloseCircleOutlined className="close-icon" />
        </div>
        <section className="cart-parent">
          <h2 className="cart-title">Cart</h2>
          <article className="cart-items">
            <div className="cart-item">
              <div>
                <img src={CartImage} alt="" className="cart-img" />
                <div className="cart-item-info">
                  <h4>Nike Air Max 24 React</h4>
                  <p>Men's Shoe</p>
                  <p>White/Gray/White</p>
                  <p>Size: Large 6.5</p>
                  <p>Quantity: 01</p>
                  <p className="cart-item-icons">
                    <FaRegHeart
                      onClick={() => {
                        alert("working");
                      }}
                    />
                    <FaTrashAlt
                      onClick={() => {
                        alert("working");
                      }}
                    />
                  </p>
                </div>
              </div>
              <div>$280.00</div>
            </div>
          </article>
        </section>
      </div>
      <div className="cart-right">
        <h2>Summary</h2>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: ".5em 0",
            padding: ".5em 0",
          }}
        >
          <h4>Subtotal</h4>
          <b>$280.00</b>
        </span>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: ".5em 0",
            padding: ".5em 0",
          }}
        >
          <h4>Estimated Shipping</h4>
          <b>$8.00</b>
        </span>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: ".5em 0",
            padding: ".5em 0",
          }}
        >
          <h4>Estimated Tax</h4>
          <b>--</b>
        </span>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "2em 0",
            padding: "1em 0",
            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          }}
        >
          <h4>Total</h4>
          <b>$288.00</b>
        </span>
        <div className="cart-btns">
          <button className="cart-btn checkout-btn">CHECKOUT</button>
          <button className="cart-btn paypal-btn">PAYPAL</button>
        </div>
      </div>
      <div className="shipping-details">
        <div>
          <h3>Shipping</h3>
          <p>
            To get shipping information
            <span className="underline">Edit Location</span>
          </p>
        </div>
        <div>
          <h3>Free Pickup</h3>
          <p className="underline">Find A Shop</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
