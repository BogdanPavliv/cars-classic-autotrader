import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataMainCars } from "../../../utils/cars-main";
import styles from "../../../styles/car/index.module.scss";
import { SectionCarProps, SliderSettings } from "../../../types/others"; // Adjust the import path as necessary

const SectionCar: React.FC<SectionCarProps> = ({ id }) => {
  const imageArray = Object.values(dataMainCars[id].images);
  const carInfo = dataMainCars[id];

  const settings: SliderSettings = {
    customPaging: function (id: number): React.ReactElement {
      return (
        <a href="#!" className={styles.thumbnail_link}>
          <img
            className={styles.thumbnail_img}
            src={imageArray[id]}
            alt={`Thumbnail ${id}`}
          />
        </a>
      );
    },
    dots: true,
    arrows: false,
    dotsClass: `${styles.slick_car_dots} ${styles.slick_car_thumbs}`,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className={`${styles.section_car} page-car`}>
      <div className="container-md">
        <h1 className="title-top">{carInfo.name}</h1>
      </div>
      <div className="container-lg">
        <div className={styles.car}>
          <div className={styles.car__details}>
            <div className={styles.car__details__top}>
              <div className={styles.car__slider__wrapper}>
                <Slider {...settings} className={styles.slick_car}>
                  {imageArray.map((car, index) => (
                    <div className={styles.cars__card} key={index}>
                      <img
                        className={styles.cars__card__img}
                        src={car}
                        alt={`Slide ${index}`}
                      />
                    </div>
                  ))}
                </Slider>
                <div className={styles.custom_dots}>
                  {imageArray.map((_, index) => (
                    <a
                      key={index}
                      className={`${styles.custom_dot} ${
                        currentSlide === index ? `${styles.active}` : ""
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
        <div className={styles.car__details__bottom}>
          <div className={styles.car__details__info}>
            <div className={styles.car__details__info_row}>
              <div className={styles.car__details__title}>{carInfo.name}</div>
              <div className="badge-container">
                <a className="badge-transparent" href="#a">
                  {carInfo.price}
                </a>
              </div>
              <div className={styles.car__details__table}>
                <div className={styles.car__details__table_row}>
                  <div className={styles.car__details__table_row_item}>
                    <div className={styles.car__details__table_row_title}>
                      Make
                    </div>
                    <div className={styles.car__details__table_row_value}>
                      {carInfo.make}
                    </div>
                  </div>
                  <div className={styles.car__details__table_row_item}>
                    <div className={styles.car__details__table_row_title}>
                      Model
                    </div>
                    <div className={styles.car__details__table_row_value}>
                      {carInfo.model}
                    </div>
                  </div>
                  <div className={styles.car__details__table_row_item}>
                    <div className={styles.car__details__table_row_title}>
                      Transmission:
                    </div>
                    <div className={styles.car__details__table_row_value}>
                      {carInfo.transmission}
                    </div>
                  </div>
                  <div className={styles.car__details__table_row_item}>
                    <div className={styles.car__details__table_row_title}>
                      VIN:
                    </div>
                    <div className={styles.car__details__table_row_value}>
                      {carInfo.vin}
                    </div>
                  </div>
                  <div className={styles.car__details__table_row_item}>
                    <div className={styles.car__details__table_row_title}>
                      Body Color:
                    </div>
                    <div className={styles.car__details__table_row_value}>
                      {carInfo.color}
                    </div>
                  </div>
                </div>
                <div className={styles.car__details__table_row}>
                  <div className={styles.car__details__table_row_item}>
                    <div className={styles.car__details__table_row_title}>
                      Mileage:
                    </div>
                    <div className={styles.car__details__table_row_value}>
                      {carInfo.mileage}
                    </div>
                  </div>
                  <div className={styles.car__details__table_row_item}>
                    <div className={styles.car__details__table_row_title}>
                      Engine Size:
                    </div>
                    <div className={styles.car__details__table_row_value}>
                      {carInfo.engineSize}
                    </div>
                  </div>
                  <div className={styles.car__details__table_row_item}>
                    <div className={styles.car__details__table_row_title}>
                      Year:
                    </div>
                    <div className={styles.car__details__table_row_value}>
                      {carInfo.year}
                    </div>
                  </div>
                  <div className={styles.car__details__table_row_item}>
                    <div className={styles.car__details__table_row_title}>
                      Type:
                    </div>
                    <div className={styles.car__details__table_row_value}>
                      {carInfo.type}
                    </div>
                  </div>
                  <div className={styles.car__details__table_row_item}>
                    <div className={styles.car__details__table_row_title}>
                      Interior Color:
                    </div>
                    <div className={styles.car__details__table_row_value}>
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
            <div className={styles.car__details__info_row}>
              <div className={styles.car__details__title}>About the car</div>
              <div className={styles.car__details__info_text_wrapper}>
                <div className={styles.car__details__info_text_title}>
                  {carInfo.nameFull}
                </div>
                <div className={styles.car__details__info_text}>
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
