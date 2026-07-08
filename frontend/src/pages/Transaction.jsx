import { useEffect, useState } from "react";
import axios from "axios";

function Transaction() {
    const [transactions, setTransactions] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const response = await axios.get("http://localhost:8080/transactions");
            setTransactions(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteTransaction = async (id) => {
        if (!window.confirm("Are you sure you want to delete this transaction?")) {
            return;
        }

        try {
            await axios.delete(`http://localhost:8080/transactions/${id}`);
            alert("Transaction Deleted Successfully!");
            fetchTransactions();
        } catch (error) {
            console.log(error);
            alert("Error deleting transaction");
        }
    };

    const filteredTransactions = transactions.filter((transaction) =>
        transaction.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <h1 style={{ textAlign: "center" }}>📋 Transactions</h1>

            <input
                type="text"
                placeholder="🔍 Search Transaction..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredTransactions.length === 0 ? (
                <div className="card">
                    <h3>No Transactions Found</h3>
                </div>
            ) : (
                filteredTransactions
                    .slice()
                    .reverse()
                    .map((transaction) => (
                        <div
                            key={transaction.id}
                            className="card"
                            style={{ marginTop: "20px" }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <div>
                                    <h2>{transaction.title}</h2>

                                    <p>
                                        <strong>Category:</strong>{" "}
                                        {transaction.category}
                                    </p>

                                    <p>
                                        <strong>Date:</strong>{" "}
                                        {transaction.date}
                                    </p>
                                </div>

                                <div style={{ textAlign: "right" }}>
                                    <h2
                                        style={{
                                            color:
                                                transaction.type === "Income"
                                                    ? "#16a34a"
                                                    : "#dc2626",
                                        }}
                                    >
                                        ₹{transaction.amount}
                                    </h2>

                                    <span
                                        style={{
                                            background:
                                                transaction.type === "Income"
                                                    ? "#dcfce7"
                                                    : "#fee2e2",
                                            color:
                                                transaction.type === "Income"
                                                    ? "#15803d"
                                                    : "#b91c1c",
                                            padding: "6px 12px",
                                            borderRadius: "20px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {transaction.type}
                                    </span>
                                </div>
                            </div>

                            <button
                                style={{
                                    marginTop: "15px",
                                    background: "#dc2626",
                                }}
                                onClick={() =>
                                    deleteTransaction(transaction.id)
                                }
                            >
                                🗑 Delete
                            </button>
                        </div>
                    ))
            )}
        </div>
    );
}

export default Transaction;