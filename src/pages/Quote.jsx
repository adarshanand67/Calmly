import axios from "axios";
import React, { useEffect, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
import Spinners from "../components/Spinners";

import "../styles/Quote.css";

const Quote = () => {
  const [data, setData] = useState([]);
  const [randomData, setRandomData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const API = "https://type.fit/api/quotes";
      const result = await axios(API);
      setData(result.data);
      setRandomData(
        result.data[Math.floor(Math.random() * result.data.length)]
      );
      setLoading(false);
    };
    fetchData();
  }, []);

  const playSound = () => {
    // console.log("play sound");
    let utterance = new SpeechSynthesisUtterance(randomData.text);
    utterance.rate = 1.5;
    utterance.volume = 1.5;
    toast.success("Playing quote");
    speechSynthesis.speak(utterance);
  };

  const copyQuote = () => {
    // console.log("copy quote");
    let text = randomData.text;
    navigator.clipboard.writeText(text);
    toast.success("Quote copied to clipboard");
  };

  const tweetQuote = () => {
    // console.log("tweet quote");
    let tweetUrl = `https://twitter.com/intent/tweet?url=${randomData.text}`;
    toast.success("Tweeting quote");
    window.open(tweetUrl, "_blank");
  };

  if (loading) return <Spinners />;

  return (
    <div className="quote-box">
      <div className="wrapper">
        <header>"Quote of the Day"</header>
        <div className="content">
          <div className="quote-area">
            <i className="fas fa-quote-left" />
            <p className="quote">{randomData.text}</p>
            <i className="fas fa-quote-right" />
          </div>
          <div className="author">
            <span>__</span>
            <span className="name">{randomData.author}</span>
          </div>
        </div>
        <div className="buttons">
          <div className="buttons">
            <div className="features">
              <ul>
                <li className="sound" onClick={playSound}>
                  <i className="fas fa-volume-up" />
                </li>
                <li className="copy" onClick={copyQuote}>
                  <i className="fas fa-copy" />
                </li>
                <li className="twitter" onClick={tweetQuote}>
                  <i className="fab fa-twitter" />
                </li>
              </ul>
              <button
                onClick={() => {
                  setRandomData(data[Math.floor(Math.random() * data.length)]);
                  toast.info("Generating new quote", {
                    position: "top-center",
                    autoClose: 2000,
                  });
                }}
              >
                Generate Random Quote
              </button>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Quote;
