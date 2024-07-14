# 🖼️ Image Annotation Web Service

## Table of Contents

- [Overview](#overview)
- [Local Setup 👨‍💻](#local-setup)
  - [Virtual Environment Setup](#virtual-environment-setup)
  - [Installing Dependencies and Running the Server](#installing-dependencies-and-running-the-server)
- [Frontend Setup 🌐](#frontend-setup)
- [API Documentation](#api-documentation)
  - [Annotation Endpoints](#annotation-endpoints)
  - [Stats Endpoints](#stats-endpoints)

![-----------------------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## Overview

Image Annotation Web Service is designed to facilitate image annotation tasks. It provides a RESTful API for managing annotations, categories, and statistics.

**Features:**
1. Users can annotate images with categories.
2. Users can retrieve annotation statistics based on categories.
4. Integrated with React.js for frontend interactions.
5. Detailed API documentation for seamless integration.

**Testing Endpoints:**
- To test the API endpoints, you can import the [Postman collection](AIC.postman_collection.json) provided in the repository and try the endpoints in Postman.

**API Flow:**
1. **Annotate Image:**
   - Use the `/api/v0/image_annotation/` endpoint to create a new annotation by providing image id, category, and annotation data.

2. **Retrieve Annotation Statistics:**
   - Use the `/api/v0/stats/` endpoint to get statistics of annotations by category.

## Getting Started

## Local Setup

1. Clone the repository and move to the project directory:

    ```bash
    git clone https://github.com/Mohamad-Aboda/Image-Annotation-Web-Service
    cd Image-Annotation-Web-Service
    ```

## Virtual Environment Setup

2. Install `pipenv` if you don't have it installed:

    ```bash
    pip install pipenv
    ```

3. Create and activate the virtual environment using `pipenv`:

    ```bash
    pipenv shell
    ```

## Installing Dependencies and Running the Server

4. Install dependencies:

    ```bash
    pipenv install
    ```

5. Apply migrations:

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

6. Run server:

    ```bash
    python manage.py import_images
    python manage.py runserver
    ```

    The application will be accessible at [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

## Frontend Setup

To run the React.js frontend for the Image Annotation Web Service, follow these steps:

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm run start
    ```

    The frontend application will be accessible at [http://localhost:3000/](http://localhost:3000/)

## API Documentation

Django Image Annotation Web Service is built with Django and Django REST Framework.

Explore the API.

## Annotation Endpoints

| Method | Endpoint                  | Description                  | Body                                   | Header              | Response          |
|--------|---------------------------|------------------------------|----------------------------------------|---------------------|-------------------|
| POST   | `/api/v0/image_annotation/`    | Classify a new annotation      | (image, category, extra_text) | - | New annotation    |
| GET    | `/api/v0/image_annotation/`    | List random image to annotate         | -                                      | - | Random image to annotate |

![-----------------------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## Stats Endpoints

| Method | Endpoint            | Description                            | Body | Header              | Response          |
|--------|---------------------|----------------------------------------|------|---------------------|-------------------|
| GET    | `/api/v0/stats/`    | Retrieve annotation statistics         | -    | - | All statistics data   |
| GET    | `/api/v0/stats/?category=cat`    | Retrieve annotation statistics         | -    | - | Cat statistics data   |
| GET    | `/api/v0/stats/?category=dog`    | Retrieve annotation statistics         | -    | - | Dog statistics data   |
| GET    | `/api/v1/stats/?category=neither`    | Retrieve annotation statistics         | -    | - | Neither statistics data   |


![-----------------------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
