# Distributed Task Queue

## Overview

Distributed Task Queue is a MERN stack application designed to process time-consuming operations asynchronously using a queue-based architecture. Instead of executing tasks directly in the main application thread, tasks are added to a queue and processed by background workers. This approach improves application performance, scalability, and user experience.

The system enables users to create different types of tasks and monitor their execution status through a simple and intuitive interface.

---

## Problem Statement

In traditional web applications, long-running operations such as sending emails, generating reports, or performing heavy calculations can slow down user requests and reduce system performance.

A Distributed Task Queue solves this problem by:

* Separating task execution from user requests
* Processing jobs asynchronously
* Improving application responsiveness
* Supporting scalable background processing
* Handling multiple tasks efficiently

---

## Key Features

### User Authentication

* Secure user registration and login
* JWT-based authentication
* Protected routes for authorized users

### Task Management

* Create and submit tasks
* View submitted tasks
* Track task execution status
* Monitor completed and pending jobs

### Asynchronous Processing

* Tasks are processed in the background
* Users do not need to wait for task completion
* Improved application performance

### Queue-Based Architecture

* Redis is used as a message broker
* BullMQ manages job queues and workers
* Reliable task scheduling and processing

---

## Supported Task Types

### Email Task

Allows users to submit email jobs that are processed asynchronously. The worker handles email delivery independently of the main application.

### Number Task

Processes computational tasks such as factorial calculations. Heavy calculations are executed in the background and results are stored after completion.

### Notification / Message Task

Handles message-based jobs and notifications through the task queue system.

---

## How the System Works

1. A user creates a task through the frontend.
2. The backend validates the request.
3. Task information is stored in MongoDB.
4. The task is pushed into a Redis queue.
5. A worker process retrieves the task from the queue.
6. The worker executes the task.
7. The task status is updated.
8. Users can view task progress and results.

---

## Technology Stack

### Frontend

* React.js
* React Router
* Axios
* React Hook Form
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

### Queue Management

* Redis
* BullMQ

---

## System Components

### Client Application

Provides the user interface for task creation, management, and monitoring.

### API Server

Handles authentication, task creation, task retrieval, and communication with the queue.

### Redis Queue

Acts as the intermediary layer between producers and workers, storing jobs until they are processed.

### Worker Service

Processes queued jobs independently from the main application.

### Database

MongoDB stores user information, task details, execution status, and results.

---

## Benefits of the Project

* Demonstrates real-world distributed system concepts
* Improves application responsiveness
* Supports scalable task execution
* Reduces load on the main server
* Enables reliable background processing
* Provides practical experience with Redis and BullMQ

---

## Learning Outcomes

This project showcases:

* MERN Stack Development
* REST API Design
* Authentication and Authorization
* Redis Integration
* Queue-Based System Design
* Background Job Processing
* Worker Architecture
* Asynchronous Programming
* MongoDB Data Modeling
* Scalable Web Application Development
