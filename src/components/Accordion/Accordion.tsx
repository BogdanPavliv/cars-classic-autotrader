import { useState } from "react";
import styles from "../../styles/accordion/index.module.scss";
import { AccordionSectionProps, AccordionProps } from "../../types/others";

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}: AccordionSectionProps) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div className={styles.accordion_item}>
      <div className={styles.accordion_title} onClick={toggleSection}>
        <div>{section.title}</div>
        <button
          className={
            isActiveSection
              ? `${styles.accordion_button} ${styles.accordion_button_active}`
              : `${styles.accordion_button}`
          }
          type="button"
        ></button>
      </div>
      {isActiveSection && (
        <div className={styles.accordion_content}>{section.content}</div>
      )}
    </div>
  );
};

const Accordion = ({ sections }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(4);
  return (
    <div className={styles.accordion}>
      {sections.map((section, index) => (
        <AccordionSection
          section={section}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
