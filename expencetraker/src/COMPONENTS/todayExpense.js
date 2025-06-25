import { X } from 'lucide-react';

export function calculateTodayTotal(formData) {
    const todayDate = new Date().toLocaleDateString("en-GB").replace(/\//g, "-");
    return formData
        .filter((item) => item.date === todayDate)
        .reduce((sum, item) => sum + Number(item.amount), 0);
}


function Today({ heading, formData,Price,setPrice }) {
    function getTodayDate() {
        return new Date().toLocaleDateString("en-GB").replace(/\//g, "-");
    }

    const todayDate = getTodayDate();
    const todayTransactions = formData.filter((item) => item.date === todayDate);
    const totalAmount = todayTransactions.reduce((sum, item) => sum + Number(item.amount), 0);

    setPrice(totalAmount);
    return (
        <>
            <div className="blurbackground">
                <div className="MainTodayWindow">
                    <div className="header flex">
                        <h1>{heading}</h1>
                        <button className="cancelBtn" title="Close">
                            <X size={20} />
                        </button>
                    </div>
                    <div className='summaryContainer'>
                        <div className='date'>
                            <span>Date : </span>
                            <span>{todayDate}</span>
                        </div>
                        <div className='details'>

                            {todayTransactions.length > 0 ? (

                                todayTransactions.map((item, index) => (
                                    <details className="detail" key={index}>
                                        <summary>{item.category} - {item.amount}</summary>
                                        <li><span>Date:</span>{item.date}</li>
                                        <li><span>Description:</span>{item.description}</li>
                                        <li><span>Amount:</span>{item.amount}</li>

                                    </details>
                                ))



                            ) : (
                                <p>No transactions for today.</p>
                            )}
                        </div>
                        <div className="flex">
                            <h1>Total Amount : </h1>
                            <p>{Price}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Today;
