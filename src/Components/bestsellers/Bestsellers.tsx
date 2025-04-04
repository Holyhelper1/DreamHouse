import sliderHouse1 from "../../assets/bestsellers/slider-house1.jpg";
import sliderHouse2 from "../../assets/bestsellers/slider-house2.jpg";
import sliderHouse3 from "../../assets/bestsellers/slider-house3.jpg";
import sliderHouse4 from "../../assets/bestsellers/slider-house4.jpg";
import square from "../../assets/bestsellers/icon/square.svg";
import bed from "../../assets/bestsellers/icon/bed.svg";
import bathtub from "../../assets/bestsellers/icon/bathtub.svg";
import buttonGrey from "../../assets/Icons/Button-grey.svg";

// добавить слайдер
export const Bestsellers = () => {
  return (
    <div className="bestsellers-container">
      <div className="bestsellers-title-container">
        <h2 className="bestsellers-title">Bestsellers</h2>
        <div className="slider-button-container hide">
          <button className="slider-button-left"></button>
          <button className="slider-button-right"></button>
        </div>
      </div>

      <div className="bestsellers-cards-container">
        <div className="bestsellers-card">
          <img
            className="bestsellers-card-background"
            src={sliderHouse1}
            alt="House"
            loading="lazy"
          />
          <h2 className="bestsellers-card-title">Tranquil Haven</h2>
          <div className="bestsellers-card-price-container">
            <div className="bestsellers-card-price">
              <h3>$119 900</h3>
              <ul className="bestsellers-card-list">
                <li className="bestsellers-card-list-item">
                  <img
                    src={square}
                    alt="square meters icon"
                    width={24}
                    height={24}
                  />
                  134m2
                </li>
                <li>
                  <img src={bed} alt="bed icon" width={24} height={24} />3
                </li>
                <li>
                  <img
                    src={bathtub}
                    alt="bathtub icon"
                    width={24}
                    height={24}
                  />
                  2
                </li>
              </ul>
            </div>
            <button className="bestsellers-card-button">
              <img  src={buttonGrey} alt="button" width={100} height={100} />
            </button>
          </div>
        </div>
        <div className="bestsellers-card">
          <img
            className="bestsellers-card-background"
            src={sliderHouse2}
            alt="House"
            loading="lazy"
          />
          <h2 className="bestsellers-card-title">Sunny Retreat</h2>
          <div className="bestsellers-card-price-container">
            <div className="bestsellers-card-price">
              <h3>$99 900</h3>
              <ul className="bestsellers-card-list">
                <li className="bestsellers-card-list-item">
                  <img
                    src={square}
                    alt="square meters icon"
                    width={24}
                    height={24}
                  />
                  192m2
                </li>
                <li>
                  <img src={bed} alt="bed icon" width={24} height={24} />4
                </li>
                <li>
                  <img
                    src={bathtub}
                    alt="bathtub icon"
                    width={24}
                    height={24}
                  />
                  2
                </li>
              </ul>
            </div>
            <button className="bestsellers-card-button">
              <img src={buttonGrey} alt="button" width={100} height={100} />
            </button>
          </div>
        </div>
        <div className="bestsellers-card">
          <img
            className="bestsellers-card-background"
            src={sliderHouse3}
            alt="House"
            loading="lazy"
          />
          <h2 className="bestsellers-card-title">Forest Oasis</h2>
          <div className="bestsellers-card-price-container">
            <div className="bestsellers-card-price">
              <h3>$94 500</h3>
              <ul className="bestsellers-card-list">
                <li className="bestsellers-card-list-item">
                  <img
                    src={square}
                    alt="square meters icon"
                    width={24}
                    height={24}
                  />
                  98m2
                </li>
                <li>
                  <img src={bed} alt="bed icon" width={24} height={24} />1
                </li>
                <li>
                  <img
                    src={bathtub}
                    alt="bathtub icon"
                    width={24}
                    height={24}
                  />
                  1
                </li>
              </ul>
            </div>
            <button className="bestsellers-card-button">
              <img src={buttonGrey} alt="button" width={100} height={100} />
            </button>
          </div>
        </div>
        <div className="bestsellers-card">
          <img
            className="bestsellers-card-background"
            src={sliderHouse4}
            alt="House"
            loading="lazy"
          />
          <h2 className="bestsellers-card-title">Lakeside Serenity</h2>
          <div className="bestsellers-card-price-container">
            <div className="bestsellers-card-price">
              <h3>$88 000</h3>
              <ul className="bestsellers-card-list">
                <li className="bestsellers-card-list-item">
                  <img
                    src={square}
                    alt="square meters icon"
                    width={24}
                    height={24}
                  />
                  128m2
                </li>
                <li>
                  <img src={bed} alt="bed icon" width={24} height={24} />3
                </li>
                <li>
                  <img
                    src={bathtub}
                    alt="bathtub icon"
                    width={24}
                    height={24}
                  />
                  2
                </li>
              </ul>
            </div>
            <button className="bestsellers-card-button">
              <img src={buttonGrey} alt="button" width={100} height={100} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
