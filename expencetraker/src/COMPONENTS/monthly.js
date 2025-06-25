import { useEffect } from "react";
import { X } from "lucide-react";

export function calculateMonthlyTotal(formData) {
    const today = new Date();
    const currentMonth = today.getMonth(); // 0-based index
    const currentYear = today.getFullYear();

    return formData
        .filter((item) => {
            if (!item.date) return false;

            const parts = item.date.split("-"); // ["15", "01", "2025"]
            const itemDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
            const itemMonth = itemDate.getMonth();
            const itemYear = itemDate.getFullYear();

            // ✅ Current month ya pichla month allow karne ke liye:
            const match = 
                (itemMonth === currentMonth && itemYear === currentYear) ||  // Current month
                (itemMonth === currentMonth - 1 && itemYear === currentYear); // Pichla month

            return match;
        })
        .reduce((sum, item) => sum + Number(item.amount), 0);
}





function Monthly({ heading, formData, Price, setPrice }) {
    const today = new Date();
    today.setHours(23, 59, 59, 999); // Ensure full day inclusion

    const last30Days = new Date();
    last30Days.setDate(today.getDate() - 30);
    last30Days.setHours(0, 0, 0, 0); // Ensure exact start time

    useEffect(() => {
        const totalAmount = formData
            .filter((item) => {
                const itemDate = new Date(item.date.split("-").reverse().join("-"));
                return itemDate >= last30Days && itemDate <= today;
            })
            .reduce((sum, item) => sum + Number(item.amount), 0);

        setPrice(totalAmount);
    }, [formData]); // 🔥 Dependency fix

    const formatDate = (date) => date.toLocaleDateString("en-GB").split("/").join("-");

    const last30DaysTransactions = formData.filter((item) => {
        const itemDate = new Date(item.date.split("-").reverse().join("-"));
        return itemDate >= last30Days && itemDate <= today;
    });

    return (
        <div className="blurbackground">
            <div className="MainMonthlyWindow">
                <div className="header flex">
                    <h1>{heading}</h1>
                    <button className="cancelBtn" title="Close">
                        <X size={20} />
                    </button>
                </div>
                <div className="summaryContainer">
                    <div className="date">
                        <span>{formatDate(last30Days)} - {formatDate(today)}</span>
                    </div>
                    <div className="details">
                        {last30DaysTransactions.length > 0 ? (
                            last30DaysTransactions.map((item, index) => (
                                <details className="detail" key={index}>
                                    <summary>{item.category} - {item.amount} </summary>
                                    <li><span>Date:</span> {item.date}</li>
                                    <li><span>Description:</span> {item.description}</li>
                                    <li><span>Amount:</span> {item.amount} </li>
                                </details>
                            ))
                        ) : (
                            <p>No transactions in the last 30 days.</p>
                        )}
                    </div>
                    <div className="flex">
                        <h1>Total Amount : </h1>
                        <p>{Price} $</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Monthly;
