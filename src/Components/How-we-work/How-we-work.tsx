import videoPreview from "../../assets/how-we-work/Video-with-button.png";
import BottomHouse from "../../assets/how-we-work/Bottom-house.png";
import buttonGrey from "../../assets/Icons/Button-grey.svg";
export const HowWeWork = () => {
  return (
    <div className="how-we-work-container">
      <div className="how-we-work-content-container">
        <div className="how-we-work-title-container">
          <h2>How We Work</h2>
          <div className="how-we-work-video-container">
            <img
              src={videoPreview}
              alt="video preview"
              loading="lazy"
              width={490}
            />
          </div>
        </div>
        {/* <div> */}
        <ol className="how-we-work-list-container">
          <li>
            <div className="how-we-work-list-item-counter">
              <span>
                <h4>01</h4>
              </span>{" "}
              <h4>Consultation</h4>
            </div>
            <p>
              We begin by discussing your needs, preferences, and budget,
              forming the concept of your future home.
            </p>
          </li>
          <li>
            <div className="how-we-work-list-item-counter">
              <span>
                <h4>02</h4>
              </span>
              <h4>Design</h4>
            </div>
            <p>
              Our architects create a custom project with drawings and
              3D visualizations. After approval, we prepare the necessary
              documents and estimates.
            </p>
          </li>
          <li>
            <div className="how-we-work-list-item-counter">
              <span>
                <h4>03</h4>
              </span>
              <h4>Construction</h4>
            </div>
            <p>
              We start construction, ensuring quality and adherence to timelines
              at every stage. We keep you regularly informed about progress.
            </p>
          </li>
          <li>
            <div className="how-we-work-list-item-counter">
              <span>
                <h4>01</h4>
              </span>
              <h4>Project Handover</h4>
            </div>
            <p>
              We conduct a final quality check, address any issues, and hand
              over the keys to your new home along with all documents and
              warranties.
            </p>
          </li>
        </ol>
        {/* </div> */}
      </div>
      <div className="how-we-work-bottom">
        <img className="how-we-work-bottom-house-img" src={BottomHouse} alt=" button" loading="lazy" />
        <div className="how-we-work-img-container"></div>
        <div className="how-we-work-info-container">
          <div className="how-we-work-text-container">


          <h3>
            Start fulfilling your <br></br> dreams with us
          </h3>
          <p>Flexible approach to each client</p>
          </div>
        <button>
          <img className="how-we-work-button" src={buttonGrey} alt=" button" />
        </button>
        </div>
      </div>
    </div>
  );
};
