/* eslint-disable @next/next/no-img-element */
import styles from '../styles/productContainer.module.scss'
import React from 'react';

export default function ProductContainer() {
  return (
    <div className={styles.productContainer}>
        <div className={styles.itemImgWrapper}>
            <img src="./ellipse-icon.svg" alt="Item" />
        </div>
        <div className={styles.itemInfoContainer}>
            <div className={styles.itemInfoWrapper}>
                <p className={styles.itemTitle}>Lorem Ipsum</p>
                <p className={styles.itemDescription}>Redesigned from scratch and completely revised.</p>
            </div>

            <div className={styles.itemPriceWrapper}>
                <img src="./ellipse-icon.svg" alt="ETH icon" />
                <p>32 ETH</p>
            </div>
            <button className={styles.buyBtn}>Comprar</button>
        </div>
    </div>
  )
}
