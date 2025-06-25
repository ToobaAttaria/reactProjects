import { Edit, Trash } from 'lucide-react';
import NewExpense from "./newexpence";
import { useState } from "react";

export default function Transaction({ window, setWindow, showCategory, formData, setFormData }) {

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  function EditBtn(index) {

    setFormData(formData.filter((_, i) => i !== index));
    setSelectedTransaction(formData[index]);
    setWindow("Edit");
  }
  function DelBtn(index) {
    setFormData(formData.filter((_, i) => i !== index));
  }

  return (
    <div className="transaction">
      <div className="TransactionHeader">
        <span>Date</span>
        <span>Category</span>
        <span>Amount</span>
        <span></span>
      </div>
      <div className="transactionDisplay">
       
      {formData .map((item, index) => (
            <div key={index} className="transactionRow">
              <span>{item.date}</span>
              <span>{item.category}</span>
              <span>{item.amount}</span>
              <div className='btnContainer'>
                <span onClick={() => EditBtn(index)}>
                  <Edit size={16} />
                </span>
                <span onClick={() => DelBtn(index)} title="Delete">
                  <Trash size={16} />
                </span>
              </div>
            </div>
          ))}
      </div>


      {window === "Edit" && (
        <NewExpense
          setWindow={setWindow}
          showCategory={showCategory}
          formData={formData}
          setFormData={setFormData}
          selectedTransaction={selectedTransaction}
        />
      )}
    </div>
  );
}
