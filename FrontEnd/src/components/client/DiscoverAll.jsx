import { ArrowRightOutlined } from "@ant-design/icons";

const DiscoverAll = () => {
  return (
    <div className="discover-all-section">
      <h4
        style={{
          textDecoration: "underline",
          textUnderlineOffset: "5px",
          cursor: "pointer",
        }}
      >
        Discover All Products
      </h4>
      <ArrowRightOutlined style={{ cursor: "pointer" }} />
    </div>
  );
};

export default DiscoverAll;
