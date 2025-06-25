import React, { useState, useEffect } from "react";

function InverseDocumentFrequency() {
  const [idfData, setIDFData] = useState([]); // Declare state for storing inverse document frequency data

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

    documents.forEach((document) => {
      const wordsInDoc = new Set(document.toLowerCase().match(/\b\w+\b/g) || []);
      wordsInDoc.forEach((word) => {
        // Count the document frequency (DF)
        if (!wordDocFrequency[word]) {
          wordDocFrequency[word] = 0;
        }
        wordDocFrequency[word] += 1;
        uniqueWordsInDocuments.add(word); // Add word to unique words set
      });
    });

    // Calculate IDF for each unique word
    const idfArray = Array.from(uniqueWordsInDocuments).map((word) => {
      const df = wordDocFrequency[word] || 1; // Default to 1 to avoid division by zero
      const idfValue = Math.log(totalDocuments / df) + 1; // IDF formula
      return {
        word,
        idf: idfValue,
      };
    });

    // Update the parent state with IDF data
    setIDFData(idfArray);
  }, []); // Empty dependency array to run only once after initial render

  return (
    <div>
      <h3>Inverse Document Frequency : </h3>
      {idfData.length > 0 ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Word</th>
                <th>IDF</th>
              </tr>
            </thead>
            <tbody>
              {idfData.map((data, index) => (
                <tr key={index}>
                  <td>{data.word}</td>
                  <td>{typeof data.idf === "number" ? data.idf.toFixed(4) : "N/A"}</td> {/* Check if idf is a number */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No IDF data available.</p>
      )}
    </div>
  );
}

export default InverseDocumentFrequency;
