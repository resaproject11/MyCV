import React from "react";
import { Resume } from "src/types/content";
import styles from "./Timeline.module.scss";

type Props = {
  resumes: Resume[];
};

const Timeline: React.FC<Props> = ({ resumes }) => {
  return (
    <>
      {resumes.map((resume, i) => (
        <div className={styles.artTimelineItem} key={i}>
          <div className={styles.markLight}></div>
          <div className={styles.mark}></div>
          <div className={styles.artContent}>
            <div className={styles.artHeader}>
              <div className={styles.leftSide}>
                <div className={styles.title}>{resume.title}</div>
                <div className={styles.description}>{resume.organization}</div>
              </div>
              <div className={styles.rightSide}>
                <span> {resume.year}</span>
              </div>
            </div>
            <div className={styles.artDescription}>{resume.description}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Timeline;
