import PropTypes from "prop-types";
import clsx from "clsx"
import Swiper, { SwiperSlide } from "../../components/swiper";
import testimonialData from "../../data/testimonial/testimonial-one.json";
import TestimonialTwoSingle from "../../components/testimonial/TestimonialTwoSingle.js";

// swiper slider settings
const settings = {
  slidesPerView: 1,
  loop: true,
  autoplay: true
};

const TestimonialTwo = ({
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  bgColorClass,
  backgroundImage
}) => {
  return (
    <div
      className={clsx("testimonial-area bg-img", spaceTopClass, spaceBottomClass, spaceLeftClass, spaceRightClass, bgColorClass)}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 ms-auto me-auto">
            <div className="testimonial-active nav-style-1 nav-testi-style">
              {testimonialData && (
                <Swiper options={settings}>
                  {testimonialData.map((single, key) => (
                    <SwiperSlide key={key}>
                      <TestimonialTwoSingle
                        data={single}
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

TestimonialTwo.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TestimonialTwo;
