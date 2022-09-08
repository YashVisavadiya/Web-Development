const ContactUs = () => {
  return (
    <>
      <div className="container-fluid" style={{ position: "relative" }}>
        <img
          className="img-responsive"
          src="https://www.supercars.net/blog/wp-content/uploads/2020/10/2005-Pagani-Zonda-F-011-2000-scaled.jpg"
          width="100%"
          height="auto"
        />
        <div>
          <span
            className="image-text"
            style={{ left: "44%", top: "40%", fontSize: "50px" }}
          >
            Contact Us
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
            Let's Talk
          </h1>
          <br></br>

          <p>
            The team at Supercars.net would love to hear from you, so please
            fill out this form and we will get in touch with you shortly.
          </p>

          <br></br>
          <h1
            className="text-left"
            style={{ fontSize: "35px", fontWeight: "800" }}
          >
            Common Reason People Reach Out
          </h1>
          <br></br>

          <p>
            <span style={{ fontWeight: "600" }}>Press Releases: </span>Press
            releases can be send to our editorial team by filling out the form
            below. Simply include the URL where the press release can be found
            or upload the press release directly.
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Advertising Enquiries: </span>If
            you are looking to reach our readers, we recommend that you check
            out our advertising page to find all the relevant information.
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Partnership Enquiries: </span>{" "}
            If you want to go a little deeper than an advertising campaign,
            we’re open to partnering in other ways. Let us know what you’re
            thinking via the form below.
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Join The Team: </span> If you
            want to write or contribute to Supercars.net, fill out the form
            below and tell us a little about yourself. We’re always looking for
            writers, photographers, event managers and anybody who just loves
            cars.
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Submit A Car: </span> We know it
            is impossible to stay up to date on every car, event, sighting,
            concept and awesome youtube video. If you want to submit any of the
            above, check out our Submit Cars page.
          </p>
          <p>
            <span style={{ fontWeight: "600" }}>Something Else? </span> No
            worries. Fill out the form below and we’ll get back to you soon.
          </p>

          <br></br>
          <h1
            className="text-left"
            style={{ fontSize: "25px", fontWeight: "800" }}
          >
            Contact Us
          </h1>
          <br></br>
          <div
            className="container-fluid"
            style={{
              fontSize: "16px",
              fontFamily: "Loto",
              fontWeight: "500",
            }}
          >
            <div class="form-group">
              <label
                for="name"
                style={{
                  fontSize: "16px",
                  fontFamily: "Loto",
                  fontWeight: "550",
                }}
              >
                Name{" "}
              </label>
              <input type="name" class="form-control" id="name" />
            </div>
            <br></br>

            <div class="form-group">
              <label
                for="email"
                style={{
                  fontSize: "16px",
                  fontFamily: "Loto",
                  fontWeight: "550",
                }}
              >
                Email address
              </label>
              <input type="email" class="form-control" id="email" />
            </div>
            <br></br>

            <div class="form-group">
              <label
                for="reason"
                style={{
                  fontSize: "16px",
                  fontFamily: "Loto",
                  fontWeight: "550",
                }}
              >
                Reason For Contacting
              </label>
            </div>
            <div class="form-check my-2">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />
              <label class="form-check-label" for="exampleRadios1">
                Advertising Enquiry
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label class="form-check-label" for="exampleRadios2">
                Become A Contributor
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
              />
              <label class="form-check-label" for="exampleRadios3">
                Partnership Enquiry
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios4"
                value="option4"
              />
              <label class="form-check-label" for="exampleRadios4">
                Submit A Press Release
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios5"
                value="option5"
              />
              <label class="form-check-label" for="exampleRadios5">
                Other
              </label>
            </div>
            <br></br>

            <div class="form-group">
              <label
                for="email"
                style={{
                  fontSize: "16px",
                  fontFamily: "Loto",
                  fontWeight: "550",
                }}
              >
                Message
              </label>
              <textarea
                class="form-control my-2"
                placeholder="Write your Message Here ..."
                id="floatingTextarea"
              ></textarea>
            </div>
            <br></br>

            <div class="form-group">
              <label
                for="file-upload"
                style={{
                  fontSize: "16px",
                  fontFamily: "Loto",
                  fontWeight: "550",
                }}
              >
                File Upload
              </label>
              <br></br>
              <input
                type="file"
                class="form-control-file"
                id="file-upload"
              />
            </div>
            <br></br>

            <button type="submit " class="btn btn-success text-center" >
              Submit
            </button>
          </div>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default ContactUs;
