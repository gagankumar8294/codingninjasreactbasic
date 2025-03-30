import React from "react";
import styles from "./ExpenseForm.module.css";
import { useState } from "react";

export default function ExpenseForm() {
  // Create state or ref for the inputs here
  const [name, setName] = useState("");
    return (
      <form className={styles.form} onSubmit={() => {}}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense,positive-income)</div>
        </div>
        <input
          className={styles.input}
          id="expenseAmount"
          type="number"
          placeholder="Enter amount..."
          required
        />
        <button className={styles.submitBtn}>Add Transaction</button>
      </form>
    );
  }

