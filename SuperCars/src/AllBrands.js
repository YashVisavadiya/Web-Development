import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBrands = () => {
  const [obj, setobj] = useState([]);
  useEffect(() => {
    fetch("https://62da0a665d893b27b2f01b9d.mockapi.io/SuperCars/")
      .then((res) => res.json())
      .then((res) => {
        setobj(res);
        console.log(obj);
      });
  }, []);

  const formatedobj = obj.map((obj) => {
    return (
      <>
        <td className="col my-2">
          <Link
            to={"../allBrands/" + obj.id}
            style={{ color: "black", textDecoration: "none" }}
          >
            <div class="card">
              <div id="zoomBOut" style={{width:"100%",height:"325px"}}>
                <div
                  id="zoomBIn"
                  className="card-img-top "
                  style={{
                    backgroundImage: `url(${obj.SuperCarImage})`,width:"100%"
                  }}
                ></div>
              </div>

              {/* <img
                src={obj.SuperCarImage}
                class="card-img-top img-responsive"
                alt="#a"
              /> */}
              <div className="card-body text-center">
                <span
                  className="card-title text-center"
                  style={{ fontSize: "20px", fontWeight: "800" }}
                >
                  {obj.SuperCarName}
                </span>
              </div>
            </div>
          </Link>
        </td>
      </>
    );
  });

  return (
    <>
      <img
        className="img-fluid"
        src="https://i.pinimg.com/originals/c4/ab/04/c4ab047d7e7e5279b29c83980a590b9f.jpg"
        alt="..."
        width="100%"
      />
      <table className="table">
        <tr className="row mx-5">{formatedobj}</tr>
      </table>
    </>
  );
};

export default AllBrands;
