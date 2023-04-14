import PropTypes from "prop-types";

const TestimonialThreeSingle = ({ data }) => {
  return (
    <div className="single-testimonial-2 text-center">
      <p>{data.content}</p>
      <div className="client-info">
        <i className="fa fa-map-signs" />
        <h5>{data.customerName}</h5>
        <span>{data.title}</span>
      </div>
    </div>
  );
};

TestimonialThreeSingle.propTypes = {
  data: PropTypes.shape({})
};

export default TestimonialThreeSingle;
