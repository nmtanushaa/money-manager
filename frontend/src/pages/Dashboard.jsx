import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
    const [transactions, setTransactions] = useState([]);

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

    const totalIncome = transactions
        .filter((t) => t.type === "Income")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const totalExpense = transactions
        .filter((t) => t.type === "Expense")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const balance = totalIncome - totalExpense;

    return (
        <div className="container">
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
                📊 Dashboard
            </h1>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}
            >
                <div
                    style={{
                        flex: 1,
                        minWidth: "220px",
                        background: "#16a34a",
                        color: "white",
                        padding: "25px",
                        borderRadius: "15px",
                        textAlign: "center",
                        boxShadow: "0 5px 12px rgba(0,0,0,0.2)",
                    }}
                >
                    <h2>💚 Income</h2>
                    <h1>₹{totalIncome}</h1>
                </div>

                <div
                    style={{
                        flex: 1,
                        minWidth: "220px",
                        background: "#dc2626",
                        color: "white",
                        padding: "25px",
                        borderRadius: "15px",
                        textAlign: "center",
                        boxShadow: "0 5px 12px rgba(0,0,0,0.2)",
                    }}
                >
                    <h2>❤️ Expense</h2>
                    <h1>₹{totalExpense}</h1>
                </div>

                <div
                    style={{
                        flex: 1,
                        minWidth: "220px",
                        background: "#2563eb",
                        color: "white",
                        padding: "25px",
                        borderRadius: "15px",
                        textAlign: "center",
                        boxShadow: "0 5px 12px rgba(0,0,0,0.2)",
                    }}
                >
                    <h2>💰 Balance</h2>
                    <h1>₹{balance}</h1>
                </div>
            </div>

            <div className="card" style={{ marginTop: "30px" }}>
                <h2>📋 Recent Transactions</h2>

                {transactions.length === 0 ? (
                    <p>No transactions available.</p>
                ) : (
                    transactions.slice().reverse().map((transaction) => (
                        <div
                            key={transaction.id}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "12px 0",
                                borderBottom: "1px solid #ddd",
                            }}
                        >
                            <div>
                                <strong>{transaction.title}</strong>
                                <br />
                                <small>
                                    {transaction.category} | {transaction.date}
                                </small>
                            </div>

                            <div
                                style={{
                                    color:
                                        transaction.type === "Income"
                                            ? "green"
                                            : "red",
                                    fontWeight: "bold",
                                }}
                            >
                                ₹{transaction.amount}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Dashboard;