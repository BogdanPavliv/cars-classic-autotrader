import { accordionData } from "../../../utils/cars-main";
import Accordion from "../../../components/Accordion/Accordion";

const SectionFaq = () => {
  return (
    <section className="section-faq">
      <div className="container-md">
        <div className="section-faq__inner">
          <div className="section-faq__left hiden-element">
            <div className="section-faq__title-wrapper">
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
          <div className="section-faq__right">
            <h3 className="title-left section-faq-mob">FAQ</h3>
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
