Budget Nest
Budget Nest is a comprehensive full-stack application designed to guide users through the home-buying process. This application combines a user-friendly frontend with a robust backend to provide a seamless and efficient experience.

Technology Stack
Frontend: Built with React and Vite
Backend: Developed using Node.js
Database: SQL, hosted on AWS RDS
API References
Mortgage Calculator API
US Real Estate Listings API
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v14.x or later recommended)
npm (comes with Node.js)
Setup
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/budget-nest.git
cd budget-nest
Install Dependencies:

Run the following command to install the required dependencies:

bash
Copy code
npm install
Setting Up User Authentication
To incorporate user authentication, follow these steps:

Install Passport.js:

bash
Copy code
npm install passport passport-local express-session
Set Up API Keys:

You will need to configure Passport.js with your authentication strategies and API keys. Create a config folder in the root directory and add a passport.js file for Passport.js configuration. Include your API keys and any other relevant configuration in this file.
