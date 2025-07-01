import { NavLink } from "react-router-dom";
import styles from "../../styles/cars/index.module.scss";
import { CarProps } from "../../types/others";

const Car = ({ image, price, name, badge, mileage, index }: CarProps) => {
  return (
    <NavLink to={`/car/${index}`}>
      <div className={styles.cars__card}>
        <img className={styles.cars__card__img} src={image} alt="" />
        <div className={styles.cars__card__content}>
          <div className={styles.cars__card__price}>{price}</div>
          <h4 className={styles.cars__card__name}>{name}</h4>
          <div className={styles.cars__card__action}>
            <span className={styles.badge}>
              {" "}
              {badge}
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
                />
              </svg>
            </span>
            <div className={styles.cars__card__mileage}>{mileage}</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Car;
