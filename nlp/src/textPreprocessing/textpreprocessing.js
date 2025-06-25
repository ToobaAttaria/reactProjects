
import { useState } from "react";
import Tokenization from "../textPreprocessing/tokenization";
// import TextArea from "../textarea";
import Segmentation from "./segmentation";
import Stemming from "./stemming";
import RemoveStopWords from "./stopwords";
import Lemmatization from "./Lemmatization";
import POSTagging from "./postagging";

function TextPreprocessing({setData}) {

    // const [filteredText, setFilteredText] = useState(""); // Store the filtered text (stopwords removed)



    return (
        <>
            <div className="rightPanel">
                    <div className="Bar">
                        <div className="Box">
                            <button onClick= {()=>setData(<Tokenization/>)} >Tokenization</button>
                            </div>
                    </div>
                    <div className="Bar">
                        <div className="Box">
                            <button onClick={()=>setData(<Segmentation/>)}>Segmentation</button>
                            </div>
                    </div>
                    <div className="Bar">
                        <div className="Box">
                            <button onClick={()=>setData(<RemoveStopWords />)}>Stopwords removal</button>
                            </div>
                    </div>
                    <div className="Bar">
                        <div className="Box">
                            <button onClick={()=>setData(<Stemming />)}>Stemming</button>
                            </div>
                    </div>
                    <div className="Bar">
                        <div className="Box">
                            <button onClick={()=>setData(<Lemmatization />)} >Lemmatization</button>
                            </div>
                    </div>
                    <div className="Bar">
                        <div className="Box">
                            <button onClick={()=>setData(<POSTagging />)}>POS tagging</button>
                            </div>
                    </div>

               
            </div>

            
        </>
    );


}
export default TextPreprocessing;