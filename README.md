
# Tech Blog - Model-View-Controller (MVC) Challenge

## Description

This project is a CMS-style blog application where developers can publish blog posts and comment on other developers' posts. Built following the Model-View-Controller (MVC) architectural pattern, the app uses **Handlebars.js** as the templating language, **Sequelize** as the ORM for interacting with a **PostgreSQL** database, and **express-session** for authentication. The site allows users to create accounts, log in, publish blog posts, and engage with other posts through comments. 

The application is deployed on **Render** for hosting.

## Table of Contents
- [Tech Blog - Model-View-Controller (MVC) Challenge](#tech-blog---model-view-controller-mvc-challenge)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Example](#example)
  - [Features](#features)
  - [Technologies](#technologies)
  - [License](#license)
  
## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/tech-blog.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tech-blog
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory with the following variables:
     ```
     DB_NAME='your-database-name'
     DB_USER='your-database-username'
     DB_PASSWORD='your-database-password'
     DB_HOST='localhost'
     DB_PORT=5432
     SESSION_SECRET='your-secret'
     ```
5. Set up the PostgreSQL database:
   ```bash
   npm run seed
   ```

6. Start the application:
   ```bash
   npm start
   ```

## Usage

Once the application is installed and running, visit the homepage to view existing blog posts or create an account to start posting your own content. The app offers the following functionalities:

- Sign up for an account and log in.
- Create, view, update, and delete blog posts.
- Comment on other users’ posts.
- Log out and manage your session.

### Example

1. **Homepage**: Displays existing blog posts.
2. **Dashboard**: View and manage your blog posts.
3. **Post Page**: View post details and leave comments.
4. **User Authentication**: Secure login and session management.

## Features

- **Authentication**: Users can sign up and log in securely using **bcrypt** for password hashing and **express-session** for managing sessions.
- **Blog Post Management**: Users can create, update, delete, and view blog posts. 
- **Commenting**: Logged-in users can leave comments on posts.
- **Responsive UI**: The user interface adapts to different screen sizes.
- **Session Management**: User sessions expire after a set idle time, prompting users to log back in.

## Technologies

- **Node.js**
- **Express.js**
- **Handlebars.js** (with `express-handlebars`)
- **Sequelize ORM**
- **PostgreSQL**
- **bcrypt**
- **express-session**
- **dotenv**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
