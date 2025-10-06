# shared/simple-crud

A simple full-stack CRUD application, containerized for use in Docker Compose or Kubernetes environments.

- **front/**: React frontend (Vite) | Required build-arg: BACKEND_URL=/api/v1/ 
- **server/**: Node.js backend with Prisma ORM
- **reverse-proxy/**: Nginx configuration for reverse proxy
- **Postgres**: Postgres docker image as database storage

## Concepts
- Full-stack app development and deployment
- API integration with frontend and backend
- Using Prisma for database access
- Nginx as a reverse proxy

Great for learning end-to-end app deployment in modern DevOps workflows.