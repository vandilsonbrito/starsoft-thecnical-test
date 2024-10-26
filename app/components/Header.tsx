/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
        <img src="./logo.svg" alt="Logo" />
        <img src="./bag-icon.svg" alt="Bag icon" />
    </header>
  )
}
