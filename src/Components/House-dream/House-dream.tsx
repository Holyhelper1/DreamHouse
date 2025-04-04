import house1 from "../../assets/house-dream/house1.png";
import facebook from "../../assets/house-dream/icon/facebook.svg";
import instagram from "../../assets/house-dream/icon/instagram.svg";
import xCom from "../../assets/house-dream/icon/x-com.svg";
import pinterest from "../../assets/house-dream/icon/pinterest.svg";
import buttonLarge from "../../assets/Icons/Button Large.svg";
export const HouseDream = () => {
  return (
    <div className="house-dream-container">
      <div className="house-dream-title">
        <h1 className="house-dream-title-text">
          The house <br></br> of your <br></br>
          <span className="house-dream-title-span">dreams</span>
        </h1>
        <p className="house-dream-title-description">
          Discover the beauty and functionality houses designed with minimalism
          in mind
        </p>
        <div className="house-dream-socials">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={xCom} alt="x-com" />
          <img src={pinterest} alt="pinterest" />
        </div>
      </div>
      <div className="house-dream-image-container">
        <img src={house1} alt="House" loading="lazy" />
      </div>
      <div className="house-dream-info-container">
        <div className="slider-button-container">
          <button className="slider-button-left"></button>
          <button className="slider-button-right"></button>
        </div>
        <div className="house-dream-info-block">
          <div>
            <h4>Dream House</h4>
            <p>Model house with large panoramic window and fireplace</p>
          </div>

          <table className="house-dream-info-table">
            <tbody>
              <tr className="house-dream-info-table-row">
                <td>Materials:</td>
                <td>Aerated concrete</td>
              </tr>
              <tr className="house-dream-info-table-row">
                <td>Square:</td>
                <td>134m2</td>
              </tr>
              <tr className="house-dream-info-table-row">
                <td>Price:</td>
                <td>$120 000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="house-dream-view-more">
          <a href="#">View More</a>
          <button>
            <img src={buttonLarge} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
