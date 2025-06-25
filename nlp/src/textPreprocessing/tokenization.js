import { useState, useEffect } from "react";

function Tokenization() {
  const [tokens, setTokens] = useState([]);
  useEffect(() => {
    const dataElement = document.querySelector(".text-box");
    if (dataElement) {
      const text = dataElement.value; 
      const tokenized = text.match(/\b\w+\b/g) || []; 
      setTokens(tokenized); 
    }
  }, []); 

  return (
    <div>
      <div>
        <h3>Tokenization :</h3>
        {tokens.length > 0 ? (
          <div className="tokens">
            {tokens.map((token, index) => (
              <div key={index} className="token">
                {token}
              </div>
            ))}
          </div>
        ) : (
          <p>No tokens available</p>
        )}
      </div>
    </div>
  );
}

export default Tokenization;
