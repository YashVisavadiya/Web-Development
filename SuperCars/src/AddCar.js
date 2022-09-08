import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddCar = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    if (param.id > 0) {
      fetch(
        "https://62da0a665d893b27b2f01b9d.mockapi.io/SuperCars/" + param.id,
        {
          method: "GET"
        }
      )
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, []);

  return (
    <>
      <div className="container text-center">
        <form>
          <div class="mb-3 formlabel formlabel">
            <label class="form-label">Super Car Name</label>
            {param.id > 0 && (
              <input
                value={data.SuperCarName}
                onChange={(e) => {
                  setData({ ...data, SuperCarName: e.target.value });
                }}
                type="text"
                class="form-control text-center"
              />
            )}
            {!(param.id > 0) && (
              <input
                onChange={(e) => {
                  setData({ ...data, SuperCarName: e.target.value });
                }}
                type="text"
                class="form-control text-center"
              />
            )}
          </div>

          <div class="mb-3 formlabel">
            <label class="form-label">Super Car Image Link</label>
            {param.id > 0 && (
              <input
                value={data.SuperCarImage}
                onChange={(e) => {
                  setData({ ...data, SuperCarImage: e.target.value });
                }}
                type="text"
                class="form-control text-center"
              />
            )}
            {!(param.id > 0) && (
              <input
                onChange={(e) => {
                  setData({ ...data, SuperCarImage: e.target.value });
                }}
                type="text"
                class="form-control text-center"
              />
            )}
          </div>

          <div class="mb-3 formlabel">
            <label class="form-label">Super Car Price</label>
            {param.id > 0 && (
              <input
                value={data.SuperCarPrice}
                onChange={(e) => {
                  setData({ ...data, SuperCarPrice: e.target.value });
                }}
                type="text"
                class="form-control text-center"
              />
            )}
            {!(param.id > 0) && (
              <input
                onChange={(e) => {
                  setData({ ...data, SuperCarPrice: e.target.value });
                }}
                type="text"
                class="form-control text-center"
              />
            )}
          </div>

          <div class="mb-3 formlabel">
            <label class="form-label">Super Car Extra Image 1</label>
            {param.id > 0 && (
              <input
                value={data.SuperCarExtraImage1}
                onChange={(e) => {
                  setData({
                    ...data,
                    SuperCarExtraImage1: e.target.value
                  });
                }}
                type="text"
                class="form-control text-center"
              />
            )}
            {!(param.id > 0) && (
              <input
                onChange={(e) => {
                  setData({
                    ...data,
                    SuperCarExtraImage1: e.target.value
                  });
                }}
                type="text"
                class="form-control text-center"
              />
            )}
          </div>

          <div class="mb-3 formlabel">
            <label class="form-label">Super Car Extra Image 2</label>
            {param.id > 0 && (
              <input
                value={data.SuperCarExtraImage2}
                onChange={(e) => {
                  setData({ ...data, SuperCarExtraImage2: e.target.value });
                }}
                type="text"
                class="form-control text-center"
              />
            )}
            {!(param.id > 0) && (
              <input
                onChange={(e) => {
                  setData({ ...data, SuperCarExtraImage2: e.target.value });
                }}
                type="text"
                class="form-control text-center"
              />
            )}
          </div>

          <div class="mb-3 formlabel">
            <label class="form-label">Super Car Extra Image 3</label>
            {param.id > 0 && (
              <input
                value={data.SuperCarExtraImage3}
                onChange={(e) => {
                  setData({ ...data, SuperCarExtraImage3: e.target.value });
                }}
                type="text"
                class="form-control text-center"
              />
            )}
            {!(param.id > 0) && (
              <input
                onChange={(e) => {
                  setData({ ...data, SuperCarExtraImage3: e.target.value });
                }}
                type="text"
                class="form-control text-center"
              />
            )}
          </div>
          <div class="mb-3 formlabel">
            <label class="form-label">Super Car Description</label>
            {param.id > 0 && (
              <textarea
                value={data.SuperCarDescription}
                onChange={(e) => {
                  setData({
                    ...data,
                    SuperCarDescription: e.target.value
                  });
                }}
                type="text-area"
                class="form-control text-center"
                rows="3"
              />
            )}
            {!(param.id > 0) && (
              <textarea
                onChange={(e) => {
                  setData({
                    ...data,
                    SuperCarDescription: e.target.value
                  });
                }}
                type="text-area"
                class="form-control text-center"
                rows="3"
              />
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (param.id > 0) {
                fetch(
                  "https://62da0a665d893b27b2f01b9d.mockapi.io/SuperCars/" +
                    param.id,
                  {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  }
                ).then(() => navigate("/allBrands"));
              } else {
                fetch(
                  "https://62da0a665d893b27b2f01b9d.mockapi.io/SuperCars/",
                  {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  }
                ).then(() => navigate("/allBrands"));
              }
            }}
            class="btn btn-primary"
          >
            {!(param.id > 0) && "Add Car"}
            {param.id > 0 && "Edit Car"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCar;
