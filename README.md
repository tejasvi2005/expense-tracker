💰 Smart Expense Tracker
A full-stack MERN application for managing personal finances with AI-powered insights, data visualization, and smart budget tracking.

🚀 Live Demo
Frontend: http://localhost:3000/

✨ Features
🔧 Core Features
✅ Add Expenses - Track spending with categories
✅ Delete Expenses - Remove unwanted entries
✅ Real-time Calculations - Automatic total spending
✅ Budget Management - Set and track monthly budgets
✅ Progress Visualization - Color-coded budget progress bar
✅ Category-wise Tracking - Food, Transport, Entertainment, Shopping, Bills, Other

📊 Advanced Analytics
🎯 Data Visualization Dashboard - Interactive charts and graphs
📈 Spending Analytics - Category-wise pie charts and daily trends
📉 Progress Tracking - Visual budget progress bar with color alerts
📱 Statistics Overview - Total categories, highest spending, average daily

🤖 AI-Powered Insights
🧠 Smart Analysis - AI-driven spending pattern recognition
💡 Personalized Recommendations - Actionable financial advice
🔮 Predictive Insights - Future spending trends and savings opportunities
⚡ Real-time Analysis - Instant insights based on your expenses

📤 Export & Reporting
📄 CSV Export - Download expense data for external analysis
📊 PDF Reports - Professional expense reports
🗂️ Data Backup - Secure your financial data locally
📋 Printable Summaries - Clean, formatted expense lists

🎯 Smart Features
📊 Budget Alerts - Visual warnings when over budget
💰 Remaining Calculation - Real-time budget remaining
🎨 Responsive Design - Works on all devices
⚡ Fast Performance - Optimized React components
🔍 Tab Navigation - Easy switching between features

🛠️ Tech Stack
Frontend
React - Modern UI framework with hooks

Recharts - Data visualization library

CSS3 - Advanced styling with gradients and animations

Axios - HTTP client for API communication

Backend
Node.js - Runtime environment

Express.js - Web application framework

MongoDB - NoSQL database with Mongoose ODM

JWT - Authentication-ready architecture

OpenAI API - AI-powered insights integration

CORS - Cross-origin resource sharing

📥 Installation & Setup
Prerequisites
Node.js (v14 or higher)

MongoDB Atlas account

Git

1. Clone the Repository
bash
git clone https://github.com/tejasvi2005/expense-tracker.git
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
OPENAI_API_KEY=your_openai_api_key_optional
Start backend:

bash
npm run dev
3. Frontend Setup
bash
cd frontend
npm install
npm install recharts jspdf html2canvas
npm start
4. Access Application
Frontend: http://localhost:3000

Backend API: http://localhost:5000

🗂️ Project Structure
text
expense-tracker/
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── server.js        # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/   # Modular components
│   │   │   ├── Charts.js        # Data visualization
│   │   │   ├── Export.js        # Export functionality
│   │   │   └── AIInsights.js    # AI-powered analysis
│   │   ├── App.js       # Main application
│   │   ├── App.css      # Styling
│   │   └── index.js     # Entry point
│   └── package.json
└── README.md
📡 API Endpoints
Method	Endpoint	Description
GET	/api/expenses	Get all expenses
POST	/api/expenses	Add new expense
DELETE	/api/expenses/:id	Delete expense
POST	/api/ai/insights	Get AI-powered financial insights
🎯 Usage Examples
Managing Expenses
javascript
{
  "title": "Grocery Shopping",
  "amount": 1500,
  "category": "Food",
  "description": "Weekly groceries"
}
Budget Tracking
Set monthly budget with progress visualization

Color-coded alerts when approaching budget limits

Real-time remaining balance calculations

Data Visualization
Interactive pie charts for category distribution

Bar charts for daily spending trends

Summary statistics and analytics

AI Insights
Automated spending pattern analysis

Personalized financial recommendations

Savings opportunities identification

Export Features
Download CSV files for data analysis

Generate PDF reports for record keeping

Professional expense summaries

🚀 Deployment
Frontend (Vercel)
bash
npm run build
# Deploy dist folder to Vercel
Backend (Render/Railway)
Connect GitHub repository

Set environment variables

Deploy automatically

Database (MongoDB Atlas)
Cloud-based MongoDB deployment

Automatic backups and scaling

Secure connection strings

📝 Future Enhancements
Multi-user Support - Family/team expense sharing

Recurring Expenses - Automated monthly subscriptions

Receipt Scanning - OCR-based expense tracking

Mobile App - React Native version

Investment Tracking - Portfolio management

Bill Reminders - Automated payment notifications

👨‍💻 Developer
Tejasvi Tumuluri

GitHub: https://github.com/tejasvi2005/expense-tracker

LinkedIn: https://www.linkedin.com/in/sai-tejasvi-tumuluri-6371a0272/

🙏 Acknowledgments
Icons from Shields.io

Charts from Recharts

AI Insights powered by OpenAI

UI inspiration from modern fintech applications

MongoDB Atlas for cloud database

⭐ Star this repo if you find it helpful!

📞 Support
If you have any questions or run into issues, please open an issue on GitHub or contact me directly.

Happy Coding! 🚀
