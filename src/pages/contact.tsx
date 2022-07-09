import Container from "@componets/Container";
import React from "react";
import styles from "@styles/Resume.module.scss";

const contact = () => {
  return (
    <Container>
      <div className={styles.content}>
        <h2 className={styles.titleContent}>Contact Us</h2>
        <div className={styles.aboutDec}>
             Connect with me via email: resaabdilah11@gmail.com
            </div>
      </div>
    </Container>
  );
};

export default contact;
