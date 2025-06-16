import Car from "../../../components/Car/Car";
import { dataMainCars } from "../../../utils/cars-main";

const SectionCars = () => {
  return (
    <section className="section-cars">
      <div className="container-md">
        <h1 className="title-top">Retro cars 1960-1970</h1>
        <div className="section-cars__action">
          <h3 className="section-cars__text">Vintage retro cars USA</h3>
          <a className="badge-transparent" href="#a">
            Find a car
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="badge-img"
                d="M1 1H15M15 1V15M15 1L1 15"
                stroke="#3A3C35"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="container-lg">
        <div className="cars--wrapper">
          <div className="cars">
            {dataMainCars.map((card, index) => (
              <Car
                key={index}
                image={card.image}
                price={card.price}
                name={card.name}
                badge={card.badge}
                mileage={card.mileage}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCars;
