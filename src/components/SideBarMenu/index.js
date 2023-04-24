import { useHistory } from "react-router-dom";
import FloatingSidebar from "components/FloatingSidebar";
import Label from "components/Label";

const MenuItem = ({ title, Icon, action, setOpenMenu }) => {
  let history = useHistory();
  return (
    <div
      className="d-flex align-items-center mb-3"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setOpenMenu(false);
        history.push(action);
      }}
      style={{ cursor: "pointer" }}
    >
      <Icon />
      <div className="mx-2" />
      <Label color="#64748B">{title}</Label>
    </div>
  );
};

const SideBarMenu = ({ openMenu, setOpenMenu, menuData }) => {
  return (
    <>
      <FloatingSidebar
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        width="17rem"
      >
        <div className="d-flex flex-column">
          <>
            {menuData.map((menu) => (
              <MenuItem
                key={menu?.label}
                title={menu?.label}
                Icon={menu?.icon}
                action={menu.path}
                setOpenMenu={setOpenMenu}
              />
            ))}
          </>
        </div>
      </FloatingSidebar>
    </>
  );
};

export default SideBarMenu;
