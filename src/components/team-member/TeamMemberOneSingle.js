import PropTypes from "prop-types";
import clsx from "clsx";

const TeamMemberOneSingle = ({ data, spaceBottomClass }) => {
  return (
      <div className={clsx("team-wrapper", spaceBottomClass)}>
        <div className="team-img">
          <img
            src={process.env.PUBLIC_URL + data.image}
            alt=""
            className="img-fluid"
          />
          <div className="team-action">
            <a
              className="facebook"
              href={data.fbLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook" />
            </a>
            <a
              className="twitter"
              href={data.twitterLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter" />
            </a>
            <a
              className="instagram"
              href={data.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram" />
            </a>
          </div>
        </div>
        <div className="team-content text-center">
          <h4>{data.name}</h4>
          <span>{data.position} </span>
        </div>
      </div>
  );
};

TeamMemberOneSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default TeamMemberOneSingle;
