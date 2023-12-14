const Showrooms = () => {
  return (
    <div style={{ margin: "2em 3em" }} className="showrooms">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "4em",
        }}
      >
        <h2 className="popular">Our Showrooms</h2>
        <h4
          style={{
            textDecoration: "underline",
            textUnderlineOffset: "5px",
            cursor: "pointer",
          }}
          className="discover"
        >
          Find Showroom
        </h4>
      </div>
      <div className="showrooms-grid">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Showrooms;
