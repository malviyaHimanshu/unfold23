import React ,{useState,useEffect}from "react";
import styles from "./styles.module.scss";
const imgSrc =
  "https://unsplash.com/photos/a-video-game-controller-flying-through-the-air-B6oBCNG7IK4";

// import a from "../../../components/mCard/sheeryImage.png";

const CardDetail = () => {
  const [number, setNumber] = useState(5);
  useEffect(() => {
    // Generate a random number between 1 and 10 and set it as the initial state
    const randomInitialNumber = Math.floor(Math.random() * 102) + 1;
    setNumber(randomInitialNumber);
  }, []);
  const handleIncrement = () => {
    // Increase the number by 1 when the up arrow is clicked
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    // Decrease the number by 1 when the down arrow is clicked
    setNumber(number - 1);
  };
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            style={{ background: "none", border: "none" }}
            onClick={handleIncrement}
          >
            <img
              className={styles.Image}
              src="https://cdn.icon-icons.com/icons2/3391/PNG/512/small_up_arrow_icon_213613.png"
              alt="uparrow"
            />
          </button>
          <h2>{number}</h2>
          <button
            style={{ background: "none", border: "none" }}
            onClick={handleDecrement}
          >
            <img
              className={styles.Image}
              src="https://cdn.icon-icons.com/icons2/3389/PNG/512/arrow_small_down_icon_213264.png"
              alt="downarrow"
            />
          </button>
        </div>
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
