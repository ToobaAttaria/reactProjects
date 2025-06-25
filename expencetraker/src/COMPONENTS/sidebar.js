import {  useEffect } from "react";
import NewExpense from "./newexpence";
import NewCategory from "./newcategory";

export default function SideBar({window,setShowCategory,setWindow,showCategory,formData,setFormData}) {
  
    useEffect(() => {
        function handleClick() {
            setWindow(null);  
        }
        const buttons = document.querySelectorAll(".cancelBtn");
        buttons.forEach((btn) => btn.addEventListener("click", handleClick));

        return () => {
            buttons.forEach((btn) => btn.removeEventListener("click", handleClick));
        };
    }, [window]);

    return (
        <div className="sideBar">
            <h1>Expense Tracker</h1>
            <div className="btnContainer">
                <button onClick={() => setWindow("category")} className="NewCategory">New Category</button>
                <button onClick={() => setWindow("expense")} className="AddExpense">Add Expense</button>
                <button className="AddExpense">View Expense</button>
            </div>
            {window === "category" && <NewCategory  showCategory={showCategory} setShowCategory={setShowCategory} />}
            {window === "expense" && <NewExpense heading={"New Expense"}  setWindow={setWindow} showCategory={showCategory} formData={formData} setFormData={setFormData} />}
        </div>
    );
}
