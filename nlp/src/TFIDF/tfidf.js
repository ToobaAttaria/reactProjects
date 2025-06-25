import React, { useState, useEffect } from "react";

function TFIDF() {
  const [tfidfData, setTFIDFData] = useState([]); // Declare state for storing TF-IDF data

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
    const totalDocuments = documents.length;
    const wordDocFrequency = {}; // To store document frequency for each word
    const uniqueWordsInDocuments = new Set(); // To store unique words across all documents

    // Calculate document frequency (DF)
    documents.forEach((document) => {
      const wordsInDoc = new Set(document.toLowerCase().match(/\b\w+\b/g) || []);
      wordsInDoc.forEach((word) => {
        if (!wordDocFrequency[word]) {
          wordDocFrequency[word] = 0;
        }
        wordDocFrequency[word] += 1;
        uniqueWordsInDocuments.add(word); // Add word to unique words set
      });
    });

    // Calculate TF-IDF for each unique word
    const tfidfArray = Array.from(uniqueWordsInDocuments).map((word) => {
      const df = wordDocFrequency[word] || 1; // Default to 1 to avoid division by zero
      const idfValue = Math.log(totalDocuments / df) + 1; // IDF formula
      const tfidfValue = documents.reduce((acc, document) => {
        const wordsInDoc = document.toLowerCase().match(/\b\w+\b/g) || [];
        const wordCount = wordsInDoc.filter(w => w === word).length;
        const totalWordsInDoc = wordsInDoc.length;
        // Avoid division by zero in TF calculation
        return acc + (wordCount / totalWordsInDoc || 0);
      }, 0) / totalDocuments; // Calculate TF and multiply by IDF

      const tfidfFinal = (idfValue * tfidfValue).toFixed(4); // TF-IDF value rounded to 4 decimals

      // Avoid NaN values
      return {
        word,
        tfidf: isNaN(tfidfFinal) ? '0.0000' : tfidfFinal, // Handle NaN values
      };
    });

    // Update the parent state with TF-IDF data
    setTFIDFData(tfidfArray);
  }, []); // Empty dependency array to run only once after initial render

  return (
    <div>
      <h3>TF-IDF : </h3>
      {tfidfData.length > 0 ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Word</th>
                <th>TF-IDF</th>
              </tr>
            </thead>
            <tbody>
              {tfidfData.map((data, index) => (
                <tr key={index}>
                  <td>{data.word}</td>
                  <td>{data.tfidf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No TF-IDF data available.</p>
      )}
    </div>
  );
}

export default TFIDF;
