// import logo from "../../assets/Icons/Logo.svg";
import Menu from "../../assets/Icons/Menu.svg";
export const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <ul className="header-list-container">
          <li className="header-list-item">Gallery</li>
          <li className="header-list-item">About Us</li>
          <li className="header-list-item">Blog</li>
        </ul>
        {/* <div className="header-logo-container">
          <img src={logo} alt="Logo" loading="lazy" />
        </div> */}
        <div className="header-menu-container">
          <img src={Menu} alt="Logo" loading="lazy" />
        </div>
      </div>
    </header>
  );
};
