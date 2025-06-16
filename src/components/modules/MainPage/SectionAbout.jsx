import section_about_img from "../../../img/section-about/section-about-img.png";
import circle from "../../../img/section-about/circle.svg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const SectionAbout = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Запускати анімацію тільки один раз
    threshold: 0.5, // Відсоток появи елемента у видимій області (0 - 1)
  });
  return (
    <section className="section-about">
      <div className="container-sm">
        <div className="section-about__top">
          <h3 className="title-left">
            About us
            <br />
            in numbers
          </h3>
          <p className="section-about__top--text">
            From acquisition to restoration, we specialize in iconic
            automobiles, ensuring each drive is a celebration of timeless style.
            Elevate your journey with our passion for preserving automotive
            heritage.
          </p>
        </div>
        <div className="section-about__bottom">
          <ul className="section-about__list">
            <li className="section-about__item">
              <img className="section-about__item--img" src={circle} alt="" />
              <div className="section-about__item--content" ref={ref}>
                {inView && (
                  <CountUp
                    start={0}
                    end={32}
                    className="section-about__item--digit"
                  />
                )}
                <p className="section-about__item--text">Retro car</p>
              </div>
            </li>
            <li className="section-about__item">
              <img className="section-about__item--img" src={circle} alt="" />
              <div className="section-about__item--content" ref={ref}>
                {inView && (
                  <CountUp
                    start={0}
                    end={400}
                    className="section-about__item--digit"
                  />
                )}
                <p className="section-about__item--text">Satisfied clients</p>
              </div>
            </li>
            <li className="section-about__item">
              <img className="section-about__item--img" src={circle} alt="" />
              <div className="section-about__item--content" ref={ref}>
                <div className="section-about__item--digit-wrapper">
                  {inView && (
                    <CountUp
                      start={0}
                      end={5}
                      className="section-about__item--digit"
                    />
                  )}
                  <span className="years">years</span>
                </div>
                <p className="section-about__item--text">
                  Delighting our clients
                </p>
              </div>
            </li>
          </ul>
          <div className="section-about__img--wrapper">
            <img
              className="section-about__img"
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
