import React, { useState, useEffect } from "react";

function Frequency() {
  const [Frequency, setFrequency] = useState([]);

  useEffect(() => {
    const dataElement = document.querySelector(".text-box");
    if (!dataElement) {
      alert("No text-box element found");
      return;
    }

    const text = dataElement.value;

    console.log("Extracted Text: ", text);

    if (!text.trim()) {
      console.log("No text content to process.");
      return;
    }

    // Split the text into words, normalize, and filter out empty strings
    const words = text
      .toLowerCase()
      .match(/\b\w+\b/g) || []; // Matches words using regex

    // Count word frequencies
    const wordFrequencies = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});

    // Convert the object into an array for easier rendering
    const vocabArray = Object.entries(wordFrequencies).map(([word, count]) => ({
      word,
      count,
    }));

    console.log("Frequency: ", vocabArray);

    setFrequency(vocabArray);
  }, []);

  return (
    <div>
      <div className="Frequency-output">
        <h3> Frequency: </h3>
        {Frequency.length > 0 ? (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Word</th>
                  <th>Frequency</th>
                </tr>
              </thead>
              <tbody>
                {Frequency.map((vocab, index) => (
                  <tr key={index}>
                    <td>{vocab.word}</td>
                    <td>{vocab.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No Frequency data available.</p>
        )}
      </div>
    </div>
  );
}

export default Frequency;
