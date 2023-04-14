import PropTypes from "prop-types";
import clsx from "clsx"

const TestimonialOneSingle = ({ data, testimonialClass }) => {
  return (
    <div className={clsx(testimonialClass || "single-testimonial", "text-center")}>
      <img src={process.env.PUBLIC_URL + data.image} alt="" />
      <p>{data.content}</p>
      <div className="client-info">
        <i className="fa fa-map-signs" />
        <h5>{data.customerName}</h5>
        <span>{data.title}</span>
      </div>
    </div>
  );
};

TestimonialOneSingle.propTypes = {
  data: PropTypes.shape({}),
};

export default TestimonialOneSingle;
