import { Carousel, Image, Flex, Button, Typography, InputNumber } from "antd";
import styles from "../../Style Modules/individualProductPage.module.css";
import { useState } from "react";
import products from "../../lib/products";
// import styles from '../../Style Modules/individualProductPage.module.css'

const ClientProductPage = () => {
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedQuantity, setSelectedQuantity] = useState("1");
  console.log(selectedSize);

  const handleSelectSize = (event) => {
    setSelectedSize(event.target.textContent.toLowerCase());
  };

  const { Text } = Typography;

  const sampleProduct = products.shoes[0]
  console.log(sampleProduct);
  // const sampleProduct = {
  //   name: "Sample Product",
  //   desscription:
  //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia blanditiis eaque neque molestiae illo.",
  //   details:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorem laudantium at illo illum repellendus quia porro aliquam delectus possimus facilis, deleniti vitae. Commodi voluptas ad autem quisquam, placeat consequatur obcaecati dolorem libero voluptatibus dolor, debitis neque accusamus quibusdam cum repudiandae accusantium provident vero eos voluptate aperiam officiis praesentium rem sit. Consequuntur iure adipisci ipsum.",
  //   sizes: ["small", "medium", "large", "extra large"],
  //   price: 950,
  //   maxPrice: 1700,
  //   images: [
  //     "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/h/x/-original-imagg6r6ythrf3qz.jpeg?q=70&crop=false",
  //     "https://rukminim2.flixcart.com/image/832/832/ktn9pjk0/shoe/6/u/5/12-cosco-blue-12-clymb-blue-original-imag6y2kyxbtgzyf.jpeg?q=70&crop=false",
  //     "https://rukminim2.flixcart.com/image/832/832/ktn9pjk0/shoe/w/8/d/12-cosco-blue-12-clymb-blue-original-imag6y2kxxcettvh.jpeg?q=70&crop=false",
  //     "https://rukminim2.flixcart.com/image/832/832/ktn9pjk0/shoe/l/v/2/12-cosco-blue-12-clymb-blue-original-imag6y2kuuch3wbx.jpeg?q=70&crop=false",
  //     "https://rukminim2.flixcart.com/image/832/832/kubk70w0/shoe/j/t/y/8-new-cosco-n-blue-8-jabra-navy-blue-original-imag7hfpvezqdjam.jpeg?q=70&crop=false",
  //     "https://rukminim2.flixcart.com/image/832/832/kubk70w0/shoe/e/j/j/6-new-cosco-n-blue-6-jabra-navy-blue-original-imag7hfhmenvqeq3.jpeg?q=70&crop=false",
  //   ],
  // };

  return (
    
    <div className={styles.main}>
      <Flex className={styles.productContainer}>
        <div className={styles.productImageContainer}>
          <Carousel
          rootClassName={styles.carousel}
            style={{
              // border: "1px dotted yellow",
              backgroundColor: "aqua",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            autoplay={true}
            dotPosition="bottom"
            autoplaySpeed={3000}
          >
            {sampleProduct.images.map((image, index) => (
              <Image src={image} alt="product image" key={index} />
            ))}
          </Carousel>
          {/* <Image src={sampleProduct.images[0]} width={'500px'} alt="product image" />
          <img src={sampleProduct.images[0]} width={'300px'} alt="product image" /> */}
        </div>
        <Flex vertical gap={"middle"} className={styles.productInfoContainer}>
          <h2>{sampleProduct.name}.</h2>
          {/* <h3>Ratings</h3> */}
          <div className={styles.priceDetails}>
            <div className={styles.price}>₹{sampleProduct.price}</div>
            <Text delete className={styles.maxPrice}>
              {sampleProduct.maxPrice}
            </Text>
            <Text className={styles.offer}>
              {(
                (sampleProduct.maxPrice - sampleProduct.price) /
                sampleProduct.maxPrice *100
              ).toFixed(2)}
              {'% off'}
            </Text>
          </div>

          <div>Sizes</div>
          <div className={styles.sizesContainer}>
            {sampleProduct.sizes.map((el, index) => (
              // <Button className={selectedSize === el && 'active'} onClick={handleSelectSize} key={index}>{el.toUpperCase()}</Button>
              <button
                style={selectedSize === el ? { border: "2px solid black" } : {}}
                onClick={handleSelectSize}
                key={index}
              >
                {el.toUpperCase()}
              </button>
            ))}
            {sampleProduct.sizes.map((el, index) => {
              console.log(selectedSize, el, selectedSize === el);
              // return <button style={{  color: selectedSize === 'medium' && 'black'}} >aoishdf</button>
              //<Button className={selectedSize === el && 'active'} onClick={handleSelectSize} key={index}>{el.toUpperCase()}</Button>
            })}
          </div>
          <div>Quantity</div>
          <InputNumber value={selectedQuantity} onChange={(value) => setSelectedQuantity(console.log(value))} min={1} disabled={false} defaultValue={3} />


          <Flex gap={5} className={styles.callToActionContainer}>
            <button className={styles.Add}>Add to cart</button>
            <button className={styles.Buy}>Buy Now</button>
          </Flex>
          <strong>Product Details</strong>
          <p>{sampleProduct.desscription}</p>
          <p>{sampleProduct.details}</p>
        </Flex>
      </Flex>
    </div>
  );
};

export default ClientProductPage;
