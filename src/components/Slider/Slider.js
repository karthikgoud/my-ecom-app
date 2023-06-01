import Carousel from "nuka-carousel";
import "./Slider.css";

const Slider = () => {
  const params = {
    wrapAround: true,
    defaultControlsConfig: {
      containerClassName: "containerClassName",
      pagingDotsClassName: "dots",
      pagingDotsContainerClassName: "dots-cont",
    },
    cellAlign: "center",
    slidesToShow: 2,
    autoplay: true,
  };

  return (
    <div>
      <Carousel className="carousal" {...params}>
        <img src="/images/carousal/carousal-1.jpg" />
        <img src="/images/carousal/carousal-2.jpg" />
        <img src="/images/carousal/carousal-3.jpg" />
        <img src="/images/carousal/carousal-4.jpg" />
        <img src="/images/carousal/carousal-5.jpg" />
        <img src="/images/carousal/carousal-6.jpg" />
      </Carousel>
    </div>
  );
};

export default Slider;
