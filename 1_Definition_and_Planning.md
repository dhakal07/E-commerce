# Project phase 1 - Definition and planning

The goal of this project is to develop a fully functional e-commerece platform that allows customers to browse products, add them in their cart and complete the purchases in secure and successful manner. And admin will be able to manage products and orders efficiently.
I have listed the key objectives of the project as **following**.

Provide a user-friendly shopping experience with a clear and simple UI

Implement a secure authentication system for users and admins

Allow customers to add/remove products from their shopping cart

Integrate a checkout and payment system using Stripe

Provide an admin dashboard for managing products and orders

Deploy the application to the cloud for scalability



## User Personas

**Persona 1: The Regular Customer**  
**Name**: Emma Wilson  
**Age**: 25  
**Location**: Helsinki, Finland  
**Occupation**: Marketing Specialist  
**Tech-Savvy Level**: Medium  
**Devices Used**: Mobile, Laptop  

🎯 **Goals**:  
✅ Easily browse and purchase trendy fashion products  
✅ Get quick checkout with multiple payment options  
✅ Receive fast delivery and order tracking updates  

❌ **Frustrations**:  
Slow website load times  
Complicated checkout process  
Limited payment methods  


**Persona 2: The Small Business Owner**  
**Name**: Alex Smith  
**Age**: 35  
**Location**: Kokkola, Finland  
**Occupation**: Small Business Owner    
**Tech-Savvy Level**: Low  
**Devices Used**: Desktop, Tablet  

🎯 **Goals**:  
✅ Easily add/edit/delete products  
✅ View and manage customer orders  
✅ Get sales reports and insights  

❌ **Frustrations**:  
Complicated backend management  
Difficult order tracking  
Poor customer support  


**Persona 3: The Tech Enthusiast**  
**Name**: Mikko Pasanen  
**Age**: 30  
**Location**: Espoo, Finland  
**Occupation**: Software Developer  
**Tech-Savvy Level**: High  
**Devices Used**: Laptop, Mobile, Smart Home Devices  

🎯 **Goals**:  
✅ Find high-quality gadgets with detailed product specifications  
✅ Look for discounts and exclusive deals  
✅ Use advanced search and filter options  

❌ **Frustrations**:  
Hard-to-navigate website  
Poorly written product descriptions  
Slow customer service response  


**Persona 4: Housemaker**  
**Name**: Lisa Johnson  
**Age**: 40  
**Location**: Oulu, Finland  
**Occupation**: Stay-at-home Mom  
**Tech-Savvy Level**: Medium  
**Devices Used**: Mobile, Tablet  

🎯 **Goals**:  
✅ Buy kids' clothing, toys, and household items quickly  
✅ Get reliable product reviews before making a purchase  
✅ Use a wishlist and save items for later  

❌ **Frustrations**:  
No easy way to save favorite products  
No proper size guide for kids' clothing  
Complicated return policy  


**Persona 5: The Elderly User**  
**Name**: Petri Mäkinen  
**Age**: 65  
**Location**: Tampere, Finland  
**Occupation**: Retired Teacher  
**Tech-Savvy Level**: Low  
**Devices Used**: Desktop, Tablet  

🎯 **Goals**:  
✅ Find an easy-to-use website with large fonts  
✅ Get clear product descriptions and easy checkout  
✅ Have access to customer support via phone  

❌ **Frustrations**:  
Too many steps in the checkout process  
Small text and confusing navigation  
Hard-to-find customer service options  



## 2. Use Cases and User Flows

| Use Case | 	Actors| 	User Flow |
|----------|----------|----------|
| User Registeration/Login | Customer, Admin | Users should be able to sign up, log in and manage their profiles. |
| Browsing Products | Customer | Customers can browse, search and filter products. |
| Adding to Cart | Customer | Users can add or remove products from their shopping carts. |
| Checkout and Payments | Customer | Users can enter payment details and place the order successfully. |
| Order Tracking | Customer | User can check the status of their orders (pending, shipped, delivered). | **Optional**

1. **Sign up**: Users enter email, password, and confirm password from home screen.  
2. **Log in**: User enters credentials if user has already registered.  
3. **Browsing Products**: User can browse product from navigation bar, named as ""Man", "Women" and "kids". It produces a new screen on click.  
4. **Adding to Cart**: User clicks the "Add to Cart" button on a product page.  Cart icon shows the number of items added. User can view, remove, or change quantities of items in the cart.  
5. **Checkout and Payments**: User enters their shipping details (address, phone number). User chooses a payment method (Stripe integration). User confirms payment and receives confirmation details.

## 3. UI Prototypes

https://teams.microsoft.com/l/message/19:e40aff3e-6515-4b37-8cfb-da06c6277852_f0f3e44c-a3a0-4be8-af1d-94c7fb29ae8c@unq.gbl.spaces/1744100380572?context=%7B%22contextType%22%3A%22chat%22%7D

## 4. Information Architecture and Technical Design

Here we will be defining how everything in the project is structured and how different parts communicate, both from a user experience and a technical perspective.  
  
We will be covering  
  
**Navigation Flow**  
**Frontend-Backend Flow** (How UI interacts with backend)  
**Data Structure Blueprint**  
**Used technologies and Architectures**  
**API Designs**  





## 5. Project Management and User Testing

| Timeline | 	Task|
|----------|----------|
| Week 1 | Personas/User cases/User Flow/UI Prototypes and Technical Design Plan |
| week 2 | Work on Frontend and Backend |
| Week 3-4 | Continue on Frontend, Backend, Database and do testing |
| Week 5 | Final touch ups, re-checking databases, and testing again |

## Tools Used:
Visual Studio Code
Github
Figma for design Purpose
Teams for communication

## User Testing Plan
In our project we have plans to have mainly two different testing.  
**Functionality Testing:**  
Ensures that all features of the e-commerce platform (like login, browsing, cart, and checkout) work as expected and meet the specified requirements.

**Integration Testing:**  
Tests the interaction between different modules or components (e.g., front-end, back-end, and payment gateway) to ensure they work together seamlessly.










