import React, { useState } from "react";
import TextPreprocessing from "./textPreprocessing/textpreprocessing";
import IDF from "./TFIDF/TF_IDF_main";
import BOW from "./BagofWords/Bow";
import WordEmbedding from "./WordEmbedding/wordEmbed";
// import wordEmbedding from "./WordEmbedding/wordEmbed";

// import wordEmbedding from "./WordEmbedding/wordEmbed"
function Header({ setList, setData, data }) {

  const [activeButton, setActiveButton] = useState("TextPreprocessing");
  const ButtonClick = (component, buttonName) => {
    setList(component);
    setActiveButton(buttonName);
  };

  return (
    <div className="header flex">
      <span>NLP</span>
      <div className="HeaderOptions">
        <button
          className={`preprocessing-btn btn ${activeButton === "TextPreprocessing" ? "active" : ""}`}
          onClick={() => ButtonClick(<TextPreprocessing setData={setData} data={data} />, "TextPreprocessing")}
        >
          Text Preprocessing
        </button>
        <button
          className={`IDF-btn btn ${activeButton === "IDF" ? "active" : ""}`}
          onClick={() => ButtonClick(<IDF data={data} setData={setData} />, "IDF")}
        >
          IDF-TF
        </button>
        <button
          className={`BOW-btn btn ${activeButton === "BOW" ? "active" : ""}`}
          onClick={() => ButtonClick(<BOW setData={setData} />, "BOW")}
        >
          BOW
        </button>
        <button
          className={`Word-Embedding btn ${activeButton === "WordEmbedding" ? "active" : ""}`}
          onClick={() => ButtonClick(<WordEmbedding setData={setData} />, "WordEmbedding")}

        >
          Word Embedding
        </button>
        <button
          className={`Translator-btn btn ${activeButton === "Translator" ? "active" : ""}`}
        >
          Translator
        </button>
      </div>
    </div>
  );
}

export default Header;
