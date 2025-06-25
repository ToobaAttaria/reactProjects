import React, { useState, useEffect } from "react";

function TermFrequency() {
  const [tfData, setTFData] = useState([]); // Declare state for storing term frequency data

  useEffect(() => {
    const tfDataElement = document.querySelector(".text-box");
    if (!tfDataElement) {
      alert("No text-box element found.");
      return;
    }

    const text = tfDataElement.value;

    if (!text.trim()) {
      console.log("No text content to process.");
      return;
    }

    // Split the input text into words
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const totalWords = words.length;
    const wordCounts = {};

    // Calculate word frequency
    words.forEach((word) => {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    // Calculate TF for each word
    const tfArray = Object.entries(wordCounts).map(([word, count]) => ({
      word,
      tf: (count / totalWords).toFixed(4), // TF formula rounded to 4 decimals
    }));

    // Update the parent state with TF data
    setTFData(tfArray);
  }, []); // Empty dependency array to run only once after initial render

  return (
    <div>
      <h3>Term Frequency : </h3>
      {tfData.length > 0 ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Word</th>
                <th>TF</th>
              </tr>
            </thead>
            <tbody>
              {tfData.map((data, index) => (
                <tr key={index}>
                  <td>{data.word}</td>
                  <td>{data.tf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No TF data available.</p>
      )}
    </div>
  );
}

export default TermFrequency;
