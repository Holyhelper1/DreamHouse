import articles1 from "../../assets/Articles-and-tips/articles1.png";
import articles2 from "../../assets/Articles-and-tips/articles2.png";
import articles3 from "../../assets/Articles-and-tips/articles3.png";
import articles4 from "../../assets/Articles-and-tips/articles4.png";
import filter from "../../assets/Articles-and-tips/icon filter.png";
export const ArticlesAndTips = () => {
  return (
    <div className="articles-and-tips-container">
      <div className="articles-and-tips-title-container">
        <div className="articles-and-tips-filter-icon-wrapper" >

        <h2>Articles and Tips</h2>
        <div><img className="filter-icon" src={filter} alt="filter icon" /></div>
        </div>
        <p>
          Here you will find a wealth of useful articles, tips, and ideas to
          help you create the home of your dreams. Our experts share their
          knowledge and experience in design, construction, decor, and more.
        </p>
        <div className="articles-and-tips-button-container">
          <div className="articles-and-tips-choose-buttons-container">
            <button className="articles-and-tips-choose-button active-button">
              Design and Architecture
            </button>
            <button className="articles-and-tips-choose-button">
              Interior and Decor
            </button>
            <button className="articles-and-tips-choose-button">
              Landscape Design
            </button>
            <button className="articles-and-tips-choose-button">
              Tips and Recommendations
            </button>
          </div>

          <div className="slider-button-container hide">
            <button className="slider-button-left"></button>
            <button className="slider-button-right"></button>
          </div>
        </div>
      </div>
      <div className="articles-and-tips-cards-container">
        <div className="articles-and-tips-card">
          <div className="articles-and-tips-card-wrapper">
            <img
              className="articles-and-tips-card-background"
              src={articles1}
              alt="Building"
              loading="lazy"
            />
            <h3>Modern architectural trends</h3>

            <div className="articles-and-tips-card-info-container">
              <p>Design and Architecture</p>
              <p>
                <time dateTime="2024-06-06">06.06.2024</time>
              </p>
            </div>
          </div>
          <div className="articles-and-tips-card-bottom">
            <p>
              Discover the secrets of successful country home design. Learn
              about modern architectural trends, innovative solutions, and best
              practices in home design.
            </p>

            <a className="link" href="#">
              Read
            </a>
          </div>
        </div>
        <div className="articles-and-tips-card">
          <div className="articles-and-tips-card-wrapper">
            <img
              className="articles-and-tips-card-background"
              src={articles2}
              alt="Building"
              loading="lazy"
            />
            <h3>Eco-Friendly Materials for Home Construction</h3>

            <div className="articles-and-tips-card-info-container">
              <p>Design and Architecture</p>
              <p>
                <time dateTime="2024-06-06">06.06.2024</time>
              </p>
            </div>
          </div>
          <div className="articles-and-tips-card-bottom">
            <p>
              An overview of eco-friendly materials that will help you build a
              home without harming the environment.
            </p>

            <a className="link" href="#">
              Read
            </a>
          </div>
        </div>
        <div className="articles-and-tips-card">
          <div className="articles-and-tips-card-wrapper">
            <img
              className="articles-and-tips-card-background"
              src={articles3}
              alt="Building"
              loading="lazy"
            />
            <h3>Ideas for Setting Up an Outdoor Kitchen</h3>

            <div className="articles-and-tips-card-info-container">
              <p>Design and Architecture</p>
              <p>
                <time dateTime="2024-06-06">06.06.2024</time>
              </p>
            </div>
          </div>
          <div className="articles-and-tips-card-bottom">
            <p>
              Tips and ideas for creating a cozy and functional outdoor kitchen
              where you can enjoy cooking in the fresh air.
            </p>

            <a className="link" href="#">
              Read
            </a>
          </div>
        </div>
        <div className="articles-and-tips-card">
          <div className="articles-and-tips-card-wrapper">
            <img
              className="articles-and-tips-card-background"
              src={articles4}
              alt="Building"
              loading="lazy"
            />
            <h3>Trends in Country Home Design 2024</h3>

            <div className="articles-and-tips-card-info-container">
              <p>Design and Architecture</p>
              <p>
                <time dateTime="2024-06-06">06.06.2024</time>
              </p>
            </div>
          </div>
          <div className="articles-and-tips-card-bottom">
            <p>
              Explore the most current trends in country home design this year.
              Find out which materials, colors, and solutions are in vogue.
            </p>

            <a className="link" href="#">
              Read
            </a>
          </div>
        </div>
      </div>
      <div className="articles-and-tips-adaptive-button-container">
        <button className=" active-button hide">Read more</button>
      </div>
    </div>
  );
};
