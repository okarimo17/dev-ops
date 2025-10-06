# 2-simple-deploy-load-balancer

This project extends the basic Docker Compose setup by introducing Nginx as a load balancer. It demonstrates:

- Load balancing HTTP traffic across multiple backend instances
- Using Docker Compose for multi-container orchestration
- Custom Nginx configuration for load balancing

## Structure
- `docker-compose.yml`: Service definitions
- `nginx/reverse_proxy/`: Nginx load balancer configuration

## How to Use
1. Run `docker-compose up` to start services.
2. Nginx will distribute requests among backend containers.
3. Each time you open the app you can notice different hostnames (due nginx load balancer).

Useful for understanding load balancing in containerized environments.