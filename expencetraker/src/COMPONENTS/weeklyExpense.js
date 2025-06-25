import { useEffect } from "react";
import { X } from "lucide-react";

export function calculateWeeklyTotal(formData) {
    const today = new Date();
    today.setHours(23, 59, 59, 999); // End of today

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(today.getDate() - 7);
    oneWeekAgo.setHours(0, 0, 0, 0); // Start of 7 days ago

    return formData
        .filter((item) => {
            const itemDate = new Date(item.date.split("-").reverse().join("-"));
            return itemDate >= oneWeekAgo && itemDate <= today;
        })
        .reduce((sum, item) => sum + Number(item.amount), 0);
}



function Weekly({ heading, formData, Price, setPrice }) {

    function getLast7DaysRange() {
        const today = new Date();
        const lastWeek = new Date();
        lastWeek.setDate(today.getDate() - 7); 

        const formatDate = (date) => date.toLocaleDateString("en-GB").replace(/\//g, "-");

        return {
            start: formatDate(lastWeek),
            end: formatDate(today),
        };
    }

    const { start, end } = getLast7DaysRange();

    const weeklyTransactions = formData.filter((item) => {
        const itemDate = new Date(item.date.split("-").reverse().join("-"));
        return itemDate >= new Date(start.split("-").reverse().join("-")) &&
               itemDate <= new Date(end.split("-").reverse().join("-"));
    });

    useEffect(() => {
        const totalAmount = weeklyTransactions.reduce((sum, item) => sum + Number(item.amount), 0);
        setPrice(totalAmount);
    }, [weeklyTransactions]); 

    return (
        <div className="blurbackground">
            <div className="MainWeeklyWindow">
                <div className="header flex">
                    <h1>{heading}</h1>
                    <button className="cancelBtn" title="Close">
                        <X size={20} />
                    </button>
                </div>
                <div className="summaryContainer">
                    <div className="date">
                        <span>{start} - {end}</span>
                    </div>
                    <div className="details">
                        {weeklyTransactions.length > 0 ? (
                            weeklyTransactions.map((item, index) => (
                                <details className="detail" key={index}>
                                    <summary>{item.category} - {item.amount}</summary>
                                    <li><span>Date:</span> {item.date}</li>
                                    <li><span>Description:</span> {item.description}</li>
                                    <li><span>Amount:</span> {item.amount}</li>

                                </details>
                            ))
                        ) : (
                            <p>No transactions in the last 7 days.</p>
                        )}
                    </div>
                    <div className="flex">
                        <h1>Total Amount : </h1>
                        <p>{Price} $</p> {/* ✅ Ensure price is shown */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weekly;
