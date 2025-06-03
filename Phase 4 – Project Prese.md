## Phase 4 – Project Presentation


---

## 🎯 Project Title

**E-Commerce Platform with Admin Dashboard**

---

## 📝 Project Overview

This e-commerce platform is designed for online shoppers and administrators, providing a seamless shopping experience and robust management tools. Regular users can register, log in, add items to their cart, place orders, submit feedback, and request returns. Administrators access a dedicated dashboard to monitor user activity, manage returns, track orders, and review feedback. The platform aims to balance user convenience with administrative oversight, serving as a practical showcase of full-stack development skills.

The project targets e-commerce enthusiasts, small business owners, and developers learning full-stack technologies, built to simulate a real-world online store with secure authentication and data management.

---

## 📌 Use Case Summary

Below are the key use cases defined in Phase 1, with their implementation status and notes, inspired by a structured approach to feature demonstration.

| Use Case                          | Implemented (Yes/No) | Demonstration / Notes                                                                 |
|-----------------------------------|----------------------|---------------------------------------------------------------------------------------|
| User registers and logs in        | Yes                  | Secure JWT-based authentication. Demo at 1:30 in the video.                          |
| User adds items to cart           | Yes                  | Managed via React Context API. Demo at 2:00 in the video.                            |
| User places an order              | Yes                  | Stored in PostgreSQL with user details. Demo at 2:30 in the video.                   |
| User submits feedback             | Yes                  | Saved to database with timestamps. Demo at 3:00 in the video.                        |
| User requests a return            | Yes                  | Linked to orders via database join. Demo at 3:30 in the video.                       |
| Admin views user activity         | Yes                  | Displays logins and new users. Demo at 4:00 in the video.                           |
| Admin manages returns             | Yes                  | Views return requests with product info. Demo at 4:30 in the video.                  |
| Admin tracks orders               | Yes                  | Shows order status and totals. Demo at 5:00 in the video.                           |
| Admin views user feedback         | Yes                  | Lists feedback with dates. Demo at 5:30 in the video.                               |
| User deletes account              | No                   | Deferred due to time; planned for future.                                           |
| Admin bans users                  | No                   | Not prioritized; potential future enhancement.                                      |

---

## ✍️ Technical Implementation

The e-commerce platform leverages a robust tech stack and thoughtful architecture:

- **Frontend**: React.js with React Router for navigation and Context API (e.g., `AuthContext`, `CartContext`) for state management. Styled with CSS, featuring an orange theme (`#ff8c69`) to match the navbar.
- **Backend**: Node.js with Express.js for a RESTful API, handling authentication, orders, feedback, and admin data.
- **Database**: PostgreSQL with Docker containerization (`ecommerce-db`) for persistent storage of `users`, `orders`, `feedback`, `returns`, and `logins`.
- **Authentication**: JWT with `bcrypt` for secure password hashing and role-based access (admin role for dashboard).
- **Tools**: Postman for API testing, Git for version control.

### Key Features & Implementation Details
- **Secure User Authentication**:
  ```javascript
  app.post('/api/users/register', (req, res) => {
    const { email, password } = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return res.status(500).json({ message: 'Error encrypting password' });
      client.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, hashedPassword], (err) => {
        if (err) return res.status(500).json({ message: 'Error registering user' });
        res.status(201).json({ message: 'User registered successfully!' });
      });
    });
  });
- **Secure User Authentication**:
  ```javascript
  app.post('/api/orders', (req, res) => {
  const { useremail, total, status } = req.body;
  client.query('INSERT INTO orders (useremail, total, status, createdat) VALUES ($1, $2, $3, NOW())', [useremail, total, status], (err) => {
    if (err) return res.status(500).json({ message: 'Error adding order' });
    res.status(201).json({ message: 'Order placed successfully!' });
  });
});  
  
