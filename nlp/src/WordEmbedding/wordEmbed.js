import Word2VecComponent from "./word2vec";

function WordEmbedding({ setData }) {

    return (
        <>
            <div className="rightPanel">
                <div className="Bar">
                    <div className="Box">
                        <span onClick={() => setData(<Word2VecComponent/>)} > Word 2 Vec </span>
                    </div>
                </div>

               
            </div>
        </>
    );


}
export default WordEmbedding;