import "./ExpensesList.scss";
import { ExpenseItem } from "./ExpenseItem";
import { Expense } from "../../model/expense";

export const ExpensesList = (props: any): JSX.Element => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense: Expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};
