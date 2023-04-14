
import { EffectFade } from 'swiper';
import Swiper, { SwiperSlide } from "../../components/swiper";
import heroSliderData from "../../data/hero-sliders/hero-slider-fourteen.json";
import HeroSliderFourteenSingle from "../../components/hero-slider/HeroSliderFourteenSingle.js";

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  navigation: true,
  autoHeight: false
};

const HeroSliderFourteen = () => {
  return (
    <div className="slider-area">
      <div className="slider-active-2 nav-style-3">
        <Swiper options={params} className="overflow-hidden">
          {heroSliderData?.map((single, key) => (
            <SwiperSlide key={key}>
              <HeroSliderFourteenSingle
                data={single}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderFourteen;
