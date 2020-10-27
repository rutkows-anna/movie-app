import React, { useState, useEffect, Children } from "react";
import MovieCard from "./MovieCard";
import styles from '../styles/styles.module.css'; 


const AppContent = ({ children }) => {
    return (
        <section className={styles.appContent}>
            {children}
        </section>
    )
}

export default AppContent;