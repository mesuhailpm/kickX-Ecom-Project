import PopularCollection from "../../../public/shoetrans.png";

const TrendingNow = () => {
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
        <h2 className="popular">Trending Now</h2>
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
        {Array.from({ length: 2 + 1 }, (_, idx) => {
          return (
            <div key={idx} className="collection-item">
              <img
                className="collection-item-image"
                src={PopularCollection}
                alt=""
              />
              <div className="popular-collection-item-name">
                <h5>Nike Air Max 270 React</h5>
                <h4>$280.00</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default TrendingNow;
