import { X } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';
function NewExpense({ heading, setWindow, showCategory, formData, setFormData, selectedTransaction }) {

    // let category, amount, date,description;

    // const addTransaction = () => {

    //     if (!category.value || !amount.value || !date.value) return;

    //     setFormData([...formData, {
    //       category: category.value,
    //       amount: amount.value,
    //       date: date.value,
    //       description:description.value
    //     }]);

    //     category.value = "";
    //     amount.value = "";
    //     date.value = ""; 
    //     description.value="";
    //     // setWindow(null);  
    //   };

    const [Category, setCategory] = useState("");
    const [Description, setDescription] = useState("");
    const [Date, setDate] = useState("");
    const [Amount, setAmount] = useState("");

    const [isValid, setIsValid] = useState("");

    useEffect(() => {
        if (selectedTransaction) {
            setCategory(selectedTransaction.category || "");
            setDescription(selectedTransaction.description || "");
            setDate(selectedTransaction.date || "");
            setAmount(selectedTransaction.amount || "");

        }
    }, [selectedTransaction]);


    function addTransaction() {


        if (selectedTransaction && (Category && Description && Date && Amount)) {
            setWindow(false);
        }
        


        if (!Category || !Description || !Date || !Amount) {
            setIsValid(false);
            setIsValid("alert")
            setTimeout(() => {
                setIsValid("")
            }, 2000);


            return;
        };

        const newExpense = {
            category: Category,
            description: Description,
            date: Date,
            amount: Amount,
        };
        setFormData([...formData, newExpense]);

        setCategory("");
        setDescription("");
        setDate("");
        setAmount("");

        setIsValid("Submit")
        setTimeout(() => {
            setIsValid("")
        }, 2000);
    }
    const dateChange = (e) => {
        const inputDate = e.target.value;
        const [year, month, day] = inputDate.split("-");
        const formattedDate = `${day}-${month}-${year}`;
        setDate(formattedDate);
    };

    return (
        <>
            <div className="blurbackground">
                <div className="MainExpenseWindow">
                    <div className="header flex">
                        <h1>{heading || "Edit Expense"}</h1>


                        {isValid === "alert" && <h2 className="alert">Please fill all fields!</h2>}
                        {isValid === "Submit" && <h2 className="Submit">Expense Added Successfully!</h2>}

                        {!selectedTransaction ? (
                            <button className="cancelBtn" title="Close">
                                <X size={20} />
                            </button>
                        ) : null}
                        {console.log("Heading:", heading)}




                    </div>
                    <div className="expenseForm">

                        <label htmlFor="date" className="formLabel">Date </label>
                        <input
                            id="date"
                            type="date"
                            className="expenseInput"
                            name="date"
                            // ref={(e) => (date = e)}
                            value={Date}
                            onChange={dateChange}


                        />

                        <label htmlFor="description" className="formLabel">Description</label>
                        <textarea
                            id="description"
                            className="expenseInput"
                            name="description"
                            // ref={(e) => (description = e)}
                            value={Description}
                            onChange={(e) => setDescription(e.target.value)}

                        ></textarea>

                        <label htmlFor="amount" className="formLabel">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            className="expenseInput"
                            name="amount"
                            // ref={(e) => (amount = e)}
                            value={Amount}
                            onChange={(e) => setAmount(e.target.value)}

                        />

                        <label htmlFor="category" className="formLabel">Category</label>
                        <select
                            id="category"
                            className="expenseInput"
                            name="category"
                            // ref={(e) => (category = e)}
                            value={Category}
                            onChange={(e) => setCategory(e.target.value)}

                        >
                            <option value="" disabled>Select a category</option>
                            {showCategory.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>

                        <div className='btnContainer'>
                            <button onClick={addTransaction}
                                className='SaveExpense'
                                title="Save"
                            >
                                Save</button>
                            <button
                                className='ClearExpense'
                                onClick={() => {
                                    setCategory("");
                                    setDescription("");
                                    setDate("");
                                    setAmount("");
                                }}
                                title="Clear"
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default NewExpense;
