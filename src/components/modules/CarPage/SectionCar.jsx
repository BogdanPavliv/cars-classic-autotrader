import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataMainCars } from "../../../utils/cars-main";

const SectionCar = ({ id }) => {
  const imageArray = Object.values(dataMainCars[id].images);

  const carInfo = dataMainCars[id];

  console.log(imageArray);
  const settings = {
    customPaging: function (id) {
      return (
        <a href="#!" className="thumbnail-link">
          <img
            className="thumbnail-img"
            src={imageArray[id]}
            alt={`Thumbnail ${id}`}
          />
        </a>
      );
    },
    dots: true,
    arrows: false,
    dotsClass: "slick-car-dots slick-car-thumbs",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  
  return (
    <section className="section-car page-car">
      <div className="container-md">
        <h1 className="title-top">{carInfo.name}</h1>
      </div>
      <div className="container-lg">
        <div className="car">
          <div className="car__details">
            <div className="car__details--top">
              <div className="car__slider--wrapper">
                <Slider {...settings} className="slick-car">
                  {imageArray.map((car, index) => (
                    <div className="cars__card" key={index}>
                      <img
                        className="cars__card--img"
                        src={car}
                        alt={`Slide ${index}`}
                      />
                    </div>
                  ))}
                </Slider>
                <div className="custom-dots">
                  {imageArray.map((image, index) => (
                    <a
                      key={index}
                      className={`custom-dot ${
                        currentSlide === index ? "active" : ""
                      }`}
                      onClick={() => setCurrentSlide(index)}
                      href="#!"
                    >
                      &nbsp;
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-md">
        <div className="car__details--bottom">
          <div className="car__details--info">
            <div className="car__details--info-row">
              <div className="car__details--title">{carInfo.name}</div>
              <div className="badge-container">
                <a className="badge-transparent" href="#a">
                  {carInfo.price}
                </a>
              </div>
              <div className="car__details--table">
                <div className="car__details--table-row">
                  <div className="car__details--table-row-item">
                    <div className="car__details--table-row-title">Make</div>
                    <div className="car__details--table-row-value">
                      {carInfo.make}
                    </div>
                  </div>
                  <div className="car__details--table-row-item">
                    <div className="car__details--table-row-title">Model</div>
                    <div className="car__details--table-row-value">
                      {carInfo.model}
                    </div>
                  </div>
                  <div className="car__details--table-row-item">
                    <div className="car__details--table-row-title">
                      Transmission:
                    </div>
                    <div className="car__details--table-row-value">
                      {carInfo.transmission}
                    </div>
                  </div>
                  <div className="car__details--table-row-item">
                    <div className="car__details--table-row-title">VIN:</div>
                    <div className="car__details--table-row-value">
                      {carInfo.vin}
                    </div>
                  </div>
                  <div className="car__details--table-row-item">
                    <div className="car__details--table-row-title">
                      Body Color:
                    </div>
                    <div className="car__details--table-row-value">
                      {carInfo.color}
                    </div>
                  </div>
                </div>
                <div className="car__details--table-row">
                  <div className="car__details--table-row-item">
                    <div className="car__details--table-row-title">
                      Mileage:
                    </div>
                    <div className="car__details--table-row-value">
                      {carInfo.mileage}
                    </div>
                  </div>
                  <div className="car__details--table-row-item">
                    <div className="car__details--table-row-title">
                      Engine Size:
                    </div>
                    <div className="car__details--table-row-value">
                      {carInfo.engineSize}
                    </div>
                  </div>
                  <div className="car__details--table-row-item">
                    <div className="car__details--table-row-title">Year:</div>
                    <div className="car__details--table-row-value">
                      {carInfo.year}
                    </div>
                  </div>
                  <div className="car__details--table-row-item">
                    <div className="car__details--table-row-title">Type:</div>
                    <div className="car__details--table-row-value">
                      {carInfo.type}
                    </div>
                  </div>
                  <div className="car__details--table-row-item">
                    <div className="car__details--table-row-title">
                      Interior Color:
                    </div>
                    <div className="car__details--table-row-value">
                      {carInfo.interiorColor}
                    </div>
                  </div>
                </div>
              </div>
              <div className="badge-container hiden-element marginTop">
                <a className="badge-transparent brown" href="#a">
                  Rent
                </a>
              </div>
            </div>
            <div className="car__details--info-row">
              <div className="car__details--title">About the car</div>
              <div className="car__details--info-text-wrapper">
                <div className="car__details--info-text-title">
                  {carInfo.nameFull}
                </div>
                <div className="car__details--info-text">
                  {carInfo.description}
                </div>
              </div>
              <div className="badge-container hiden-element marginTop bottom visible">
                <a className="badge-transparent brown" href="#a">
                  Rent
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCar;
