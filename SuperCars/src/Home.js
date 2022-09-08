import "./App.css";
const Home = () => {
  return (
    <>
      <div className="container-fluid my-4" style={{ position: "relative" }}>
        <div>
          <img
            className="img"
            src="https://images.hgmsites.net/hug/mclaren_100656165_h.jpg"
            alt="abc"
            width="100%"
            height="auto"
          />
        </div>
        

        <div id="imageDivider1">
          <span className="image-text">
            The Bently Flying Spur Speed ... the last of the W12?
          </span>
        </div>
        <div id="imageDivider2">
          <span className="image-text">
            The Outrageous Devel Sixteen: A Dream That Refused To Die
          </span>
        </div>
        <div id="imageDivider3">
          <span className="image-text">
            Millions worth of hypercars on a Drag strip?
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
