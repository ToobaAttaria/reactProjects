
import { useState, useEffect } from "react";

function RemoveStopWords() {
  const [filteredText, setFilteredText] = useState("");

  // List of common English stopwords
  const stopwords = [
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
  ];

  useEffect(() => {
    const dataElement = document.querySelector(".text-box");
    if (dataElement) {
      const text = dataElement.value;

      // Split the text into words and filter out stopwords
      const filtered = text
        .split(" ") // Split the text into words
        .filter((word) => !stopwords.includes(word.toLowerCase())) // Remove stopwords
        .join(" "); // Join the words back into a sentence

      setFilteredText(filtered); // Update the state with the filtered text
    }
  }, []); // Effect runs once on mount

    return (
        <div>
           <h3 className="Words">Stop Words :</h3>
            <div className="filtered-text"> 
                {filteredText ? (
                    <div>{filteredText}</div>
                ) : (
                    <p>No text to process</p>
                )}
            </div>
        </div>
    );
}

export default RemoveStopWords;
