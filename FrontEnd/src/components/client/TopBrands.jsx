import PumaLogo from "../../../public/pumalogo.png";
import AdidasLogo from "../../../public/adidaslogo.png";
import NikeLogo from "../../../public/nikelogo.png";

const TopBrands = () => {
  return (
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
        <span style={{ fontSize: ".65em", fontWeight: "bold" }}>Top rated</span>
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
  );
};

export default TopBrands;
