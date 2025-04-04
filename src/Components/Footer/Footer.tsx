import facebook from "../../assets/house-dream/icon/facebook.svg";
import instagram from "../../assets/house-dream/icon/instagram.svg";
import xCom from "../../assets/house-dream/icon/x-com.svg";
import pinterest from "../../assets/house-dream/icon/pinterest.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">© 2024 DreamHouse</p>

      <ul className="footer-list">
        <li>Terms of use</li>
        <li>Privacy policy</li>
      </ul>

      <div className="footer-dream-socials">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={xCom} alt="x-com" />
        <img src={pinterest} alt="pinterest" />
      </div>
    </footer>
  );
};
