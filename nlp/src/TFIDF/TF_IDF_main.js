import React, { useState, useEffect } from "react";

import InverseDocumentFrequency from "./idf";
import TermFrequency from "./tf";
import  TFIDF  from "./tfidf";

function IDF({ data , setData }) {
    return (
        <>
            <div className="rightPanel">
                <div className="Bar">
                    <div className="Box">
                        <span onClick={() => setData(<TermFrequency />)} >T F</span>
                    </div>
                </div>

                <div className="Bar">
                    <div className="Box">
                        <span onClick={() => setData(<InverseDocumentFrequency  />)}>I D F</span>
                    </div>
                </div>

                <div className="Bar">
                    <div className="Box">
                        <span onClick={() => setData(<TFIDF />)}> T F - I D F </span>
                    </div>

                </div>

            </div>
        </>
    );


}
export default IDF;