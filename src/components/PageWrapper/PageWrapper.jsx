import React from "react";
import styles from "./PageWrapper.module.css";

const PageWrapper = ({ children }) => {
  return <main className={styles.pageWrapper}>{children}</main>;
};

export default PageWrapper;
