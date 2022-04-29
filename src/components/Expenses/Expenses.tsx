import { Expense } from "../../model/Expense";
import { Card } from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.scss";

interface Props {
  items: Expense[];
}

function Expenses(props: Props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        id={props.items[0].id}
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
    </Card>
  );
}

export default Expenses;
