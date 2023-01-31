import React, { useEffect, useState } from "react";
import { Card } from "../exportComponetns";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

export default function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          obcaecati eum dolor vero necessitatibus odit! Nisi pariatur similique
          tempore nostrum delectus maxime ipsam laborum qui iusto minus nobis
          provident quis voluptates facere voluptas vitae numquam, rem nam!
          Incidunt sint deleniti molestiae tempore nobis alias ea rem architecto
          beatae voluptas. Qui.
        </p>
      </div>
      <div className="bottom">
        {error ? "Something went wrong !":(loading
          ? "Loading..."
          : data?.map((item, key) => {
              return <Card item={item} key={key} />;
            }))}
      </div>
    </div>
  );
}

// const data = [
//   {
//     id: 1,
//     img: "https://m.media-amazon.com/images/I/81PuKheA8xL.jpg",
//     title: "Rich Dad Poor Dad",
//     isNew: true,
//     oldPrice: 19,
//     price: 12,
//   },
//   {
//     id: 2,
//     img: "https://sanadbooks.com/images/detailed/41/speak-to-everyone-attraction-patrick-king-dawen.jpg",
//     title: "Improve Your Conversations",
//     isNew: true,
//     oldPrice: 25,
//     price: 21,
//   },
//   {
//     id: 3,
//     img: "https://sanadbooks.com/images/detailed/21/9789921767001.jpg",
//     title: "Pyschology Of Money",
//     oldPrice: 15,
//     price: 10,
//   },
//   {
//     id: 4,
//     img: "https://sanadbooks.com/images/detailed/18/6281072052904.jpg",
//     title: "Secrets Of The Millionaire Mind",
//     oldPrice: 20,
//     price: 16,
//   },
// ];
