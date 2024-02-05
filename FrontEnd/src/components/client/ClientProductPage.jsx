import { Carousel } from "antd";

const ClientProductPage = () => {
    const sampleProduct = {
      name: 'Sample Product',
      desscription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia blanditiis eaque neque molestiae illo.',
      sizes: ['small', 'medium', 'large', 'large'],
      images: ['https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/h/x/-original-imagg6r6ythrf3qz.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/ktn9pjk0/shoe/6/u/5/12-cosco-blue-12-clymb-blue-original-imag6y2kyxbtgzyf.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/ktn9pjk0/shoe/w/8/d/12-cosco-blue-12-clymb-blue-original-imag6y2kxxcettvh.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/ktn9pjk0/shoe/l/v/2/12-cosco-blue-12-clymb-blue-original-imag6y2kuuch3wbx.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/kubk70w0/shoe/j/t/y/8-new-cosco-n-blue-8-jabra-navy-blue-original-imag7hfpvezqdjam.jpeg?q=70&crop=false','https://rukminim2.flixcart.com/image/832/832/kubk70w0/shoe/e/j/j/6-new-cosco-n-blue-6-jabra-navy-blue-original-imag7hfhmenvqeq3.jpeg?q=70&crop=false' ]
        }

  return <div className="client-product-page" style={{maxWidth:'1000px', border: "5px solid green"}}>
  <h1> product page</h1> 
  <Carousel style={{border: '1px solid black', display:''}}  autoplay={true} dotPosition="bottom" autoplaySpeed={1000} >
      {sampleProduct.images.map((image, index)=>(
    <div key={index}>
        <img src={image} alt={`product image ${index}`} />
    </div>
      ))}


  </Carousel>
  </div>;
};

export default ClientProductPage;
