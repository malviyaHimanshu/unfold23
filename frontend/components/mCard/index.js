import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const MCard = ({ data }) => {
  return (
    <Link href={data.linkTo}>
      <div className={styles.card}>
        <div className={styles.Img}>
          <img
            className={styles.cardImgTop}
            src={data.imgSrc}
            alt="NFT Image"
          />
        </div>
        <div className={styles.main}>
          <h3 className={styles.heading}>{data.header}</h3>
          <div className={styles.cardBody}>
            <div>
              <p className={styles.cardBody}>Miniting</p>
              <h5 className={styles.miniting}>{data.miniting}</h5>
            </div>
            <div>
              <p className={styles.cardBody}>Price</p>
              <h5 className={styles.price}>ETH {data.price}</h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MCard;
