import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/banner/01.png" />
        </div>
        <div>
          <SliderItem src="/images/banner/03.png" />
        </div>
        <div>
          <SliderItem src="/images/banner/02.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
