import { useState } from "react";

function TextArea({ data, setData }) {

    const handleProcessText = () => {
        const textArea = document.querySelector(".text-box");
        if (textArea) {
          setData(textArea.value); 
        }
      };

  const handleClear = () => {
    document.querySelector(".text-box").value = " ";
    setData(""); 
    data=" ";
  };

  return (
    <div className="outer-text-box">
      <div className="inner-text-box">
        <p>Enter Text Here: </p>
        <div className="textBox-submitBtn">
          <textarea
            onChange={handleProcessText}
            className="text-box"
          ></textarea>
          <button className="clear" onClick={handleClear}>Clear</button>
        </div>
        <div className="display">
          <p>{data}</p> 
        </div>
      </div>
    </div>
  );
}

export default TextArea;
