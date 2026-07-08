import { Link } from "react-router-dom";

function Home() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "80vh",
            }}
        >
            <div
                className="card"
                style={{
                    maxWidth: "700px",
                    textAlign: "center",
                    padding: "40px",
                }}
            >
                <h1>💰 Money Manager</h1>

                <p
                    style={{
                        fontSize: "18px",
                        color: "#555",
                        marginBottom: "30px",
                    }}
                >
                    Track your income and expenses easily with a simple,
                    secure, and user-friendly money management application.
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "15px",
                        flexWrap: "wrap",
                    }}
                >
                    <Link to="/dashboard">
                        <button>📊 Dashboard</button>
                    </Link>

                    <Link to="/add">
                        <button>➕ Add Transaction</button>
                    </Link>

                    <Link to="/transactions">
                        <button>📋 Transactions</button>
                    </Link>
                </div>

                <div
                    style={{
                        marginTop: "40px",
                        textAlign: "left",
                    }}
                >
                    <h2>✨ Features</h2>

                    <ul style={{ lineHeight: "2" }}>
                        <li>✅ Add Income & Expense</li>
                        <li>✅ Dashboard Summary</li>
                        <li>✅ Search Transactions</li>
                        <li>✅ Delete Transactions</li>
                        <li>✅ Category & Date Tracking</li>
                        <li>✅ Spring Boot REST API</li>
                        <li>✅ MySQL Database</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;