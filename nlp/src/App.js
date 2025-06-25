import './App.css';
import { useState } from 'react';
import Header from './header';
import TextArea from './textarea';
import TextPreprocessing from "./textPreprocessing/textpreprocessing";

function App() {
  const [data, setData] = useState(null)
  const [list, setList] = useState(<TextPreprocessing setData={setData} data={data} />);
  
  return (
    <>
      <Header setList={setList} setData={setData} data={data} />
      <div className="body flex">
        <TextArea data={data} setData={setData} />
        <>{list}</>

      </div>


    </>
  );
}

export default App;

