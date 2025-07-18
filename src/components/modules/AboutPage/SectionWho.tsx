import styles from "../../../styles/who/index.module.scss";

const SectionWho: React.FC = () => {
  return (
    <section className={styles.section_who}>
      <div className="container-md">
        <div className={styles.section_who__inner}>
          <div className={styles.section_who__left}>
            <h1 className="title-top">
              Who
              <br />
              are we?
            </h1>
            <div className="badge-container hiden-element marginTop">
              <a className="badge-transparent brown" href="#!">
                Read reviews
              </a>
            </div>
          </div>
          <div className={styles.section_who__right}>
            <div className={styles.section_who__right_text_wrapper}>
              <div className={styles.car__details__info_text_title}>
                1966 Chevrolet Chevelle SS – STK 2801
              </div>
              <div className={styles.car__details__info_text}>
                The 1966 Chevelle SS396 captivated onlookers with its striking
                appearance. The revamped Fisher body ushered in a new era for
                the mid-size Chevy, establishing it as a performance icon. In
                this iteration, the SS396 evolved into a distinct model within
                the Chevelle lineup, showcasing numerous styling upgrades and an
                unwavering focus on performance.This ‘138’ code Chevelle SS396
                underwent an impressive frame-off restoration in 2013, emerging
                as a visual masterpiece. A professional application of Bolero
                Red paint revitalized the exterior, complemented by a meticulous
                restoration of the interior in original red vinyl. Every
                authentic detail, including the Muncie ‘hypodermic’ shifter, was
                thoughtfully recreated. The cabin features a complete set of
                SunPro gauges alongside a column-mounted tachometer, tinted
                windows, and an aftermarket AM/FM/cassette stereo system.Under
                the hood, the original 396ci ‘Rat’ powerplant gave way to a
                robust 427ci big-block. This powerhouse, meticulously rebuilt,
                boasts an aluminum intake, dual-line Holley carburetor, and a
                street-savvy cam. Paired with a 4-speed manual transmission, the
                throaty exhaust note resonates with power. (Trivia: A few years
                later, Don Yenko Chevrolet in Pittsburgh adopted a similar
                drivetrain package for their COPO Chevelles.)GM Rally wheels
                with trim rings and centers embrace sturdy 15” BFG Radial T/A
                tires. Steering is managed manually, while power disc/drum
                brakes, a front sway bar, and HD shocks contribute to a balanced
                driving experience.
              </div>
            </div>
            <div className="badge-container hiden-element marginTop bottom visible">
              <a className="badge-transparent brown" href="#a">
                Read reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWho;
