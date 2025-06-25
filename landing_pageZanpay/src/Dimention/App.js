import './App.css';
import Header from './components/header';
import MainSection from './components/mainSection';
import FinancialJourney from './components/financialJourney';
import CustomerStories from './components/customerstories';
function App() {
  return (
    <div className="App">
      <div className='upperContainer'>
        <Header />
        <MainSection />
      </div>
      <div>
        <FinancialJourney />
        <CustomerStories/>
      </div>
    </div>
  );
}

export default App;
