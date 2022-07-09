import Container from "@componets/Container";
import React from "react";
import styles from "@styles/Resume.module.scss";
import Timeline from "@componets/Timeline";
import Skills from "@componets/Items/Skills/Skills";

const MyResume = [
  {
    title: "IT Programmer",
    organization: "PT. Knitto Textile Indonesia",
    year: "Jun 2021 - Current",
    description: "Develop website and some internal app",
  },
  {
    title: "IT Programmer / Frontend",
    organization: "PT. Memori Netindo Jaya (Ultimo)",
    year: "Apr 2019 - Mar 2021",
    description:
      "Create and Desain UI design for web application, building custome web application (frontend) with razor pages, html, scss and c#.",
  },
];

const MyEducation = [
  {
    title: "Bachelor Of Informatics Engineering",
    organization: "University Of Jenderal Achmad Yani (UNJANI), Cimahi",
    year: "2013 - 2017",
    description: "Bachelor Degree",
  },
  {
    title: "Science Major",
    organization: "Angkasa High School, Margahayu Bandung",
    year: "2009 - 2012",
    description: "High School",
  },
];

const MySkills = [
  {
    title: "HTML & SCSS",
    data: 90,
  },
  {
    title: "C#",
    data: 60,
  },
  {
    title: "React JS",
    data: 80,
  },
  {
    title: "React Native",
    data: 70,
  },{
    title:"Javascript/Typescript/Jquery",
    data:75
  }
];

const resume = () => {
  return (
    <Container>
      <div className={styles.content}>
        <div className={styles.containerItem}>
          <div className={styles.contentItem}>
            <h2 className={styles.titleContent}>Experience</h2>
            <div className={styles.artTimeline}>
              <Timeline resumes={MyResume} />
            </div>
            <h2 className={styles.titleContent} style={{ marginTop: "4rem" }}>
              Education
            </h2>
            <div className={styles.artTimeline}>
              <Timeline resumes={MyEducation} />
            </div>
          </div>

          <div className={styles.contentItem}>
            <h2 className={styles.titleContent}>Skills</h2>
            <div className={styles.skill}>
              {MySkills.map((skill) => (
                <Skills
                  key={skill.title}
                  title={skill.title}
                  dataValue={skill.data}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default resume;
