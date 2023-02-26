import React from "react";

import NextLink from "next/link";
import styles from "./styles.module.css";

export default function Menu() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <NextLink className={styles.link} href={"#home"}>
            <h1>LOGO</h1>
          </NextLink>
        </div>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <NextLink className={styles.link} href={"#products"}>
              Product
            </NextLink>
          </li>
          <li className={styles.li}>
            <NextLink className={styles.link} href={"#help"}>
              Help
            </NextLink>
          </li>
          <li className={styles.li}>
            <NextLink className={styles.link} href={"#contact"}>
              Contact
            </NextLink>
          </li>
          <li className={styles.li}>
            <NextLink className={styles.link} href={"#about"}>
              About
            </NextLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
