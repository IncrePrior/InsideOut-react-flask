# Welcome to INSIDEOUT!

INSIDEOUT website: https://insideout-rq43.onrender.com/

# Description

INSIDEOUT is a full-stack web application for social media platform for interior and garden design lovers, where they can share photos of beautiful designs.
Every post has only one photo as an ispiration for something particular. Users can post, update, and delete own posts. 
They can also create, update and delete collections of chosen photos as a interest in particular subject.
For example, if you plan a kitchen renovation, create a Kitchen collection of kitchen photos you can use as inspiraton.

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
   



