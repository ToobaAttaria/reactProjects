

import realTimeTransaction from '../images/realTimeTransaction.jpg'
import seamlessIntegration from '../images/seamlessIntegration.jpg'
import multiCurrencySupport from '../images/multiCurrencySupport.jpg'
import recentTransactions from '../images/recentTransactions.jpg'


export default function FinancialJourney() {
    return (
        <>
            <div className='whiteSection'>
                <div className="FinancialJourney-header">
                    <h2>Empower Your Financial Journey With Seamless Solutions</h2>
                    <p>Explore our powerful features for seamless payments.</p>
                </div>
                <div className="FinancialJourney-imagesContainer">
                    <div style={{ backgroundColor: "#ECFAFA"}}>
                        <img  src={realTimeTransaction} ></img>
                        <h2>Real-time Transaction</h2>
                        <p>Enjoy the convenience of sending money globally in seconds.</p>
                    </div>
                    <div style={{ backgroundColor: "#ECF2F9"}}>
                        <img src={seamlessIntegration} ></img>
                        <h2>Seamless Integration</h2>
                        <p>Seamlessly integrate with your favorite apps and platforms.</p>

                    </div>
                    <div style={{ backgroundColor: "#EAF9EF"}}>
                        <img src={multiCurrencySupport} ></img>
                        <h2> Multi-Currency Support</h2>
                        <p>Our apps allows you to transact in various currencies effortlessly.</p>
                    </div>
                    <div style={{ backgroundColor: "#FFF4EB"}}>
                        <img src={recentTransactions} ></img>
                        <h2>User-Friendly Interface</h2>
                        <p>Zenpay is Designed with you in mind, featuring an intutive interface.</p>

                    </div>

                </div>
            </div>
        </>
    );
}