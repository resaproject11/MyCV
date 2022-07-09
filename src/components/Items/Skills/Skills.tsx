import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import styles from "./Skills.module.scss";

type Props = {
  title: string;
  dataValue: any;
};
const Skills: React.FC<Props> = ({ title, dataValue }) => {
  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressItem}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.title}>{dataValue}%</div>
      </div>
      <ProgressBar
        className={styles.progressBar}
        completed={dataValue}
        bgColor={"#ffc107"}
        baseBgColor={"#191923"}
        height="6px"
        isLabelVisible={false}
      />
    </div>
  );
};

export default Skills;
