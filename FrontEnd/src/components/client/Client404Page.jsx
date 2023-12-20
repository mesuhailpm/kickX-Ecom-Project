import Image from "../../../public/404-error.png";

const Client404Page = () => {
  return (
    <div className="no-page">
      <div>
        <img src={Image} alt="" className="not-available" />
        <h1>404</h1>
        <br />
        <h3>The page that you are looking is not available</h3>
      </div>
    </div>
  );
};

export default Client404Page;
