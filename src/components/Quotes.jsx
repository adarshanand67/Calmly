import axios from "axios";
import React, { useEffect, useState } from "react";

const Quotes = () => {
  // const API = "https://zenquotes.io/api/random";
  const API = "https://type.fit/api/quotes";
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch(API)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setQuote(data[0].q);
    //     setAuthor(data[0].a);
    //   });
    const fetchData = async () => {
      const result = await axios(API);
      setData(result.data);
    };
    fetchData();
  }, []);

  // console.log(quote, author);

  return (
    <div className="carousel-center carousel rounded-box">
      {data.map((item, index) => {
        return (
          <div key={index} className="carousel-item">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center text-2xl font-bold">{item.text}</h1>
              <p className="text-center">{item.author}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Quotes;
