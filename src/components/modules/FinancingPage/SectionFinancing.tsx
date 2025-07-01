import page_financing_img from "../../../img/page-financing/financing-img.jpg";
import styles from "../../../styles/financing/index.module.scss";

const SectionFinancing: React.FC = () => {
  return (
    <section className={styles.section_financing}>
      <div className="container-md">
        <div className={styles.section_financing__top}>
          <div className="title-top">FINANCING</div>
        </div>
        <div className={styles.section_financing__bottom}>
          <div className={styles.section_financing__inner}>
            <div className={styles.section_financing__left}>
              <img
                className={styles.section_financing__img}
                src={page_financing_img}
                alt="Financing"
              />
            </div>
            <div className={styles.section_financing__right}>
              <div className={styles.section_financing__content}>
                <p className={styles.section_financing__text}>
                  Our financing options are designed to accommodate various
                  budgets and preferences. Whether you are a seasoned collector
                  or a first-time buyer, our team is dedicated to finding a
                  financing plan that suits your needs. Benefit from competitive
                  interest rates and straightforward terms that align with the
                  timeless value of the classic car you desire.
                </p>
                <p className={styles.section_financing__text}>
                  Applying for financing with us is a hassle-free process. Our
                  knowledgeable team is ready to guide you through the
                  application, ensuring that you have a clear understanding of
                  the terms and conditions. We believe in transparency, and our
                  commitment is to provide you with a financing solution that
                  enhances your enjoyment of the classic car of your dreams.
                </p>
                <p className={styles.section_financing__text}>
                  Take the next step in your journey to classic car ownership by
                  exploring our financing options. ALL CLASSIC MOTORS VELVA is
                  here to make your dream car a reality, with financing plans
                  that reflect our dedication to your satisfaction and the
                  preservation of automotive history.
                </p>
              </div>
              <div className="badge-container">
                <a className="badge-transparent" href="#!">
                  Deliver the car
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFinancing;
