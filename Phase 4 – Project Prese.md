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
| User registers and logs in        | Yes                  | Secure JWT-based authentication.                          |
| User adds items to cart           | Yes                  | Managed via React Context API.                             |
| User places an order              | Yes                  | Stored in PostgreSQL with user details.                    |
| User submits feedback             | Yes                  | Saved to database with timestamps.                     |
| User requests a return            | Yes                  | Linked to orders via database join.                       |
| Admin views user activity         | Yes                  | Displays logins and new users.                           |
| Admin manages returns             | Yes                  | Views return requests with product info.                 |
| Admin tracks orders               | Yes                  | Shows order status and totals.                          |
| Admin views user feedback         | Yes                  | Lists feedback with dates.                                |
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
- **Order Management:**:
  ```javascript
  app.post('/api/orders', (req, res) => {
  const { useremail, total, status } = req.body;
  client.query('INSERT INTO orders (useremail, total, status, createdat) VALUES ($1, $2, $3, NOW())', [useremail, total, status], (err) => {
    if (err) return res.status(500).json({ message: 'Error adding order' });
    res.status(201).json({ message: 'Order placed successfully!' });
  });
});
- **Admin Dashboard Data**:
  ```javascript
  const getAllReturns = async (req, res) => {
  const result = await client.query(`
    SELECT r.id, r.orderid AS order_id, o.useremail AS email, r.productname, r.reason, r.status, r.createdat AS return_date 
    FROM returns r LEFT JOIN orders o ON r.orderid = o.id
  `);
  res.status(200).json(result.rows);
};  
## Development Process

Over approximately 135 hours, the project evolved through these phases:

**Phase 1 (Planning):**  
Defined use cases and designed the PostgreSQL schema, sketching UI wireframes.

**Phase 2 (Backend Setup):**  
Built the Node.js/Express backend, integrated PostgreSQL with Docker, and implemented JWT authentication. Challenges included CORS setup and database connectivity.

**Phase 3 (Frontend Development):**  
Developed the React frontend (navbar, cart, user pages), overcoming initial state management issues with Context API. Styled iteratively to align with the orange theme.

**Phase 4 (Admin Features):**  
Added the admin dashboard, resolving schema mismatches (e.g., useremail vs. email) with updated queries.

**Phase 5 (Testing & Polishing):**  
Tested all features, fixed bugs (e.g., order.total.toFixed with parseFloat), and aligned dashboard styling.
## ☀️ Reflection and Future Work

### What Worked Well
- **Full-Stack Success:** Integrated React, Node.js, and PostgreSQL into a functional e-commerce system.  
- **Admin Dashboard:** Became a robust monitoring tool with iterative enhancements.  
- **Learning Curve:** Mastered JWT, Context API, and database joins, enhancing my skill set.

### Challenges Faced
- **Schema Mismatches:** Incorrect column names (e.g., useremail) required extensive debugging.  
- **Data Type Issues:** Resolved `order.total.toFixed` errors by parsing strings.  
- **Cart Total Calculation:** Encountered `$NaN` due to invalid quantity parsing, requiring debugging of state management and number conversion.  
- **Time Constraints:** Limited time led to deferring features like user deletion.

### Future Improvements
- **New Features:** Add user account deletion and admin user banning.  
- **UI Enhancements:** Implement direct category navigation links between Male, Female, and Kids Clothing pages with active link styling (bold), enhancing user experience. Further improvements could include pagination and mobile optimization.  
- **Cart Functionality:** Resolve cart total calculation issues with robust quantity and price parsing.  
- **Performance:** Add indexes and caching for larger datasets.  
- **Testing:** Introduce Jest and Mocha for automated testing.  
  ## 📊 Work Hours Log

Totaling approximately 135 hours, my work log reflects the effort across development phases:

| Date       | Task                                      | Hours Spent | Notes/Details                                  |
|------------|-------------------------------------------|-------------|-----------------------------------------------|
| 30.03.2025 | Initial Project Planning                   | 4h          | Defined topic and scope                        |
| 02.04.2025 | Github repo setup and project initialization | 2h          | Created repo and initial commit                |
| 05.04.2025 | User Personas, Use Cases, and User Flows  | 4h          | Documented key user roles and flows            |
| 08.04.2025 | UI Prototypes                             | 3h          | Designed initial wireframes                      |
| 10.04.2025 | Architecture, Technical Design, Project Management, User Testing | 5h | Planned system architecture and testing strategy |
| 15.04.2025 | Research, Use Cases, Database Schema      | 5h          | Finalized database schema                        |
| 18.04.2025 | Backend Setup (Node.js, Express)           | 6h          | Built core backend services                      |
| 21.04.2025 | PostgreSQL with Docker                    | 4h          | Dockerized DB for dev environment                |
| 24.04.2025 | User Authentication (JWT, bcrypt)          | 8h          | Implemented secure login flow                     |
| 27.04.2025 | React Frontend (navbar, cart)             | 7h          | Developed main UI components                      |
| 30.04.2025 | Cart with Context API                     | 6h          | Managed global state for cart                      |
| 03.05.2025 | Order Placement                          | 5h          | Completed order process                            |
| 06.05.2025 | Feedback and Return Forms                 | 4h          | Added user feedback feature                        |
| 10.05.2025 | Admin Dashboard UI                        | 8h          | Designed and styled admin interface                 |
| 13.05.2025 | Admin API Endpoints                       | 7h          | Created backend APIs for admin features            |
| 16.05.2025 | Debugged Schema Issues                    | 6h          | Fixed mismatches between frontend and DB           |
| 19.05.2025 | Fixed Admin Data Display                  | 5h          | Corrected UI rendering bugs                          |
| 22.05.2025 | Styled Admin Dashboard                    | 6h          | Improved UI consistency and responsiveness          |
| 25.05.2025 | Tested User Flows                        | 4h          | Conducted manual testing of main features             |
| 28.05.2025 | Inserted Test Data, Debugged Errors      | 5h          | Populated DB with test data, fixed runtime errors      |
| 30.05.2025 | Fixed toFixed Error                      | 3h          | Resolved numeric formatting issues                     |
| 31.05.2025 | Polished UI and Styling                  | 5h          | Final UI improvements for better UX                    |
| 01.06.2025 | Prepared Presentation Materials          | 5h          | Created slides and notes for project presentation       |
| 02.06.2025 | Recorded Video Presentation              | 6h          | Produced project demo video                             |
| 03.06.2025 | Implemented Category Navigation          | 6h          | Added category links with active styling               |
| 03.06.2025 | Fixed Cart Total ($NaN) Issue            | 3h          | Debugged and fixed cart total calculation              |
| 03.06.2025 | Final Testing and Tweaks                  | 2h          | Last round of testing and minor fixes                   |
| **Total**  |                                           | **135h**    |                                                       |


## 🪢 Presentation Link

https://teams.microsoft.com/l/message/19:e40aff3e-6515-4b37-8cfb-da06c6277852_f0f3e44c-a3a0-4be8-af1d-94c7fb29ae8c@unq.gbl.spaces/1748954474453?context=%7B%22contextType%22%3A%22chat%22%7D

  
