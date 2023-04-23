import Logo from "./Logo";
import UserInfo from "./UserInfo";
import ProfileOptions from "./ProfileOptions";
import HamburgerIcon from "components/Icons/HamburgerIcon";

const Header = ({
  logo,
  businessName,
  userInfo,
  logoutAction,
  setOpenMenu,
}) => {
  return (
    <header
      className="bg-white d-flex align-items-center position-fixed w-100 shadow"
      style={{ height: "64px", zIndex: 2 }}
    >
      <div className="container container-lg w-100 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <div
            className="me-4"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenMenu(true)}
          >
            <HamburgerIcon />
          </div>
          <Logo name={businessName} logo={logo} />
        </div>

        <nav className="d-flex align-items-center">
          <UserInfo name={userInfo?.name} />
          <ProfileOptions logoutAction={logoutAction} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
