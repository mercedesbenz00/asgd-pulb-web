import Swiper, { SwiperSlide } from "../../components/swiper";
import ImageSliderOneSingle from "../../components/image-slider/ImageSliderOneSingle";
import imageData from "../../data/image-slider/image-slider-one.json";

const settings = {
  loop: false,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5
    }
  }
};

const ImageSliderOne = () => {
  return (
    <div className="image-slider-area">
      <div className="image-slider-active">
        {imageData && (
          <Swiper options={settings}>
            {imageData.map((single, key) => (
                <SwiperSlide key={key}>
                  <ImageSliderOneSingle
                    data={single}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default ImageSliderOne;
