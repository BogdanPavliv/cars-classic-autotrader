import { NavLink } from "react-router-dom";
import services_img_1 from "../../../img/section-services/services-img-1.jpg";
import services_img_2 from "../../../img/section-services/services-img-2.jpg";
import services_img_3 from "../../../img/section-services/services-img-3.jpg";
import styles from "../../../styles/services/index.module.scss";

const SectionServices: React.FC = () => {
  return (
    <section className={styles.section_services}>
      <div className="container-md">
        <div className={styles.section_services__top}>
          <div className="title">Services</div>
          <div className="badge-container hiden-element">
            <a className="badge-transparent" href="#a">
              Submit your application
            </a>
          </div>
        </div>
        <div className={styles.section_services__bottom}>
          <ul className={styles.section_services__list}>
            <NavLink to="/shipping">
              <li
                className={styles.section_services__item}
                style={{ backgroundImage: `url(${services_img_1})` }}
              >
                <p className={styles.section_services__item__text}>
                  01 / SHIPPING
                </p>
              </li>
            </NavLink>
            <NavLink to="/warranty">
              <li
                className={styles.section_services__item}
                style={{ backgroundImage: `url(${services_img_2})` }}
              >
                <p className={styles.section_services__item__text}>
                  02 / WARRANTY PURCHASE
                </p>
              </li>
            </NavLink>
            <NavLink to="/financing">
              <li
                className={styles.section_services__item}
                style={{ backgroundImage: `url(${services_img_3})` }}
              >
                <p className={styles.section_services__item__text}>
                  03 / FINANCING
                </p>
              </li>
            </NavLink>
          </ul>
          <div className="badge-container hiden-badge visible">
            <a className="badge-transparent" href="#a">
              Submit your application
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
