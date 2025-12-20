🔐 Password Reset & Authentication System (Backend)

A secure backend authentication and password reset system built with Node.js, Express, MongoDB, and Nodemailer.
This API handles user registration, login, forgot password, and secure password reset using random tokens stored in the database.

🚀 Tech Stack

Node.js

Express.js

MongoDB + Mongoose

JWT (Authentication)

Bcrypt (Password hashing)

Nodemailer (Email service)

Crypto (Random reset tokens)

✨ Features
✅ User Registration

Registers new users

Passwords hashed using bcrypt

Prevents duplicate user creation

✅ User Login

Verifies email & password

Generates JWT token

Returns token to frontend

✅ Forgot Password

Verifies registered email

Generates a 32-byte random token

Stores reset token in database

Sends reset link via email

✅ Reset Password

Validates user ID and reset token

Allows setting a new password

Hashes and updates password

Clears reset token after use (one-time link)

✅ Security

Encrypted passwords

Secure token handling

One-time reset links

Environment-based secrets

📂 Folder Structure
backend/
├── Controller/
│   └── authController.js
├── Router/
│   └── userRouter.js
├── Model/
│   └── userSchema.js
├── Utils/
│   └── mailer.js
├── database/
│   └── dbConfig.js
├── index.js
└── .env

⚙️ Environment Variables

Create a .env file in the backend root:

PORT=5000
MONGO_URL=your_mongodb_url
SECRET_KEY=your_jwt_secret
PASS_MAIL=your_email@gmail.com
PASS_KEY=your_email_app_password

▶️ Backend Setup
1️⃣ Install dependencies
npm install

2️⃣ Start the server
npm start


Server runs at:

http://localhost:5000

🔗 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
POST	/api/auth/forgot-password	Send password reset email
POST	/api/auth/reset-password/:id/:token	Reset password
📨 Password Reset Flow

User submits email

Backend verifies email

Random token generated using crypto

Token stored in database

Reset link emailed to user

User sets new password

Token cleared from DB

Example reset link:

http://localhost:5173/reset-password/:id/:token

🏁 Conclusion

This backend provides a complete, secure, and production-ready authentication system with password reset functionality.
It fulfills all assignment requirements and follows best security practices.

👤 Author

Rahin Mon S