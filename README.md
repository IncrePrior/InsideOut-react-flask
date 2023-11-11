# Welcome to INSIDEOUT!

INSIDEOUT website: https://insideout-rq43.onrender.com/

# Description

INSIDEOUT: Unleash Your Design Inspiration

Welcome to INSIDEOUT, the vibrant and dynamic full-stack web application that transforms social media into a canvas for interior and garden design enthusiasts. Dive into a world where each post is a masterpiece, a singular photo that sparks creativity and showcases the essence of extraordinary design.

Features:

🌟 Inspiration Unleashed: INSIDEOUT is your gateway to a visual feast of stunning designs. Share and explore one-of-a-kind photos that serve as beacons of inspiration for your next project.

💡 Limitless Creativity: Express your unique style by posting, updating, and deleting your own design inspirations. Every post is a canvas for your imagination.

🏡 Collections, Tailored to You: Take your interests to the next level by curating collections. Planning a kitchen renovation? Create a 'Kitchen Wonders' collection filled with jaw-dropping kitchen designs.

🚀 Seamless Experience: Enjoy a user-friendly platform that empowers you to effortlessly create, update, and delete collections with just a few clicks.

Whether you're a design maven or just getting started on your decor journey, INSIDEOUT is where your creativity takes center stage. Let your design dreams run wild!

# Technologies Used:

 - Backend: Python, Flask, SQLAlchemy
 - Frontend: React, Redux, Javascript, HTML, CSS
 - Database: PostgreSQL
 - Deployment: Docker
 - Hosting: Render
 - Photos hosting: AWS

# Landing Page 

<img width="1424" alt="Screenshot 2023-11-10 at 10 49 28 PM" src="https://github.com/Mirabordem/InsideOut/assets/130639536/c1114530-972a-4a96-8dc0-e6a1a3a704c6">

# Home Page

<img width="1422" alt="Screenshot 2023-11-10 at 10 50 04 PM" src="https://github.com/Mirabordem/InsideOut/assets/130639536/ded68297-dbe2-4b73-b7ef-9f9211be9298">

# Single Post Page

<img width="1426" alt="Screenshot 2023-11-10 at 10 50 49 PM" src="https://github.com/Mirabordem/InsideOut/assets/130639536/279341e6-115e-4a88-854a-093c23d68874">

# Single Collection Page

<img width="1428" alt="Screenshot 2023-11-10 at 10 51 03 PM" src="https://github.com/Mirabordem/InsideOut/assets/130639536/017a14fc-b667-4cb2-8d62-e4d465d3ed2f">

# Form Example

<img width="1423" alt="Screenshot 2023-11-10 at 10 51 20 PM" src="https://github.com/Mirabordem/InsideOut/assets/130639536/9f02da3d-ba0d-4f0b-97a6-f3b0e4c32ec3">


## Installation Instructions

1. Install dependencies
```bash
pipenv install -r requirements.txt
```
2. Create a **.env** file based on the example with proper settings for your development environment

4. Replace the value for `SCHEMA` with a unique name, **making sure you use the snake_case convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

```bash
pipenv shell
```
```bash
flask db upgrade
```
```bash
flask seed all
```
```bash
flask run
```

7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.


# Wiki Pages

Created by: Miroslawa (Mira) Borkowska

Home:
https://github.com/Mirabordem/InsideOut/wiki

Database Schema:
https://github.com/Mirabordem/InsideOut/wiki/Database-Schema

Wireframe:
https://github.com/Mirabordem/InsideOut/wiki/Wireframes

User Stories:
https://github.com/Mirabordem/InsideOut/wiki/User-Stories
   



