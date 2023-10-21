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
      icon: "data:image/png;base64,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",
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
