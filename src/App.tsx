import { useState } from "react";
import ExpenseList from "./expense-tracker-mzn/components/ExpenseList";
import ExpenseFilter from "./expense-tracker-mzn/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker-mzn/components/ExpenseForm";
import categories from "./expense-tracker-mzn/categories";

function App() {
  const [selectedCategories, setSelectedCategories] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategories
    ? expenses.filter((e) => e.category === selectedCategories)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([
              ...expenses,
              {
                ...expense,
                id: expenses.length + 1,
              },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategories(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
