import MCard from "../../components/mCard";
import styles from "./styles.module.scss";
// import Notion from'./notion';

import React from "react";

const Marketplace = () => {
  const openaNewPage = () => {
    const { Client } = require('@notionhq/client');

    const notion = new Client({ auth: "secret_iuprYvnc0DS4Up4iJiSvYMaRZIrTiJtLMiisCJvTDPE"});

    (async () => {
      const response = await notion.pages.create({
        "cover": {
            "type": "external",
            "external": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
            }
        },
        "icon": {
            "type": "emoji",
            "emoji": "🥬"
        },
        "parent": {
            "type": "database_id",
            "database_id": "edae0d59b8e4433b87fdac5c3cca0b4f"
        },
        "properties": {
            "Name": {
                "title": [
                    {
                        "text": {
                            "content": "Hello World"
                        }
                    }
                ]
            },
            
        },
        "children": [
            {
                "object": "block",
                "heading_2": {
                    "rich_text": [
                        {
                            "text": {
                                "content": "Lacinato kale"
                            }
                        }
                    ]
                }
            },
            {
                "object": "block",
                "paragraph": {
                    "rich_text": [
                        {
                            "text": {
                                "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                                "link": {
                                    "url": "https://en.wikipedia.org/wiki/Lacinato_kale"
                                }
                            },
                            "href": "https://en.wikipedia.org/wiki/Lacinato_kale"
                        }
                    ],
                    "color": "default"
                }
            }
        ]
    });
      console.log(response);
    })();
  }
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
    <div>
      <button className={styles.button} onClick={openaNewPage}>Create a Notion Page</button>
      <div className={styles.cards}>
        {data.map((card) => (
          <MCard data={card} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
