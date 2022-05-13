import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.scss";
import { Expense } from "../../model/expense";

export const NewExpense = (props: any) => {
  const saveExpenseDataHandler = (data: Expense) => {
    props.onAddExpense({ ...data, id: Math.random().toString() });
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
