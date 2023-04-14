import PropTypes from "prop-types";
import clsx from "clsx"
import Swiper, { SwiperSlide } from "../../components/swiper";
import categoryData from "../../data/category/category-two.json";
import CategoryTwoSingle from "../../components/category/CategoryTwoSingle.js";
import SectionTitleFour from "../../components/section-title/SectionTitleFour.js";

const settings = {
  loop: false,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    },
  }
};

const CategoryTwoSlider = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("collections-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        {/* section title */}
        <SectionTitleFour titleText="Collections" spaceBottomClass="mb-40" />
        <div className="collection-wrap">
          <div className="collection-active">
            {categoryData && (
              <Swiper options={settings}>
                {categoryData.map((single, key) => (
                  <SwiperSlide key={key}>
                    <CategoryTwoSingle
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
  );
};

CategoryTwoSlider.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CategoryTwoSlider;
