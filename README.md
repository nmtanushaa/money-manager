# 💰 Money Manager

A full-stack Money Manager application built using **React.js**, **Spring Boot**, and **MySQL**. This application helps users manage their personal finances by tracking income and expenses, viewing financial summaries, and organizing transactions efficiently.

---

## 📌 Features

- ➕ Add Income and Expense Transactions
- 📋 View All Transactions
- 🗑 Delete Transactions
- 🔍 Search Transactions
- 📊 Dashboard with:
  - Total Income
  - Total Expense
  - Current Balance
- 📂 Category Management
- 📅 Date Tracking
- 🔗 React Frontend connected with Spring Boot REST APIs
- 💾 MySQL Database Integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Axios
- React Router

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST API

### Database
- MySQL

### Tools
- IntelliJ IDEA
- VS Code
- Git
- GitHub
- Maven

---

## 📁 Project Structure

```
MoneyManager/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controller/
│   ├── entity/
│   ├── repository/
│   ├── service/
│   ├── pom.xml
│   └── application.properties
│
└── README.md
```

---

## 🚀 How to Run

### Backend

1. Open the backend project in IntelliJ IDEA.
2. Configure MySQL in `application.properties`.
3. Run `MoneyManagerApplication.java`.

Backend runs on:

```
http://localhost:8080
```

---

### Frontend

Open a terminal inside the frontend folder.

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/transactions` | Get all transactions |
| POST | `/transactions` | Add a new transaction |
| DELETE | `/transactions/{id}` | Delete a transaction |

---

## 📷 Screenshots

### 🏠 Home Page

<img width="1124" height="851" alt="Screenshot (4)" src="https://github.com/user-attachments/assets/00a5ccce-40a1-49ed-84d6-cca5a4db1e26" />


### 📊 Dashboard

<img width="1122" height="876" alt="Screenshot (5)" src="https://github.com/user-attachments/assets/734c1b6f-3545-4c3f-aba5-419d65a4c36c" />


### ➕ Add Transaction

<img width="1123" height="843" alt="Screenshot (6)" src="https://github.com/user-attachments/assets/eebfe8f0-b841-4836-b8cc-82b1e1677332" />

### 📋 Transactions

<img width="1115" height="853" alt="Screenshot (7)" src="https://github.com/user-attachments/assets/4808bb12-2270-4a00-8c6b-055cfa3b697b" />


---

## 🎯 Future Enhancements

- ✏️ Edit Transaction
- 📈 Expense Analytics Charts
- 📄 Export Reports (PDF/Excel)
- 🌙 Dark Mode
- 💳 Online Payment Integration
- 📱 Mobile Responsive Design

---

## 👩‍💻 Developed By

**N M Tanusha**

GitHub: https://github.com/nmtanushaa

---

## ⭐ If you like this project

Give this repository a ⭐ on GitHub!
