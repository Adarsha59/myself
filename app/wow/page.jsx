"use client";
import React, { useState } from "react";

export default function Page() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;
    switch (operation) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "Cannot divide by zero";
        break;
      default:
        res = "Invalid operation";
    }
    setResult(res);
  };

  return (
    <div className="p-6 max-w-md mx-auto  shadow-lg rounded-xl mt-10 space-y-4">
      <h1 className="text-3xl font-bold text-center">🧮 Simple Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        className="w-full border p-2 rounded"
      />
      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option value="+">➕ Add</option>
        <option value="-">➖ Subtract</option>
        <option value="*">✖ Multiply</option>
        <option value="/">➗ Divide</option>
      </select>
      <button
        onClick={calculate}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Calculate
      </button>
      {result !== null && (
        <div className="text-center text-xl font-semibold mt-4">
          Result: {result}
        </div>
      )}
    </div>
  );
}
