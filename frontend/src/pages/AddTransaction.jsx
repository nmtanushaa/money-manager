import { useState } from "react";
import axios from "axios";

function AddTransaction() {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("Income");
    const [category, setCategory] = useState("Salary");
    const [date, setDate] = useState("");

    const handleSubmit = async () => {
        if (!title || !amount || !date) {
            alert("Please fill all fields");
            return;
        }

        try {
            await axios.post("http://localhost:8080/transactions", {
                title,
                amount: Number(amount),
                type,
                category,
                date,
            });

            alert("✅ Transaction Added Successfully!");

            setTitle("");
            setAmount("");
            setType("Income");
            setCategory("Salary");
            setDate("");
        } catch (error) {
            console.log(error);
            alert("Error adding transaction");
        }
    };

    return (
        <div className="container">
            <div
                className="card"
                style={{
                    maxWidth: "550px",
                    margin: "40px auto",
                }}
            >
                <h1 style={{ textAlign: "center" }}>
                    ➕ Add Transaction
                </h1>

                <input
                    type="text"
                    placeholder="Transaction Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option>Income</option>
                    <option>Expense</option>
                </select>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>Salary</option>
                    <option>Food</option>
                    <option>Shopping</option>
                    <option>Travel</option>
                    <option>Bills</option>
                    <option>Entertainment</option>
                    <option>Other</option>
                </select>

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <button
                    style={{
                        width: "100%",
                        marginTop: "10px",
                    }}
                    onClick={handleSubmit}
                >
                    Save Transaction
                </button>
            </div>
        </div>
    );
}

export default AddTransaction;