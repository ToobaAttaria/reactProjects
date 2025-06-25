import React, { useState, useEffect } from "react";
import winkPosTagger from "wink-pos-tagger"; // Import wink-pos-tagger

function POSTagging() {
  const [posTaggedWords, setPOSTaggedWords] = useState([]);
  const tagger = winkPosTagger(); // Initialize the tagger

  useEffect(() => {
    const dataElement = document.querySelector(".text-box");
    if (!dataElement) {
      alert("No text-box element found");
      return;
    }

    const text = dataElement.value; // Ensure using .value to get text content from textarea

    console.log("Extracted Text: ", text); // Log the extracted text for debugging

    // Ensure there's content to process
    if (!text.trim()) {
      console.log("No text content to process.");
      return;
    }

    // Use wink-pos-tagger to process the text
    const taggedWords = tagger.tagSentence(text);

    console.log("Tagged Words: ", taggedWords); // Log the tagged words for debugging

    // Update the state with the POS-tagged words
    setPOSTaggedWords(taggedWords);
  }, []); // This effect runs only once when the component mounts

  return (
    <div>
      <div className="pos-tagging-output">
        <h3>POS Tagging : </h3>
        {posTaggedWords.length > 0 ? (
          <div>
            {/* <h3>POS Tagged Words:</h3> */}
            <table className="table">
              <thead>
                <tr>
                  <th>Word</th>
                  <th>Tag</th>
                </tr>
              </thead>
              <tbody>
                {posTaggedWords.map((taggedWord, index) => (
                  <tr key={index}>
                    <td>{taggedWord.value}</td>
                    <td>{taggedWord.pos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No words were tagged.</p>
        )}
      </div>
    </div>
  );
  
  
}

export default POSTagging;
