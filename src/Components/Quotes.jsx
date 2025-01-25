import React, { useState, useEffect } from "react";

function Quotes() {
  const [quote, setQuote] = useState("");

  const quotes = [
    "A father is someone you look up to no matter how tall you grow.",
    "Dad, you’re my hero and my inspiration.",
    "Thank you for always being there for me, Dad!",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="my-4">
      <h2 className="h4">Quote for You:</h2>
      <p className="fst-italic mt-2 text-white">"{quote}"</p>
    </div>
  );
}

export default Quotes;
