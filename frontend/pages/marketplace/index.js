import MCard from "../../components/mCard";
import styles from "./styles.module.scss";

import React from "react";

const Marketplace = () => {
  const data = [
    {
      header: "TingaTinga Arts Collective 1",
      miniting: "Now",
      price: 99,
      imgSrc:
        "https://images.unsplash.com/photo-1696587522065-7ea3e7ac033f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkTo: "/",
    },
    {
      header: "TingaTinga Arts Collective 2",
      miniting: "Now",
      price: 99,
      imgSrc:
        "https://images.unsplash.com/photo-1696587522065-7ea3e7ac033f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkTo: "/",
    },
    {
      header: "TingaTinga Arts Collective 3",
      miniting: "Now",
      price: 99,
      imgSrc:
        "https://images.unsplash.com/photo-1696587522065-7ea3e7ac033f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkTo: "/",
    },
  ];
  return (
    <div className={styles.cards}>
      {data.map((card) => (
        <MCard data={card} />
      ))}
    </div>
  );
};

export default Marketplace;
