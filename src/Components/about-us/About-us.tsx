import target from "../../assets/about-us/target.svg";
import star from "../../assets/about-us/star.svg";
import paper from "../../assets/about-us/paper.svg";
import users from "../../assets/about-us/users.svg";
export const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-title-container">
        <h2 className="about-us-title">About us</h2>
        <p className="about-us-description">
          We are a team of professionals with many years of experience in the
          design and construction of country houses.
        </p>
      </div>

      <div className="about-us-advantages-container">
        <div className="about-us-advantages-items">
          <div className="about-us-advantages-item">
            <div className="about-us-advantages-item-icon-container">
              <img src={target} alt="target" />
            </div>
            <h4>
              Personalized <br></br> Approach
            </h4>
          </div>
          <p>
            We carefully consider all your preferences and needs, creating
            unique projects that perfectly match your lifestyle.
          </p>
        </div>
        <div className="about-us-advantages-items">
          <div className="about-us-advantages-item">
            <div className="about-us-advantages-item-icon-container">
              <img src={star} alt="star" />
            </div>
            <h4>
              Personalized <br></br> Approach
            </h4>
          </div>
          <p>
            We carefully consider all your preferences and needs, creating
            unique projects that perfectly match your lifestyle.
          </p>
        </div>
        <div className="about-us-advantages-items">
          <div className="about-us-advantages-item">
            <div className="about-us-advantages-item-icon-container">
              <img src={paper} alt="paper" />
            </div>
            <h4>
              Personalized <br></br> Approach
            </h4>
          </div>
          <p>
            We carefully consider all your preferences and needs, creating
            unique projects that perfectly match your lifestyle.
          </p>
        </div>
        <div className="about-us-advantages-items">
          <div className="about-us-advantages-item">
            <div className="about-us-advantages-item-icon-container">
              <img src={users} alt="users" />
            </div>
            <h4>
              Personalized <br></br> Approach
            </h4>
          </div>
          <p>
            We carefully consider all your preferences and needs, creating
            unique projects that perfectly match your lifestyle.
          </p>
        </div>
      </div>

      <div className="about-us-experience-container">
        <div className="about-us-experience-item">
          <h2 className="about-us-experience-item-title">30+</h2>
          <p>Models of<br></br>houses</p>
        </div>
        <div className="about-us-experience-item">
          <h2 className="about-us-experience-item-title">10+</h2>
          <p>Years of<br></br>experience</p>
        </div>
        <div className="about-us-experience-item">
          <h2 className="about-us-experience-item-title">100+</h2>
          <p>Satisfied <br></br> customers</p>
        </div>
        <div className="about-us-experience-item">
          <h2 className="about-us-experience-item-title">7</h2>
          <p>Stages of quality <br></br> control</p>
        </div>
        

      </div>
    </div>
  );
};
