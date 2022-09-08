import React from "react";

const Disclaimer = () => {
  return (
    <>
      <div className="container-fluid" style={{ position: "relative" }}>
        <img
          className="img-responsive"
          src="https://wallpapercave.com/wp/wp5215885.jpg"
          width="100%"
          height="auto"
        />
        <div>
          <span
            className="image-text"
            style={{ left: "44%", top: "40%", fontSize: "50px" }}
          >
            Disclaimer
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
            Disclaimer
          </h1>
          <br></br>
          <p>
            The information contained in this website is for general information
            purposes only. The information is provided by Supercars.net and
            while we endeavor to keep the information up to date and correct, we
            make no representations or warranties of any kind, express or
            implied, about the completeness, accuracy, reliability, suitability
            or availability with respect to the website or the information,
            products, services, or related graphics contained on the website for
            any purpose. Any reliance you place on such information is therefore
            strictly at your own risk.
          </p>
          <p>
            In no event will we be liable for any loss or damage including
            without limitation, indirect or consequential loss or damage, or any
            loss or damage whatsoever arising from loss of data or profits
            arising out of, or in connection with, the use of this website.
          </p>
          <p>
            Through this website you are able to link to other websites which
            are not under the control of Supercars.net. We have no control over
            the nature, content and availability of those sites. The inclusion
            of any links does not necessarily imply a recommendation or endorse
            the views expressed within them.
          </p>
          <p>
            Every effort is made to keep the website up and running smoothly.
            However, Supercars.net takes no responsibility for, and will not be
            liable for, the website being temporarily unavailable due to
            technical issues beyond our control.
          </p>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
