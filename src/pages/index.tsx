import type { NextPage } from "next";
import styles from "@styles/Home.module.scss";
import Typed from "react-typed";
import Container from "@componets/Container";
import Link from "next/link";
const bannerImg = require("../assets/img/desk.jpg");

const Home: NextPage = () => {
  return (
    <Container>
      <>
        {/* <div className={styles.topBg}>
          <div className={styles.topBgOverlay}></div>
        </div> */}
        <div className={styles.containerBanner}>
          <div className={styles.banner}>
            <div className={styles.imgBanner}>
              <div className={styles.overlayBanner}>
                <div className={styles.bannerTitle}>
                  <h1 className={styles.titles}>
                    Discover my Journey as <br></br>a Programmer!
                  </h1>
                  <div className={styles.artTitle}>
                    &lt;<i>code</i>&gt; I build{" "}
                    <Typed
                      loop
                      strings={["website.", "android application."]}
                      typeSpeed={100}
                      backSpeed={75}
                      smartBackspace
                      backDelay={1}
                      fadeOutDelay={100}
                    ></Typed>{" "}
                    &lt;
                    <i>code</i>&gt;
                  </div>
                  <Link href={{ pathname: "/portfolio" }}>
                    <a className={styles.btnResume}>Explore Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Container>
  );
};

export default Home;
