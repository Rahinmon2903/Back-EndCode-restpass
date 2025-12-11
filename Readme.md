🔐 Password Reset & Authentication System

A full-stack password reset system built using React, Node.js, Express, MongoDB, and Nodemailer.
This project includes:

User Registration

User Login (JWT Authentication)

Forgot Password (Email Verification)

Reset Password (Random Token Stored in DB)

Protected Routing

Fully Responsive UI

🚀 Tech Stack
Frontend

React

Tailwind CSS

Axios

React Router

React Toastify

Backend

Node.js

Express

MongoDB + Mongoose

Nodemailer

Bcrypt

Crypto

📌 Features
✅ User Registration

Stores hashed password using bcrypt

Checks if user already exists

Returns success/error response

✅ User Login

Verifies email and password

Generates JWT token

Stores token in localStorage

Redirects user to welcome page

✅ Forgot Password

User enters email

Backend verifies email

Generates 32-byte random string using crypto

Stores reset token in DB

Sends email with password reset link

✅ Reset Password

User clicks link from email

Page loads with id and token

Backend verifies token from DB

Allows user to set a new password

Clears reset token from DB

Password updated securely

✅ Security

Passwords hashed with bcrypt

Tokens stored safely

Random string ensures security

Reset links are one-time use

✅ UI

Clean, minimal design inspired by ZARA

Fully responsive

Form validation

Toast notifications

🗂️ Folder Structure
project/
│
├── backend/
│   ├── Controller/
│   │   └── authController.js
│   ├── Router/
│   │   └── userRouter.js
│   ├── Model/
│   │   └── userSchema.js
│   ├── Utils/
│   │   └── mailer.js
│   ├── database/
│   │   └── dbConfig.js
│   ├── server.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── Pages/
    │   │   ├── Register.jsx
    │   │   ├── Login.jsx
    │   │   ├── ForgotPassword.jsx
    │   │   ├── ResetPassword.jsx
    │   │   └── Welcome.jsx
    │   ├── Service/api.js
    │   └── App.jsx
    └── package.json

⚙️ Backend Setup
1. Install dependencies
npm install

2. Configure environment variables

Create .env file:

MONGO_URL=your_mongodb_url
PASS_MAIL=your_email@gmail.com
PASS_KEY=your_app_password
SECRET_KEY=your_jwt_secret
PORT=5000

3. Start the backend
npm start

🎨 Frontend Setup
1. Install dependencies
npm install

2. Run frontend
npm start

🔗 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Create new user
POST	/api/auth/login	Login user
POST	/api/auth/forgot-password	Send reset email
POST	/api/auth/reset-password/:id/:token	Reset password
📨 Email Reset Flow

User enters email

Backend generates random token

Email sent to user:

http://localhost:5173/reset-password/:id/:token


User sets new password

Token cleared from DB

🖼️ Screens Included

Register Page

Login Page

Forgot Password Page

Reset Password Page

Post-login Welcome Page

🏁 Conclusion

This project demonstrates a complete and secure password reset system using widely-used modern technologies.
It satisfies all assignment requirements:

Random token storage

Email verification

Token validation

New password update

Clear UI and clean code