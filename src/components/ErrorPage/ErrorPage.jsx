import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <PageWrapper>
      <p className={styles.error}>Sorry, this page doesn't exist.</p>
    </PageWrapper>
  );
};

export default ErrorPage;
