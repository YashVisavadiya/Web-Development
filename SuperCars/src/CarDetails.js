import { React, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./App.css";

const CarDetails = () => {
  let [data, setData] = useState({});
  let param = useParams();
  const navigate = useNavigate();
  console.log(param.id);
  useEffect(() => {
    fetch("https://62da0a665d893b27b2f01b9d.mockapi.io/SuperCars/" + param.id)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <>
      {/* <div className="container"> */}
      <img
        className="img-fluid"
        src={data.SuperCarImage}
        alt="..."
        width="100%"
      />
      {/* </div> */}
      <div className="container my-4">
        <div className="container-fluid ">
          <table className="table ">
            {/* This table is used for two partition where in first one there will be all content and in 2nd there will be an ad.  */}
            <tr className="row">
              <td className="col-8">
                {/* Car Name */}
                <h1 style={{ textAlign: "center" }}>{data.SuperCarName}</h1>
                <div className="para my-4">{data.SuperCarDescription}</div>
                <h1 style={{ textAlign: "center" }}>Pictures</h1>
                <div className="extra-images my-4">
                  <table className="table">
                    <tr className="row">
                      <td className="col">
                        <div id="zoomBOut">
                          <div
                            id="zoomBIn"
                            style={{
                              backgroundImage: `url(${data.SuperCarExtraImage1})`
                            }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col">
                        <div id="zoomBOut">
                          <div
                            id="zoomBIn"
                            style={{
                              backgroundImage: `url(${data.SuperCarExtraImage2})`,
                            }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col">
                        <div id="zoomBOut">
                          <div
                            id="zoomBIn"
                            style={{
                              backgroundImage: `url(${data.SuperCarExtraImage3})`,
                            }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <h1 style={{ textAlign: "center" }}>Specs & Performance</h1>
                <table className="table">
                  <tbody>
                    <tr className="row">
                      <td className="col">&nbsp;</td>
                      <td className="col">&nbsp;</td>
                    </tr>
                    <th className="row">
                      <td className="col">&nbsp;Attributes</td>
                      <td className="col" style={{ textAlign: "right" }}>
                        &nbsp;Description
                      </td>
                    </th>
                    <tr className="row">
                      <td className="col">
                        <span>type</span>
                      </td>
                      <td className="col" style={{ textAlign: "right" }}>
                        <span>Concept / Prototype Car</span>
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col">
                        <span>engine</span>
                      </td>
                      <td className="col" style={{ textAlign: "right" }}>
                        <span>W16</span>
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col">
                        <span>position</span>
                      </td>
                      <td className="col" style={{ textAlign: "right" }}>
                        <span>Front Longitudinal</span>
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col">
                        <span>aspiration</span>
                      </td>
                      <td className="col" style={{ textAlign: "right" }}>
                        <span>Quad-Turbochargers</span>
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col">
                        <span>body / frame</span>
                      </td>
                      <td className="col" style={{ textAlign: "right" }}>
                        <span>Aluminum & Carbon Fiber</span>
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col">
                        <span>driven wheels</span>
                      </td>
                      <td className="col" style={{ textAlign: "right" }}>
                        <span>RWD</span>
                      </td>
                    </tr>
                    <tr className="row">
                      <td className="col">
                        <span>top speed</span>
                      </td>
                      <td className="col" style={{ textAlign: "right" }}>
                        <span>~349.14999 kph / 217 mph</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="container">
                  <table className="table">
                    <tr className="row">
                      <td className="col" style={{ textAlign: "left" }}>
                        <button id='btn-back'
                          onClick={() => {
                            navigate("/allBrands");
                          }}
                          className="btn btn-outline-primary"
                        >
                          Back
                        </button>
                      </td>
                      <td className="col" style={{ textAlign: "center" }}>
                        <button id="btn-edit"
                          onClick={() => {
                            navigate("/allBrands/edit/" + param.id);
                          }}
                          className="btn btn-outline-success"
                        >
                          Edit
                        </button>
                      </td>
                      <td className="col" style={{ textAlign: "right" }}>
                        <button id="btn-delete"
                          onClick={() => {
                            fetch(
                              "https://62da0a665d893b27b2f01b9d.mockapi.io/SuperCars/" +
                                param.id,
                              {
                                method: "DELETE",
                              }
                            ).then((res) => navigate("/allBrands"));
                          }}
                          className="btn btn-outline-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </table>
                </div>
              </td>
              <td className="col">
                <form class="form-inline my-lg-0 d-flex" style={{position:"sticky",top:"100px",right:"10px"}}>
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0 mx-1"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
