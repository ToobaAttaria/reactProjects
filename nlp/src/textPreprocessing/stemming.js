import { stemmer } from "stemmer";
import React from "react";

// Define a set of stopwords
const stopwords = new Set([
  "i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", 
    "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", 
    "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", 
    "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", 
    "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", 
    "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", 
    "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", 
    "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", 
    "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", 
    "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", 
    "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", 
    "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now", "d", 
    "ll", "m", "o", "re", "ve", "y", "ain", "aren", "couldn", "didn", "doesn", "hadn", 
    "hasn", "haven", "isn", "ma", "mightn", "mustn", "needn", "shan", "shouldn", "wasn", 
    "weren", "won", "wouldn"
]);

function Stemming() {
  const dataElement = document.querySelector(".text-box"); // Get the text-box element
  if (!dataElement) {
    return <div>No text-box element found</div>; // Handle case where text-box is missing
  }

  const text = dataElement.value; // Get the text from the text-box
  const tokens = text.split(/\s+/); // Split text into words

  // Remove stopwords
  const filteredTokens = tokens.filter((word) => !stopwords.has(word.toLowerCase()));

  // Perform stemming on the filtered tokens
  const stemmedTokens = filteredTokens
    .map((word) => {
      const stemmed = stemmer(word);
      return { original: word, stemmed };
    })
    .filter((token) => token.original !== token.stemmed); // Only keep tokens that were stemmed

  return (
    <div className="stemming-output">
      <h3>Stemming : </h3>
      {stemmedTokens.length > 0 ? (
        <div>
          <div className="cards">
            {stemmedTokens.map((token, index) => (
              <div className="card" key={index}>
                <p>
                  <strong>Original:</strong> {token.original}
                </p>
                <p>
                  <strong>Stemmed:</strong> {token.stemmed}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No words were stemmed.</p> // Message for when no words are stemmed
      )}
    </div>
  );
}

export default Stemming;
