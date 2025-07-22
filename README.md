# FeedHope Admin Panel

This project serves as an administrative panel for the FeedHope application, built with **Node.js**, **Express.js**, and **MongoDB**, leveraging the powerful **AdminJS** framework. It provides a user-friendly interface for managing various data models related to the FeedHope platform, including users, donations, requests, campaigns, and more.

---

## ✨ Features

- **AdminJS Integration**: A robust and customizable admin interface.
- **MongoDB & Mongoose**: Seamless integration with MongoDB using Mongoose for ODM.
- **Secure Authentication**: Admin login with bcrypt hashed passwords stored in environment variables.
- **Persistent Sessions**: User sessions are securely stored in MongoDB using `connect-mongo` to prevent data loss on server restarts.
- **Custom Dashboard**: A personalized dashboard view for quick insights.
- **Custom Pages**: Example of a custom "Reports" page for extended functionality.
- **AdminJS Logger**: Tracks all create, edit, and delete operations on specified resources, providing an audit trail.
- **Password Hashing Feature**: Automatically hashes user passwords when created or updated via the AdminJS panel using `@adminjs/passwords`.
- **TypeScript Support**: Project is structured with TypeScript for type safety and better maintainability.

---

## 🚀 Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **ORM**: Mongoose
- **Admin Panel Framework**: AdminJS
- **Authentication**: bcrypt, express-session, connect-mongo

---

## 📋 Prerequisites

Make sure you have the following installed:

- **Node.js** (LTS version recommended, e.g., `v18.x` or `v20.x`)
- **npm** (comes with Node.js)
- **MongoDB Atlas Account** or local MongoDB instance (for connection URI)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd feedhope
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create .env File

```bash
touch .env
```


### 3. Environment Variables Setup

Create a `.env` file in the root of the project:

```bash
touch .env
```

Add the following variables (replace with your actual credentials):

```env
# MongoDB Connection String
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority&appName=XXXXX"

# Session secret
COOKIE_SECRET="YOUR_SUPER_SECRET_COOKIE_KEY"

# AdminJS server port
PORT=3000

# Environment
NODE_ENV=development

# Admin Credentials
ADMIN_EMAIL="your.personal@email.com"
ADMIN_PASSWORD_HASH="$2a$10$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

To generate `ADMIN_PASSWORD_HASH` in Node.js REPL:

```js
const bcrypt = require('bcrypt');
bcrypt.hash('your_secure_password', 10).then(hash => console.log(hash));
```

### 4. Build and Start the Project

```bash
nodemon app.js
```

---

## 🚀 Running the Project

**Development Mode (with Hot-Reloading)**  
Use `ts-node-dev` for automatic reloads during development.

---

## 🌐 Accessing the Admin Panel

Navigate to:

```bash
http://localhost:3001/admin
```

*(Port may vary based on your `.env` configuration)*

---

## 🔑 Admin Credentials

- **Email**: `ADMIN_EMAIL` from `.env`
- **Password**: Plaintext password used to generate the hash

---

## 📁 Project Structure

```bash
feedhope/
├── dist/                        
│   ├── admin/                    
│   │   ├── components/           # Custom React components (e.g., Dashboard, Custom Pages)
│   │   │   ├── MyCustomDashboard.tsx
│   │   ├── models/               # Mongoose model definitions
│   │   │   ├── campaign.js
│   │   │   ├── common.js         # Shared schemas
│   │   │   ├── log.js            # AdminJS Logger model
│   │   │   └── user.js
│   │   ├── auth-provider.js      # Custom authentication logic
│   │   ├── component-loader.js   # Registers custom components
│   │   └── options.js            # AdminJS config
│   ├── db/                       
│   │   └── index.js              # MongoDB connection
│   └── app.js                    # Main Express app
├── node_modules/                 
├── .env                          
├── .gitignore                    
├── package.json                  
└── README.md                    
```

---

## 🛠️ Customization

Modify `src/admin/options.ts` to:

- Add/remove resources (models)
- Customize fields and visibility
- Add custom actions, buttons, or hooks
- Define custom dashboard or pages

The `@adminjs/passwords` plugin is set for the User resource to auto-hash passwords.

---

## ⚠️ Troubleshooting
- `ERR_UNKNOWN_FILE_EXTENSION` / `ERR_MODULE_NOT_FOUND`: Make sure `"type": "module"` is in your `package.json`.

---

## 🤝 Contributing

Feel free to fork, improve, and submit a pull request.

---

## 📄 License

Licensed under the MIT License. See the `LICENSE` file for details.