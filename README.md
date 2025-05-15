# 📘 Bookstore API

A RESTful API built with Node.js, Express, and MongoDB for managing a bookstore. It includes user authentication, role-based access, and full CRUD operations for books, authors, and categories. The API also features cart management per user.

---

## 🚀 Features

### 🧑‍💼 User Management
- **User Registration/Login** with hashed passwords (using bcrypt)
- **Role-based Access Control**: 
  - **Admin**: Full access to manage books, authors, categories.
  - **Customer**: Can browse and add books to cart.

### 📚 Books CRUD
- Admins can **Create, Read, Update, Delete** books.
- Each book includes:
  - `title` (String)
  - `description` (String)
  - `price` (Number)
  - `author` (ObjectId - references Author model)
  - `category` (ObjectId - references Category model)
  - `stock` (Number)
  - Optional: **Image Upload** support via multer/cloudinary (if implemented)

### ✍️ Authors CRUD
- Manage authors with the following fields:
  - `name` (String)
  - `biography` (String)
  - `books` (Populated from Book model)

### 🏷️ Categories CRUD
- Manage book genres:
  - `type` (e.g., Fiction, Non-fiction)
  - `description`

### 🛒 Cart Logic
- Customers can:
  - Add/Remove books to/from cart
  - View current cart
  - Calculate total price
- Each user's cart is stored in MongoDB and linked to their account.

---

## 📁 Project Structure

bookstore-api/
│
├── controllers/
│ ├── authController.js
│ ├── bookController.js
│ ├── authorController.js
│ ├── categoryController.js
│ └── cartController.js
│
├── models/
│ ├── User.js
│ ├── Book.js
│ ├── Author.js
│ ├── Category.js
│ └── Cart.js
│
├── routes/
│ ├── authRoutes.js
│ ├── bookRoutes.js
│ ├── authorRoutes.js
│ ├── categoryRoutes.js
│ └── cartRoutes.js
│
├── middlewares/
│ ├── authMiddleware.js
│ └── roleMiddleware.js
│
├── config/
│ └── db.js
│
├── .env
├── server.js
└── README.md


---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Token), bcrypt
- **Image Upload (Optional):** multer, Cloudinary
- **Environment Variables:** dotenv

---

## 🔐 API Authentication

Use Bearer Token Authentication for all protected routes.

Example:
Authorization: Bearer <your_token_here>


---


---

## 📌 Sample Endpoints

### 🔑 Auth
- `POST /api/register` – Register a new user
- `POST /api/login` – Login user and return JWT

### 📚 Books
- `GET /api/books` – Get all books
- `GET /api/books/:id` – Get book details
- `POST /api/books` – Create a new book (Admin only)
- `PUT /api/books/:id` – Update a book (Admin only)
- `DELETE /api/books/:id` – Delete a book (Admin only)

### ✍️ Authors
- `GET /api/authors` – List all authors
- `GET /api/authors/:id` – Get author details
- `POST /api/authors` – Add a new author (Admin only)
- `PUT /api/authors/:id` – Update author (Admin only)
- `DELETE /api/authors/:id` – Delete author (Admin only)

### 🏷️ Categories
- `GET /api/categories` – List all categories
- `GET /api/categories/:id` – Get category details
- `POST /api/categories` – Create a new category (Admin only)
- `PUT /api/categories/:id` – Update category (Admin only)
- `DELETE /api/categories/:id` – Delete category (Admin only)

### 🛒 Cart
- `GET /api/cart` – Get user's cart
- `POST /api/cart/add/:bookId` – Add book to cart
- `DELETE /api/cart/remove/:bookId` – Remove book from cart

---

## 🧪 Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/bookstore-api.git
cd bookstore-api

# 2. Install dependencies
npm install

# 3. Configure the .env file
# Create a file named .env in the root and add:
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=your_jwt_secret

# 4. Start the development server
npm run dev

The server will be running at http://localhost:5001.


###🧪 Testing
Use tools like Postman or Thunder Client for manual API testing.📸 Optional: Image Upload (If implemented)
To enable image uploads for books:

Use multer for file handling.

Use Cloudinary or local storage for image hosting.

Add an image field to the Book model and update relevant routes.

###✨ Future Enhancements
Payment gateway integration (e.g., Stripe, Razorpay)

Order management system

Book ratings and reviews

Wishlist feature

Admin dashboard (Frontend)

###🙋‍♀️ Author
Harwinder Kaur
Full Stack Web Developer
Portfolio | LinkedIn | GitHub

###📄 License
This project is licensed under the MIT License.

Let me know if you’d like to include database schemas or example API requests as well.








