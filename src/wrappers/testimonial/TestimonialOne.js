import PropTypes from "prop-types";
import clsx from "clsx"
import Swiper, { SwiperSlide } from "../../components/swiper";
import testimonialData from "../../data/testimonial/testimonial-one.json";
import TestimonialOneSingle from "../../components/testimonial/TestimonialOneSingle.js";

// swiper slider settings
const settings = {
  slidesPerView: 1,
  loop: true,
  autoplay: true
};

const TestimonialOne = ({
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  bgColorClass,
  testimonialClass,
}) => {
  return (
    <div className={clsx("testimonial-area", spaceTopClass, spaceBottomClass, spaceLeftClass, spaceRightClass, bgColorClass)}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="testimonial-active nav-style-1 nav-testi-style">
              {testimonialData && (
                <Swiper options={settings}>
                  {testimonialData.map((single, key) => (
                      <SwiperSlide key={key}>
                        <TestimonialOneSingle
                          data={single}
                          testimonialClass={testimonialClass}
                        />
                      </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialOne.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  testimonialClass: PropTypes.string
};

export default TestimonialOne;
