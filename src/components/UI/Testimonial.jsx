import React from "react";
import Slider from "react-slick";
import "../../styles/testimonial.css";
import testimonialData from "../../assets/data/testimonialData";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonialData.map((item, index) => (
        <div className="testimonial py-4 px-3" key={index}>
          <div className="testimonial__content">
            <div className="testimonial__rating">
              {[...Array(item.rating)].map((_, i) => (
                <i key={i} className="ri-star-s-fill"></i>
              ))}
              {[...Array(5 - item.rating)].map((_, i) => (
                <i key={i} className="ri-star-line"></i>
              ))}
            </div>
            <p className="section__description">{item.feedback}</p>

            <div className="testimonial__user">
              <div className="user__details">
                <h6 className="user__name">{item.name}</h6>
                <p className="section__description user__position">
                  {item.position}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
