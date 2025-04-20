# Project phase 2 - Basic structure and main functionalities

In this Phase, we focus on establishing a strong foundation for the project by implementing the basic structure and core functionalities. This phase set up the essential components of both the frontend and backend, enabling us to create a functional e-commerce application. The project’s architecture is carefully designed to be modular and scalable, with the aim to maintain high code quality and ensure that the system can be expanded and enhanced in later phases.

## 1. Environment

Our development environment uses both local and cloud-based services to ensure scalability and modern deployment practices:

- **Frontend**: Built with React, runs locally and ready for deployment to Vercel or Render  
- **Backend**: Node.js with Express framework  
- **Database**: PostgreSQL (via pg package)  
- **Version Control**: GitHub  
- **Dev Tools**: Visual Studio Code, Postman, Thunder Client  


## 2. Backend

The backend of the application is built using **Node.js** and **Express.js**. It is responsible for handling all the API endpoints, business logic, user authentication, and database operations.

- **Structure**: Separated into `routes`, `controllers`, and `db` folders for modularity  
- **Authentication**: JSON Web Tokens (JWT) are used for secure user sessions  
- **Functionality**:
  - Handles product browsing, cart management, order processing  
  - Manages admin routes for adding/editing products  
- **Error Handling**: Uses `try/catch` blocks with proper HTTP status codes  
- **Deployment-ready**: Can be easily deployed using Render, Railway, or other platforms


## 3. Frontend

The frontend is developed using **React**, providing a responsive and modern user interface. Users can browse products, manage their cart, and complete purchases through an intuitive UI.

- **Structure**: Organized into reusable components and pages  
- **State Management**: Basic use of React hooks (`useState`, `useEffect`)  
- **UI Elements**:
  - Navigation bar, product cards, cart modal  
  - Toast messages for user feedback  
- **Routing**: Implemented using `react-router-dom`  
- **Design**: Styled using plain CSS for simplicity and responsiveness


## 4. Database

The database layer uses **PostgreSQL** to store all persistent data related to products, users, orders, and cart items.

- **Setup**: Configured in the `db/` folder using the `pg` package  
- **Tables**:
  - `users` – for storing user credentials and roles (admin/user)  
  - `products` – product data such as title, price, stock  
  - `orders` – stores orders with timestamps and statuses  
  - `cart_items` – links users with the items in their cart  
- **Security**: Queries use parameterized inputs to prevent SQL injection  
- **Tools Used**: `pg`, pgAdmin (optional for GUI), SQL shell  

## 5. Basic structure and architecture


```
E-commerce/
├── client/                # Frontend - React app
│   ├── public/
│   └── src/
│       ├── components/    # Navbar, ProductList, Cart, etc.
│       ├── pages/         # Homepage, ProductPage, etc.
│       └── App.js
├── server/                # Backend - Express.js
│   ├── routes/            # Product, User, Cart, Order
│   ├── controllers/       # Business logic
│   ├── db/                # PostgreSQL config
│   └── server.js
└── README.md
```



## 6. Functionalities

| Functionality          | Status           | Description                                               |
|------------------------|------------------|-----------------------------------------------------------|
| 🛍️ Browsing Products   | ✅ Done          | Users can browse available products from the frontend     |
| 🛒 Add/Remove to Cart   | ✅ Done          | Add items, increase quantity, or remove them              |
| ✅ User Registration/Login | ✅ Done      | Auth system using JWT for login and secure sessions       |
| 💳 Checkout & Payments  | ✅ Stripe Integrated | Simulated/real payment integration via Stripe           |
| 📦 Order Tracking      | ✅ Basic         | Orders saved with statuses; status displayed to user      |
| 🔒 Admin Access        | ✅ Done          | Admin can manage products/orders (basic dashboard)        |

## 7. Technologies Used

| Category        | Technology                                      |
|-----------------|-------------------------------------------------|
| **Frontend**    | React, CSS                                      |
| **Backend**     | Node.js, Express                                |
| **Database**    | PostgreSQL                                      |
| **Payments**    | Stripe API                                      |
| **Auth**        | JWT                                             |
| **Deployment**  | GitHub (Vercel planned)                         |
| **Dev Tools**   | VS Code, Postman                                |

## 8. Code quality and documentation

- Backend routes and controllers are modular and follow clean coding standards  
- Frontend React components are well-separated and reusable  
- Each part of the system includes inline comments and clear filenames  
- README file documents installation, dependencies, and project overview 

## 9. Testing and error handling
Testing Overview

| Test Type            | Status        | Tools Used                        |
|----------------------|---------------|-----------------------------------|
| Functionality Testing | ✅ Done       | Manual via UI                     |
| Integration Testing   | ✅ Done       | Postman, Frontend                 |
| Error Handling        | ✅ Done       | Try/catch, UI                     |
| Automated Tests       | ⏳ Planned    | Jest, React Testing Lib           |


We’ve included basic error handling and are expanding tests in the next phase:  

### Details

- **Backend**:
  - Try/catch blocks used around async DB operations  
  - Error messages are returned with proper HTTP status codes  

- **Frontend**:
  - User feedback shown on invalid login, checkout errors  

- **Testing**:
  - Manual testing done via Thunder Client/Postman  
  - Further plans: Jest for backend and React Testing Library for frontend  


## 10. User interface and interaction

he UI is designed using React and CSS, following modern web standards:

- **Responsive layout, clean visuals**  
- **Navigation bar, product cards, cart modal, and toast messages**  
- **Stripe integration for secure payments**  
- **Clear user feedback for success/failure messages**
