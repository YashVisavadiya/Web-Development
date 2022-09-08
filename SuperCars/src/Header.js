import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark dark-font" style={{marginBottom:"15px"}}>
        <img
          src="https://i.pinimg.com/originals/9d/41/3b/9d413b1ac096378bd802658af567e558.png"
          alt="abc"
          style={{ width: "100px" }}
          onClick={() => {
            navigate("/");
          }}
        />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="./allBrands">
                All Brands
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="./allBrands/add">
                Add Car
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="...">
                List
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="...">
                Pics
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
