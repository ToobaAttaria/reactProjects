import React, { useState, useEffect } from "react";

function Word2VecComponent() {
  const [wordVectors, setWordVectors] = useState([]); // State for storing word vectors

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

    // Split the input text into documents by a delimiter (e.g., new line "\n")
    const documents = text.split("\n").map(doc => doc.trim()).filter(doc => doc.length > 0);

    // Build a vocabulary and co-occurrence matrix
    const vocabulary = new Set();
    const coOccurrenceMatrix = {};

    documents.forEach((document) => {
      const words = document.toLowerCase().match(/\b\w+\b/g) || [];
      words.forEach((word, index) => {
        vocabulary.add(word);
        if (!coOccurrenceMatrix[word]) {
          coOccurrenceMatrix[word] = {};
        }
        // Count co-occurrences within a small context window (e.g., 2 words)
        const contextWindow = 2;
        for (let i = Math.max(0, index - contextWindow); i <= Math.min(words.length - 1, index + contextWindow); i++) {
          if (i !== index) {
            const contextWord = words[i];
            if (!coOccurrenceMatrix[word][contextWord]) {
              coOccurrenceMatrix[word][contextWord] = 0;
            }
            coOccurrenceMatrix[word][contextWord] += 1;
          }
        }
      });
    });

    // Convert the co-occurrence matrix to word vectors
    const wordVectorArray = Array.from(vocabulary).map((word) => {
      const vector = coOccurrenceMatrix[word] || {};
      return {
        word,
        vector,
      };
    });

    setWordVectors(wordVectorArray);
  }, []); // Empty dependency array to run only once after initial render

  return (
    <div>
      <h3>Word2Vec  : </h3>
      {wordVectors.length > 0 ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Word</th>
                <th>Vector</th>
              </tr>
            </thead>
            <tbody>
              {wordVectors.map((data, index) => (
                <tr key={index}>
                  <td>{data.word}</td>
                  <td>
                    {Object.entries(data.vector)
                      .map(([contextWord, count]) => `${contextWord}: ${count}`)
                      .join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No Word2Vec data available.</p>
      )}
    </div>
  );
}

export default Word2VecComponent;
