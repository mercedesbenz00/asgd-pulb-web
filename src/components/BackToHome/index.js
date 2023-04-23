import ArrowBack from "components/Icons/ArrowBack";
import { HOME_ROUTE } from "modules/home";
import { Link } from "react-router-dom";

export default function BackToHome({ text }) {
  return (
    <Link
      to={HOME_ROUTE}
      style={{ width: "fit-content" }}
      className="text-decoration-none d-flex"
    >
      <div className="d-flex align-items-center">
        <ArrowBack />
        <h6 className="ms-2 mt-2">{text}</h6>
      </div>
    </Link>
  );
}
