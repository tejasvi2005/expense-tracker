💰 Smart Expense Tracker
A full-stack MERN application for managing personal finances with smart budget tracking and expense management.

https://img.shields.io/badge/MERN-Full--Stack-green https://img.shields.io/badge/React-18.2-blue https://img.shields.io/badge/Node.js-Express-brightgreen https://img.shields.io/badge/MongoDB-Database-green

🚀 Live Demo
http://localhost:3000/

📸 Screenshots
(Add your screenshots here)

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/745a7ad3-f96b-4209-8e6d-c35b49e57334" />

✨ Features
🔧 Core Features
✅ Add Expenses - Track spending with categories

✅ Delete Expenses - Remove unwanted entries

✅ Real-time Calculations - Automatic total spending

✅ Budget Management - Set and track monthly budgets

✅ Progress Visualization - Color-coded budget progress bar

✅ Category-wise Tracking - Food, Transport, Entertainment, etc.

🎯 Smart Features
📊 Budget Alerts - Visual warnings when over budget

💰 Remaining Calculation - Real-time budget remaining

🎨 Responsive Design - Works on all devices

⚡ Fast Performance - Optimized React components

🛠️ Tech Stack
Frontend
React - UI framework

CSS3 - Styling with modern features

Axios - HTTP client for API calls

Backend
Node.js - Runtime environment

Express.js - Web framework

MongoDB - Database (Atlas Cloud)

Mongoose - ODM for MongoDB

JWT - Authentication ready

CORS - Cross-origin resource sharing

📥 Installation & Setup
Prerequisites
Node.js (v14 or higher)

MongoDB Atlas account

Git

1. Clone the Repository
bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
2. Backend Setup
bash
cd backend
npm install
Create .env file:

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start backend:

bash
npm run dev
3. Frontend Setup
bash
cd frontend
npm install
Start frontend:

bash
npm start
4. Access Application
Frontend: http://localhost:3000

Backend API: http://localhost:5000

🗂️ Project Structure
text
expense-tracker/
├── backend/
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── server.js        # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js       # Main component
│   │   ├── App.css      # Styles
│   │   └── index.js     # Entry point
│   └── package.json
└── README.md
📡 API Endpoints
Method	Endpoint	Description
GET	/api/expenses	Get all expenses
POST	/api/expenses	Add new expense
DELETE	/api/expenses/:id	Delete expense
🎯 Usage Examples
Setting a Budget
Enter your monthly budget in the input field

Click "Update" to set the budget

Watch the progress bar fill as you add expenses

Adding Expenses
javascript
{
  "title": "Grocery Shopping",
  "amount": 1500,
  "category": "Food",
  "description": "Weekly groceries"
}
Budget Alerts
Green: Within budget

Red: Over budget with warning message

🚀 Deployment
Frontend (Vercel)
bash
npm run build
# Deploy dist folder to Vercel
Backend (Render/Railway)
Connect GitHub repository

Set environment variables

Deploy automatically

📝 Future Enhancements
User Authentication

Data Visualization Charts

Export to CSV/PDF

Recurring Expenses

Mobile App Version

AI-powered Insights

👨‍💻 Developer
Your Name

GitHub: https://github.com/tejasvi2005/expense-tracker

LinkedIn: https://www.linkedin.com/in/sai-tejasvi-tumuluri-6371a0272/

🙏 Acknowledgments
Icons from Shields.io

UI inspiration from modern fintech apps

MongoDB Atlas for cloud database

⭐ Star this repo if you find it helpful!

📞 Support
If you have any questions or run into issues, please open an issue on GitHub or contact me directly.

Happy Coding! 🚀

