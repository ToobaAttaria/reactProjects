import React, { useState, useEffect } from "react";

function UniqueVocabulary() {
  const [uniqueWords, setUniqueWords] = useState([]);

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

    // Extract unique words
    const words = text
      .toLowerCase()
      .match(/\b\w+\b/g) || []; // Matches words using regex

    const uniqueWordsArray = [...new Set(words)]; // Get unique words using Set

    console.log("Unique Words: ", uniqueWordsArray);

    setUniqueWords(uniqueWordsArray);
  }, []);

  return (
    <div>
      <div>
        <h3>Unique Vocabulary:</h3>
        {uniqueWords.length > 0 ? (
          <div className="tokens">
            {uniqueWords.map((word, index) => (
              <div key={index} className="token">
                {word}
              </div>
            ))}
          </div>
        ) : (
          <p>No unique words available</p>
        )}
      </div>
    </div>
  );
}


export default UniqueVocabulary;
