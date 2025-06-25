# Price of Power Portal

A React-based portal developed for the CSI Challenge at IIT (BHU), addressing community awareness and empowerment regarding uranium mining in Jharkhand, particularly by UCIL.

## 🌍 Purpose

To:
- Empower affected communities with knowledge about their rights
- Enable grievance submission and tracking
- Share real stories and impacts of mining
- Act as a digital advocacy and awareness tool

## 🛠️ Features

- 📜 **Story Section**: Real community voices in visual form
- 🧾 **Grievance Form**: Users can submit complaints or concerns
- 📊 **History**: View grievance submission history
- 🧠 **Know Your Rights**: Multilingual emotional content + visuals
- 🗞 **News**: Live bulletin of updates
- 🏭 **About UCIL**: Background and context
- 📱 **Responsive Design**: Mobile-optimized with carousel for rights section
- 🌐 **Multilingual Support**: English and Hindi toggle

## 📦 Tech Stack

- **ReactJS** (Frontend)
- **HTML/CSS** (no frameworks like Tailwind used)
- **React Router** (Navigation)
- **Manual CSS Styling** (for full control)
- **Image Assets** in `/public/images/`

## 🧩 Folder Structure

price-of-power-portal/
│
├── public/
│ └── images/
│ ├── about-bg.jpg
│ └── rights/
│ ├── right1.jpg
│ ├── right2.jpg
│ └── right3.jpg
│
├── src/
│ ├── components/
│ │ ├── About.jsx
│ │ ├── Impact.jsx
│ │ ├── News.jsx
│ │ ├── Rights.jsx
│ │ ├── Story.jsx
│ │ ├── History.jsx
│ │ └── GrievanceForm.jsx
│ ├── App.js
│ └── index.js


## 🚀 How to Run Locally

1. Clone the repository:
    git clone https://github.com/your-username/price-of-power-portal.git
    cd price-of-power-portal

2. Install dependencies:
    npm install

4. Run the development server:
    npm start
    Visit http://localhost:3000

