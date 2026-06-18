# FoodBridge Backend API

## Project Overview

FoodBridge is a Food Donation Management System developed using Node.js, Express.js, MongoDB, and Mongoose.

The system connects Restaurants and NGOs to reduce food wastage by facilitating food donations and donation requests.

---

## Features

* Restaurant Management
* NGO Management
* Food Category Management
* Food Donation Management
* Donation Request Management
* Search APIs
* Filter APIs
* Dashboard Analytics
* Reports Module
* API Documentation
* Health Check Endpoint

---

## Technology Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman

---

## API Endpoints

### Restaurants

* POST /api/restaurants
* GET /api/restaurants
* GET /api/restaurants/:id
* PUT /api/restaurants/:id
* DELETE /api/restaurants/:id

### NGOs

* POST /api/ngos
* GET /api/ngos
* GET /api/ngos/:id
* PUT /api/ngos/:id
* DELETE /api/ngos/:id

### Categories

* POST /api/categories
* GET /api/categories
* GET /api/categories/:id
* PUT /api/categories/:id
* DELETE /api/categories/:id

### Donations

* POST /api/donations
* GET /api/donations
* PUT /api/donations/:id
* DELETE /api/donations/:id

### Requests

* POST /api/requests
* GET /api/requests
* PUT /api/requests/:id
* DELETE /api/requests/:id

---

## Dashboard APIs

* GET /api/dashboard
* GET /api/dashboard/recent-donations

---

## Reports APIs

* GET /api/reports/available-donations
* GET /api/reports/pending-requests
* GET /api/reports/restaurant/:restaurantId
* GET /api/reports/ngo/:ngoId

---

## Health Check

GET /health

---

## Author

Narreddy Mokshith Reddy

B.Tech COMPUTER SCIENCE AND ENGINEERING

VIT-AP University