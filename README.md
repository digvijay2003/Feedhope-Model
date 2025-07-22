FeedHope Admin Panel
This project serves as an administrative panel for the FeedHope application, built with Node.js, Express.js, and MongoDB, leveraging the powerful AdminJS framework. It provides a user-friendly interface for managing various data models related to the FeedHope platform, including users, donations, requests, campaigns, and more.

✨ Features
AdminJS Integration: A robust and customizable admin interface.

MongoDB & Mongoose: Seamless integration with MongoDB using Mongoose for ODM.

Secure Authentication: Admin login with bcrypt hashed passwords stored in environment variables.

Persistent Sessions: User sessions are securely stored in MongoDB using connect-mongo to prevent data loss on server restarts.

Custom Dashboard: A personalized dashboard view for quick insights.

Custom Pages: Example of a custom "Reports" page for extended functionality.

AdminJS Logger: Tracks all create, edit, and delete operations on specified resources, providing an audit trail.

Password Hashing Feature: Automatically hashes user passwords when created or updated via the AdminJS panel using @adminjs/passwords.

TypeScript Support: Project is structured with TypeScript for type safety and better maintainability.

🚀 Technologies Used
Backend: Node.js, Express.js

Database: MongoDB

ORM: Mongoose

Admin Panel Framework: AdminJS

Authentication: bcrypt (for password hashing), express-session, connect-mongo

📋 Prerequisites
Before you begin, ensure you have the following installed on your system:

Node.js: (LTS version recommended, e.g., v18.x or v20.x)

npm: (Comes with Node.js)

MongoDB Atlas Account: Or a local MongoDB instance. You'll need a MongoDB Connection String (URI).

⚙️ Setup Instructions
Follow these steps to get the project up and running on your local machine.

1. Clone the Repository
git clone <your-repository-url>
cd feedhope

2. Install Dependencies
Navigate into the project directory and install all required Node.js packages:

npm install

3. Environment Variables Setup
Create a .env file in the root of your project directory (feedhope/). This file will store your sensitive configuration details.

touch .env

Open the .env file and add the following variables. Replace the placeholder values with your actual credentials.

# MongoDB Connection String (from MongoDB Atlas or your local instance)
DATABASE_URL="mongodb+srv://<your-username>:<your-password>@<your-cluster-url>/<your-database-name>?retryWrites=true&w=majority&appName=XXXXX"

# Secret key for signing session cookies. Generate a strong, random string.
# Example: PzTSSq6VnPgEVT8bs2cWIID4At0YTXkP (use your own unique string)
COOKIE_SECRET="YOUR_SUPER_SECRET_COOKIE_KEY"

# Port for the AdminJS server to run on
PORT=3000

# Node.js environment mode (set to 'production' for deployment)
NODE_ENV=development

# Admin User Credentials for AdminJS Login
# ADMIN_EMAIL should be your personal email
ADMIN_EMAIL="your.personal@email.com"
# ADMIN_PASSWORD_HASH should be a bcrypt hash of your desired password.
# NEVER put your plaintext password here.
# Generate a hash using Node.js REPL:
# node
# > const bcrypt = require('bcrypt');
# > bcrypt.hash('your_secure_password', 10).then(hash => console.log(hash));
# Copy the output hash here:
ADMIN_PASSWORD_HASH="$2a$10$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

4. Build the Project 
nodemon app.js

🚀 Running the Project
You have two main ways to run the project: for development (with hot-reloading) or for production.

Development Mode (with Hot-Reloading)
For development, it's recommended to use ts-node-dev for automatic restarts on code changes.

Start the AdminJS server.

🌐 Accessing the Admin Panel
Once the server is running (either in development or production mode), open your web browser and navigate to:

http://localhost:3001/admin

(The port might differ if you changed the PORT variable in your .env file).

🔑 Admin Credentials
Use the credentials you configured in your .env file:

Email: The ADMIN_EMAIL you set (e.g., your.personal@email.com)

Password: The plaintext password that corresponds to the ADMIN_PASSWORD_HASH you generated.

📁 Project Structure
feedhope/
├── dist/                        
│   ├── admin/                    # AdminJS specific configurations
│   │   ├── components/           # Custom React components (e.g., Dashboard, Custom Pages)
│   │   │   ├── MyCustomDashboard.tsx
│   │   ├── models/               # Mongoose model definitions (TypeScript)
│   │   │   ├── campaign.jsts
│   │   │   ├── common.js         # Shared schemas (image, quantity, geo, address)
│   │   │   ├── log.js            # Model for AdminJS Logger
│   │   │   └── user.js           # User model
│   │   ├── auth-provider.js      # AdminJS custom authentication logic
│   │   ├── component-loader.js   # Registers custom React components for AdminJS
│   │   └── options.js            # Main AdminJS configuration (resources, features, pages)
│   ├── db/                       # Database connection setup
│   │   └── index.js              # Mongoose connection initialization
│   └── app.js                    # Main Express.js application entry point
├── node_modules/                 # Installed Node.js packages
├── .env                          # Environment variables
├── .gitignore                    # Specifies intentionally untracked files to ignore
├── package.json                  # Project metadata and dependencies
└── README.md                     # This file

🛠️ Customization
This Admin Panel is highly customizable. Here are some key areas:

src/admin/options.ts: This is your central configuration file for AdminJS. You can:

Add/remove resources (your Mongoose models).

Configure resource properties (visibility, labels, types).

Add custom actions (buttons with backend logic).

Add hooks (before, after) to intercept CRUD operations.

Define custom pages and dashboard components.

@adminjs/passwords: Configured for the User resource in src/admin/options.ts to handle password hashing automatically.

⚠️ Troubleshooting
TypeError: router.use is not a function: Ensure you are passing express.Router() as the fourth argument to buildAuthenticatedRouter in src/app.ts.

TypeError: Cannot read properties of undefined (reading 'add'): Verify that componentLoader is correctly passed to loggerFeature and createLoggerResource in src/admin/options.ts.

ERR_UNKNOWN_FILE_EXTENSION / ERR_MODULE_NOT_FOUND:

Ensure type: "module" is present in your package.json.

🤝 Contributing
Feel free to fork this repository, make improvements, and submit pull requests.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details (if you have one, otherwise remove this section).