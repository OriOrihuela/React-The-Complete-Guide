import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.scss";
import { Expense } from "../../model/expense";
import { useState } from "react";

export const NewExpense = (props: any) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (data: Expense) => {
    props.onAddExpense({ ...data, id: Math.random().toString() });
    setIsEditing(false);
  };
  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);
  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={startEditingHandler}>Add new expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
