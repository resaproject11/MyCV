import Container from "@componets/Container";
import React from "react";
import styles from "@styles/Resume.module.scss";

const about = () => {
  return (
    <Container>
      <div className={styles.content}>
        <h2 className={styles.titleContent}>About Me</h2>
        <div className={styles.containerItem}>
          <div className={styles.contentItem}>
            <div className={styles.aboutDec}>
              Web and Application developer with over 2+ years of front end
              experience and passion in Information Technology such as
              Programmer, Design, and any technology-based company. seeking to
              advance my career by growing with the team and company.
            </div>
          </div>
          <div className={styles.contentItem}>
            <div className={styles.contactInfo}>
              <ul className={styles.contactItem}>
                <li>
                  <strong>Country :</strong>Indonesian
                </li>
                <li>
                  <strong>City :</strong>Bandung
                </li>
                {/* <li>
                  <strong>Address : </strong>Soreang, Kab Bandung
                </li> */}
                <li>
                  <strong>Email :</strong>resaabdilah11@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default about;
