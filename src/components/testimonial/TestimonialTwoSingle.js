import PropTypes from "prop-types";

const TestimonialTwoSingle = ({ data, sliderClass }) => {
  return (
    <div
      className="single-testimonial single-testimonial--style2 text-center"
    >
      <img src={process.env.PUBLIC_URL + data.image} alt="" />
      <p>{data.content}</p>
      <div className="client-info">
        <h5>{data.customerName}</h5>
        <span>{data.title}</span>
      </div>
    </div>
  );
};

TestimonialTwoSingle.propTypes = {
  data: PropTypes.shape({})
};

export default TestimonialTwoSingle;
