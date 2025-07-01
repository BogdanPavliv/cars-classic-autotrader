import { dataOurCars } from "../../../utils/cars-main";
import styles from "../../../styles/cars/index.module.scss";

const SectionCars: React.FC = () => {
  return (
    <section className={styles.section_cars}>
      <div className="container-md">
        <h1 className="title-top">Our cars</h1>
      </div>
      <div className="container-lg">
        <div className={styles.cars__wrapper}>
          <div className={styles.cars}>
            {dataOurCars.map((card, i) => (
              <div className={styles.cars__card} key={i}>
                <img
                  className={styles.cars__card__img}
                  src={card.image}
                  alt=""
                />
                <div className={styles.cars__card__content}>
                  <div className={styles.cars__card__price}>{card.price}</div>
                  <h4 className={styles.cars__card__name}>{card.name}</h4>
                  <div className={styles.cars__card__action}>
                    <a className={styles.badge} href="#a">
                      Rent
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className={styles.badge_img}
                          d="M1 1H15M15 1V15M15 1L1 15"
                          stroke="#3A3C35"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <div className={styles.cars__card__mileage}>
                      {card.mileage}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCars;
