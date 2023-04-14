import PropTypes from "prop-types";
import clsx from "clsx";
import Swiper, { SwiperSlide } from "../../components/swiper";
import testimonialData from "../../data/testimonial/testimonial-one.json";
import TestimonialOneSingle from "../../components/testimonial/TestimonialOneSingle.js";

// swiper slider settings
const settings = {
  slidesPerView: 1,
  loop: true,
  autoplay: true
};

const TestimonialFour = ({
spaceTopClass,
spaceBottomClass,
testimonialClass
}) => {
return (
  <div className="testimonial-area">
    <div className="container">
      <div
        className={clsx("bg-img", spaceTopClass, spaceBottomClass)}
        style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/img/bg/testimonial-bg-3.jpg"
            })`
          }}
        >
          <div className="row">
            <div className="col-lg-10 ms-auto me-auto">
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
    </div>
  );
};

TestimonialFour.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  testimonialClass: PropTypes.string
};

export default TestimonialFour;
