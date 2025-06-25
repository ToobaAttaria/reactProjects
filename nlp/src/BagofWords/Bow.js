import RemoveStopWords from "../textPreprocessing/stopwords";
import Tokenization from "../textPreprocessing/tokenization";
import Frequency from "./frequency";
import UniqueVocabulary from "./vocabulary";
// import Frequency from "./vocabulary";
// import Vocabulary from "./vocabulary";
function BOW({setData}) {

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
                            <span onClick= {()=>setData(<RemoveStopWords/>)}>Stop Words Removal</span>
                            </div>
                    </div>
                    <div className="Bar">
                        <div className="Box">
                            <span onClick= {()=>setData(<UniqueVocabulary/>)}>Vocabulary</span>
                            </div>
                    </div>
                    <div className="Bar">
                        <div className="Box">
                            <span onClick= {()=>setData(<Frequency/>)}>Frequency</span>
                            </div>
                    </div>
                    

               
            </div>
        </>
    );


}
export default BOW;