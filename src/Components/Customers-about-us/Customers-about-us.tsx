import customer1 from "../../assets/customers-about-us/customer1.png";
import customer2 from "../../assets/customers-about-us/customer2.png";
import customer3 from "../../assets/customers-about-us/customer3.png";
export const CustomersAboutUs = () => {
  return (
    <div className="customers-about-us-container">
      <div className="customers-about-us-title-container">
        <h2>Customers about us</h2>
        <div className="slider-button-container hide">
          <button className="slider-button-left"></button>
          <button className="slider-button-right"></button>
        </div>
      </div>
      <div className="customers-about-us-cards-container">
        <div className="customers-about-us-card">
          <div className="customers-about-us-card-info-container">
            <img src={customer1} alt="avatar image" />

            <div className="customers-about-us-card-info">
              <h4>Sarah Connor</h4>
              <p>Bought the Tranquil Haven project</p>
            </div>
          </div>
          <p className="customers-about-us-card-text">
            We are thrilled with our new home! The Tranquil Haven project
            exceeded all our expectations. The spacious rooms, cozy atmosphere,
            and high-quality materials have made our country house the perfect
            retreat. Thank you for your professionalism and attention to detail!
          </p>
        </div>
        <div className="customers-about-us-card">
          <div className="customers-about-us-card-info-container">
            <img src={customer2} alt="avatar image" />

            <div className="customers-about-us-card-info">
              <h4>Oleg Tinkoff</h4>
              <p>Bought the Lakeside Serenity project</p>
            </div>
          </div>
          <p>
            Lakeside Serenity is a magnificent project! The house is situated by
            the lake, and the views are simply stunning. The spacious rooms and
            modern amenities make living in this house comfortable and
            enjoyable. A huge thank you for such a wonderful project and
            impeccable work!
          </p>
        </div>
        <div className="customers-about-us-card">
          <div className="customers-about-us-card-info-container">
            <img src={customer3} alt="avatar image" />

            <div className="customers-about-us-card-info">
              <h4>Barbara Streisand</h4>
              <p>Bought the Sunny Retreat project</p>
            </div>
          </div>
          <p>
            The Sunny Retreat project is our dream home! Bright and spacious
            rooms, a smart layout, and top-notch construction quality. The team
            worked at the highest level, adhering to all deadlines and
            considering our wishes. We are very satisfied with the result!
          </p>
        </div>
      </div>
    </div>
  );
};
