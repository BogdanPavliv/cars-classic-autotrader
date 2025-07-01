import { accordionData } from "../../../utils/cars-main";
import Accordion from "../../Accordion/Accordion";
import styles from "../../../styles/faq/index.module.scss";

const SectionFaq: React.FC = () => {
  return (
    <section className={`${styles.section_faq} page-faq`}>
      <div className="container-md">
        <div className={styles.section_faq__inner}>
          <div className={`${styles.section_faq__left} hiden-element`}>
            <div className={styles.section_faq__title_wrapper}>
              <h3 className="title-left">FAQ</h3>
            </div>
            <a className="badge-transparent" href="#a">
              Ask a Question
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
          <div className={styles.section_faq__right}>
            <h3 className={`title-left ${styles.section_faq_mob}`}>FAQ</h3>
            <Accordion sections={accordionData} />
            <div className="badge-container hiden-badge visible">
              <a className="badge-transparent" href="#a">
                Ask a Question
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
        </div>
      </div>
    </section>
  );
};

export default SectionFaq;
