import { CloseCircleOutlined } from "@ant-design/icons";
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
              </div>
              <div></div>
              {/* <CloseCircleOutlined /> */}
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
          <h4>EStimated Tax</h4>
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
    </div>
  );
};

export default CartPage;
