# Project phase 2 - Basic structure and main functionalities

In this Phase, we focus on establishing a strong foundation for the project by implementing the basic structure and core functionalities. This phase set up the essential components of both the frontend and backend, enabling us to create a functional e-commerce application. The project’s architecture is carefully designed to be modular and scalable, with the aim to maintain high code quality and ensure that the system can be expanded and enhanced in later phases.

## 1. Environment

Our development environment uses both local and cloud-based services to ensure scalability and modern deployment practices:

**Frontend**: Built with React, runs locally and ready for deployment to Vercel or Render  
**Backend**: Node.js with Express framework  
**Database**: PostgreSQL (via pg package)  
**Version Control**: GitHub  
**Dev Tools**: Visual Studio Code, Postman, Thunder Client  

## 2. Backend

Add something

## 3. Frontend

Add something

## 4. Database

Add something

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

## 7. Code quality and documentation

Backend routes and controllers are modular and follow clean coding standards  

Frontend React components are well-separated and reusable  

Each part of the system includes inline comments and clear filenames  

README file documents installation, dependencies, and project overview  

## 8. Testing and error handling

We’ve included basic error handling and are expanding tests in the next phase:  

**Backend:**  

Try/catch blocks used around async DB operations  

Error messages are returned with proper HTTP status codes  

**Frontend:**  

User feedback shown on invalid login, checkout errors  

**Testing:**  

Manual testing done via Thunder Client/Postman  

Further plans: Jest for backend and React Testing Library for frontend  



## 9. User interface and interaction

The UI is designed using React and CSS, following modern web standards:  

**Responsive layout, clean visuals**  

**Navigation bar, product cards, cart modal, and toast messages**  

**Stripe integration for secure payments** 

**Clear user feedback for success/failure messages**
