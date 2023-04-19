import { useState } from "react";
import Logo from "./Logo";
import UserInfo from "./UserInfo";
import ProfileOptions from "./ProfileOptions";
import HamburgerIcon from "components/Icons/HamburgerIcon";
import FloatingSidebar from "components/FloatingSidebar";
import DashboardIcon from "components/Icons/DashboardIcon";
import MasterIcon from "components/Icons/MasterIcon";
import Label from "components/Label";

const MainMenu = ({ onSelect }) => {
  return (
    <div className="d-flex flex-column">
      <div
        className="d-flex align-items-center mb-3"
        onClick={onSelect}
        style={{ cursor: "pointer" }}
      >
        <DashboardIcon />
        <div className="mx-2" />
        <Label color="#64748B">Dashboard</Label>
      </div>
      <div
        className="d-flex align-items-center"
        onClick={onSelect}
        style={{ cursor: "pointer" }}
      >
        <MasterIcon />
        <div className="mx-2" />
        <Label color="#64748B">Master Data</Label>
      </div>
    </div>
  );
};

const Header = ({ logo, businessName, userInfo, logoutAction }) => {
  const [showFilterForm, setshowFilterForm] = useState(false);

  const onSelect = () => {
    setshowFilterForm(false);
  };

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
            onClick={() => setshowFilterForm(true)}
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

      {showFilterForm && (
        <FloatingSidebar
          open={showFilterForm}
          onClose={() => setshowFilterForm(false)}
          width="17rem"
        >
          <MainMenu onSelect={onSelect} />
        </FloatingSidebar>
      )}
    </header>
  );
};

export default Header;
