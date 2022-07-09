import Image from "next/image";
import React from "react";
import styles from "./Profil.module.scss";

const ProfilImg = require("../../assets/img/photo.jpg");

const Profil = () => {
  return (
    <div className={styles.header}>
      <div className={styles.avatar}>
        <Image src={ProfilImg} alt="profil-img"></Image>
      </div>
      <h5 className={styles.txtName}>Resa Abdilah</h5>
      <div className={styles.text}>IT Programmer</div>
    </div>
  );
};

export default Profil;
