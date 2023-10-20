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
      id: 1,
      rawData: [
        {
          _id: "65323a2b1b66cca1e6648c22",
          tag: "h1",
          html: "This is page title",
          imageUrl: "",
        },
        {
          _id: "65323c07932a69a859a474a7",
          tag: "h2",
          html: "This is heading",
          imageUrl: "",
        },
        {
          _id: "65323c0144ecccae4b0b36d3",
          tag: "h3",
          html: "This is subheading",
          imageUrl: "",
        },
        {
          _id: "65323c112213cbd5ed14ba0d",
          tag: "img",
          html: "This is paragraph<br>/<br>",
          imageUrl:
            "images/65323a2b1b66cca1e6648c21/lnycxp0vvkye01gjgw-Screenshot 2023-10-20 at 12.13.29 PM.png",
        },
        {
          _id: "65323c2c949663523f3b4d4f",
          tag: "p",
          html: "This is paragraph",
          imageUrl: "",
        },
        {
          _id: "65323c26d37afcfc2343c2b9",
          tag: "p",
          html: "",
          imageUrl: "",
        },
      ],
    },
    {
      header: "TingaTinga Arts Collective 2",
      miniting: "Now",
      price: 99,
      imgSrc:
        "https://images.unsplash.com/photo-1696587522065-7ea3e7ac033f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkTo: "/",
      id: 2,
      rawData: [
        {
          _id: "65323a2b1b66cca1e6648c22",
          tag: "h1",
          html: "This is page title",
          imageUrl: "",
        },
        {
          _id: "65323c07932a69a859a474a7",
          tag: "h2",
          html: "This is heading",
          imageUrl: "",
        },
        {
          _id: "65323c0144ecccae4b0b36d3",
          tag: "h3",
          html: "This is subheading",
          imageUrl: "",
        },
        {
          _id: "65323c2c949663523f3b4d4f",
          tag: "p",
          html: "This is paragraph",
          imageUrl: "",
        },
        {
          _id: "65323c112213cbd5ed14ba0d",
          tag: "img",
          html: "This is paragraph<br>/<br>",
          imageUrl:
            "images/65323a2b1b66cca1e6648c21/lnycxp0vvkye01gjgw-Screenshot 2023-10-20 at 12.13.29 PM.png",
        },
        {
          _id: "65323c26d37afcfc2343c2b9",
          tag: "p",
          html: "",
          imageUrl: "",
        },
      ],
    },
    {
      header: "TingaTinga Arts Collective 3",
      miniting: "Now",
      price: 99,
      imgSrc:
        "https://images.unsplash.com/photo-1696587522065-7ea3e7ac033f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      linkTo: "/",
      id: 3,
      rawData: [
        {
          _id: "65323a2b1b66cca1e6648c22",
          tag: "h1",
          html: "This is page title",
          imageUrl: "",
        },
        {
          _id: "65323c07932a69a859a474a7",
          tag: "h2",
          html: "This is heading",
          imageUrl: "",
        },
        {
          _id: "65323c0144ecccae4b0b36d3",
          tag: "h3",
          html: "This is subheading",
          imageUrl: "",
        },
        {
          _id: "65323c2c949663523f3b4d4f",
          tag: "p",
          html: "This is paragraph",
          imageUrl: "",
        },
        {
          _id: "65323c112213cbd5ed14ba0d",
          tag: "img",
          html: "This is paragraph<br>/<br>",
          imageUrl:
            "images/65323a2b1b66cca1e6648c21/lnycxp0vvkye01gjgw-Screenshot 2023-10-20 at 12.13.29 PM.png",
        },
        {
          _id: "65323c26d37afcfc2343c2b9",
          tag: "p",
          html: "",
          imageUrl: "",
        },
      ],
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
