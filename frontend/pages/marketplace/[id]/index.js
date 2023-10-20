import React from "react";
import styles from "./styles.module.scss";
const imgSrc =
  "https://unsplash.com/photos/a-video-game-controller-flying-through-the-air-B6oBCNG7IK4";

// import a from "../../../components/mCard/sheeryImage.png";

const CardDetail = () => {
  return (
    <div className={styles.main}>
      <div className={styles.cardPreview}>
        <h4>Page Preview</h4>
        <br />
        <div class="">
          <h1>This is page title</h1>
          <h2>This is heading</h2>
          <h3>This is subheading</h3>
          {/* <img src={a} alt="" /> */}
          <p>This is paragraph</p>
          <p></p>
        </div>
      </div>
      <div className={styles.cardDetails}>
        <h4>About the collection</h4>
        <br />
        <h3 className="author">The author name</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laborum
          sed libero asperiores! Placeat eaque voluptates totam deserunt
          necessitatibus est! Magni nam molestiae vel tempora iure assumenda.{" "}
          <br />
          Maxime, blanditiis corrupti! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ab vero est, cum laborum veritatis alias facere
          dolorem possimus similique dolorum eligendi quae eaque quia libero,
          commodi quo, laboriosam doloremque rem!
        </p>
        <br />

        <div className="">
          <h3>Open Edition</h3>
          <br />
          <div className={styles.box}>
            <h2 className="price">ETH 0.231</h2>
            <button className={styles.buy}>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
