# 🎬 Movie Booking Portal

A decentralized movie ticket booking portal built with **React.js (frontend)**, **Node.js + Express (backend)**, **MongoDB (database)**, and **Blockchain (for secure transactions)**.  

This project supports two types of users:  
- **Customer** → Can book tickets online.  
- **Theater Owner** → Can view income, excluding government taxes.  

---

## 🚀 Features

### 🎟 For Customers
- Browse movies and select show timings.  
- Book tickets online.  
- Pay ticket price + booking convenience fees.  
- Transparent breakdown of charges.  

### 🏢 For Theater Owners
- View earnings **excluding government taxes**.  
- Maintenance charge (`₹3 per ticket`) is added to owner’s revenue.  
- Convenience fee goes to the **booking portal**.  

---

## 💰 Price & Tax Calculation Rules

1. **Ticket Price Tax**  
   - If ticket price `< ₹100` → **12% GST** (paid by theater owner).  
   - If ticket price `≥ ₹100` → **18% GST** (paid by theater owner).  

2. **Convenience Fee (Booking Portal)**  
   - 10% of ticket price.  
   - Additional **18% GST** on convenience fee (paid by booking portal).  

3. **Customer Payment**  
   - Customer pays:  
     `Ticket Price + Convenience Fee (+ Convenience Fee GST)`  

4. **Theater Owner Earnings**  
   - Revenue = `Ticket Price - GST (on ticket) + ₹3 (maintenance charge per ticket)`  

---

## 🛠 Tech Stack

- **Frontend**: React.js + Vite  
- **Backend**: Node.js + Express.js  
- **Database**: MongoDB  
- **Blockchain**: Ethereum / Hyperledger (for transaction logs & audit trail)  

---

## 🔗 Blockchain Usage
Blockchain is used for:  
- **Storing immutable records** of each ticket booking.  
- **Ensuring trust & transparency** between customers, theater owners, and the booking portal.  
- Preventing fraud in revenue sharing & tax reporting.  

---