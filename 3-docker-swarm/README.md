# 3-docker-swarm

A demonstration of deploying applications using Docker Swarm. This project covers:

- Docker Swarm stack deployment with `docker-stack.yml`
- Nginx as a reverse proxy for service routing
- Managing secrets securely with Docker Swarm

## Structure
- `docker-stack.yml`: Swarm stack definition
- `nginx/reverse_proxy/`: Nginx configuration
- `secrets/`: Example secret files (e.g., database password)

## How to Use
1. Initialize Docker Swarm: `docker swarm init`
2. Build the front (karimo17/front-rc) and backend images (karimo17/srv-nd) found in : `/shared/simple-1`
3. Deploy the stack: `docker stack deploy -c docker-stack.yml <stack_name>`

Scale and edit the deployed stack using commands found in /commands.txt file.