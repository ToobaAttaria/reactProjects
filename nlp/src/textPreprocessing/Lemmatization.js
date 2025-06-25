import React, { useState } from "react";
import nlp from 'compromise';

// Define stopwords as you did before...
const stopwords = new Set([
  "i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours",
  "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs",
  "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being",
  "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until",
  "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below",
  "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where",
  "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so",
  "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now", "d", "ll", "m", "o", "re", "ve", "y", "ain", "aren", "couldn",
  "didn", "doesn", "hadn", "hasn", "haven", "isn", "ma", "mightn", "mustn", "needn", "shan", "shouldn", "wasn", "weren", "won", "wouldn"
]);

function Lemmatization() {
  const dataElement = document.querySelector(".text-box"); // Get the text-box element
  if (!dataElement) {
    return <div>No text-box element found</div>; // Handle case where text-box is missing
  }

  const text = dataElement.value; // Get the text from the text-box
  const tokens = text.split(/\s+/); // Split text into words

  // Remove stopwords
  const filteredTokens = tokens.filter((word) => !stopwords.has(word.toLowerCase()));

  // Perform lemmatization on the filtered tokens
  const lemmatizedTokens = filteredTokens
    .map((word) => {
      const doc = nlp(word); // Use compromise to process the word
      // Check if it's a verb or noun and apply lemmatization
      const lemmatized = doc.verbs().toInfinitive().out('text') || doc.nouns().toSingular().out('text') || word;
      return { original: word, lemmatized };
    })
    .filter((token) => token.original !== token.lemmatized); // Only keep tokens that were lemmatized

  return (
    <div className="lemmatization-output">
       <h3>Lemmatization : </h3>
      {lemmatizedTokens.length > 0 ? (
        <div>
         
          <div className="cards">
            {lemmatizedTokens.map((token, index) => (
              <div className="card" key={index}>
                <p>
                  <strong>Original:</strong> {token.original}
                </p>
                <p>
                  <strong>Lemmatized:</strong> {token.lemmatized}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No words were lemmatized.</p> // Message for when no words are lemmatized
      )}
    </div>
  );
}

export default Lemmatization;
