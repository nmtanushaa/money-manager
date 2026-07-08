import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddTransaction from "./pages/AddTransaction";
import Transaction from "./pages/Transaction";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <nav className="navbar">
                <h2 className="logo">💰 Money Manager</h2>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/add">Add Transaction</Link>
                    <Link to="/transactions">Transactions</Link>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add" element={<AddTransaction />} />
                <Route path="/transactions" element={<Transaction />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;