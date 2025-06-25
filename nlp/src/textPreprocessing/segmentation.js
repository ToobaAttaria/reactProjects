import { useState, useEffect } from "react";

function Segmentation() {
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    const dataElement = document.querySelector(".text-box");
    if (dataElement) {
      const text = dataElement.value;

      // Segment text into sentences using regex
      const segmented = text.match(/[^.!?]+[.!?]["']?|[^.!?]+(?:,|\band\b|\bor\b|\bbut\b)[^.!?]+/gi) || [];
      setSegments(segmented);
    }
  }, []);

  return (
    <div>
      <div>
      <h3 className="Words">Segmentation :</h3>
      {/* <h3>Segmentation :</h3> */}
        {segments.length > 0 ? (
          <div className="segments">
            {segments.map((segment, index) => (
              <div key={index} className="segment">
                {segment}
              </div>
            ))}
          </div>
        ) : (
          <p>No segments available</p>
        )}
      </div>
    </div>
  );
}

export default Segmentation;
