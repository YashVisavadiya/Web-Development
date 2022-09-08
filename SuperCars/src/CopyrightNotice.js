const CopyrightNotice = () => {
  return (
    <>
      <div className="container-fluid" style={{ position: "relative" }}>
        <img
          className="img-responsive"
          src="https://ag-log.o.auroraobjects.eu/12-2012/vividavent/2.jpg?last_change=1384373645"
          width="100%"
          height="auto"
        />
        <div>
          <span
            className="image-text"
            style={{ left: "38%", top: "40%", fontSize: "50px" }}
          >
            Copyright Notice
          </span>
        </div>
      </div>
      <div className="container">
        <div
          className="container-fluid text-block justify-content-center my-4"
          style={{
            paddingLeft: "200px",
            paddingRight: "200px",
            fontFamily: "Lato",
            fontSize: "18px",
          }}
        >
          <br></br>
          <h1
            className="text-left"
            style={{ fontSize: "50px", fontWeight: "800" }}
          >
            Copyright Notice
          </h1>
          <br></br>
          <p>
            This website and its content is copyright of Supercars.net - © 2019.
            All rights reserved.
          </p>
          <p>
            Any redistribution or reproduction of part or all of the contents in
            any form is prohibited other than the following:
          </p>
          <p>
            <ul>
              <li>
                you may print or download to a local hard disk extracts for your
                personal and non-commercial use only
              </li>
              <li>
                you may copy the content to individual third parties for their
                personal use, but only if you acknowledge the website as the
                source of the material
              </li>
            </ul>
          </p>
          <p>
            You may not, except with our express written permission, distribute
            or commercially exploit the content. Nor may you transmit it or
            store it in any other website or other form of electronic retrieval
            system.
          </p>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default CopyrightNotice;
