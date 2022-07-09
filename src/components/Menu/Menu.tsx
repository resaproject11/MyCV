import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useMedia from "use-media";
import styles from "./Menu.module.scss";
import cn from "classnames";

type Props = {
  onClick:() => any;
  active?:boolean;
}

const Menu:React.FC<Props> = ({onClick, active}) => {
  const isMobile = useMedia({ maxWidth: "575.98px" });
  const router = useRouter();

  const click = Boolean(onClick);
  console.log(click);
  return (
    <>
      {isMobile ? (
        <div className={styles.menu}>
          <div className={cn({[styles.menuHamburger]:true, [styles.activeH]:active})} onClick={onClick}>
            <span></span>
          </div>
        </div>
      ) : (
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="/">
              <a className={router.pathname == "/" ? styles.active : ""}>
                Home
              </a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/about">
              <a className={router.pathname == "/about" ? styles.active : ""}>
                About Me
              </a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/resume">
              <a className={router.pathname == "/resume" ? styles.active : ""}>
                Resume
              </a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/contact">
              <a className={router.pathname == "/contact" ? styles.active : ""}>
                Contact Us
              </a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/portfolio">
              <a
                className={router.pathname == "/portfolio" ? styles.active : ""}
              >
                Portfolio
              </a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Menu;
