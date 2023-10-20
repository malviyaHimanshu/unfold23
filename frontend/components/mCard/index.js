import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import a from "../mCard/sheeryImage.png";
const MCard = ({ data }) => {
  let notionHTML = "";
  data.rawData.forEach((block) => {
    if (block.tag === "img") {
      // Handle image block
      notionHTML += `<br /><img src="${a}"alt="" /><br />`;
    } else {
      // Handle other block types (h1, h2, h3, p)
      notionHTML += `<${block.tag}>${block.html}</${block.tag}>`;
    }
  });
  return (
    <Link href={`/marketplace/${data.id}`}>
      <div className={styles.card}>
        <div className={styles.Img}>
          {/* <img
            className={styles.cardImgTop}
            src={data.imgSrc}
            alt="NFT Image"
          /> */}
          <div
            className={styles.rawtohtml}
            dangerouslySetInnerHTML={{ __html: notionHTML }}
          ></div>
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
