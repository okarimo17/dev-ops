# 1-simple-deploy

A basic example of deploying a multi-container application using Docker Compose. This project demonstrates:

- Using Docker Compose to orchestrate frontend and backend services
- Nginx as a reverse proxy for routing traffic
- Simple configuration for local development and testing

## Structure
- `docker-compose.yml`: Defines services and networks
- `nginx/reverse_proxy/`: Nginx configuration templates

## How to Use
1. Run `docker-compose up` to start all services.
2. Access the application via the configured Nginx reverse proxy.

Great to apply the basics of Docker Compose and reverse proxy setup.