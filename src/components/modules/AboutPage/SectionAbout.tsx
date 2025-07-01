import section_about_img from "../../../img/section-about/section-about-img.png";
import circle from "../../../img/section-about/circle.svg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "../../../styles/about/index.module.scss";

const SectionAbout: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Запускати анімацію тільки один раз
    threshold: 0.5, // Відсоток появи елемента у видимій області (0 - 1)
  });
  return (
    <section className={styles.section_about}>
      <div className="container-sm">
        <div className={styles.section_about__bottom}>
          <ul className={styles.section_about__list}>
            <li className={styles.section_about__item}>
              <img
                className={styles.section_about__item__img}
                src={circle}
                alt=""
              />
              <div className={styles.section_about__item__content} ref={ref}>
                {inView && (
                  <CountUp
                    start={0}
                    end={32}
                    className={styles.section_about__item__digit}
                  />
                )}
                <p className={styles.section_about__item__text}>Retro car</p>
              </div>
            </li>
            <li className={styles.section_about__item}>
              <img
                className={styles.section_about__item__img}
                src={circle}
                alt=""
              />
              <div className={styles.section_about__item__content} ref={ref}>
                {inView && (
                  <CountUp
                    start={0}
                    end={400}
                    className={styles.section_about__item__digit}
                  />
                )}
                <p className={styles.section_about__item__text}>
                  Satisfied clients
                </p>
              </div>
            </li>
            <li className={styles.section_about__item}>
              <img
                className={styles.section_about__item__img}
                src={circle}
                alt=""
              />
              <div className={styles.section_about__item__content} ref={ref}>
                <div className={styles.section_about__item__digit_wrapper}>
                  {inView && (
                    <CountUp
                      start={0}
                      end={5}
                      className={styles.section_about__item__digit}
                    />
                  )}
                  <span className={styles.years}>years</span>
                </div>
                <p className={styles.section_about__item__text}>
                  Delighting our clients
                </p>
              </div>
            </li>
          </ul>
          <div className={styles.section_about__img__wrapper}>
            <img
              className={styles.section_about__img}
              src={section_about_img}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
