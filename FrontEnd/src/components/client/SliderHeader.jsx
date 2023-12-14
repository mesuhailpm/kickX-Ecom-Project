import { Carousel } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useRef } from "react";

const SliderHeader = () => {
  const ref = useRef();

  return (
    <>
      <div
        style={{
          display: "block",
          height: "500px",
          background: "gray",
          margin: "1.5em 3em 2em 3em",
        }}
        className="slider-header"
      >
        <Carousel
          autoplay="true"
          ref={ref}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
            color: "white",
          }}
        >
          <div>
            <h3 style={{ textAlign: "center" }}>Slider 1</h3>
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>Slider 2</h3>
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}>Slider 3</h3>
          </div>
          <div>
            <h3 style={{ textAlign: "center" }}> Slider 4</h3>
          </div>
        </Carousel>
        <div
          onClick={() => {
            ref.current.prev();
          }}
          className="left-arrow-parent prev"
        >
          <ArrowLeftOutlined />
        </div>
        <div
          onClick={() => {
            ref.current.next();
          }}
          className="right-arrow-parent next"
        >
          <ArrowRightOutlined />
        </div>
      </div>
    </>
  );
};

export default SliderHeader;
