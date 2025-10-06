# 5-k8s-crud-app

A full-stack CRUD application deployed on Kubernetes, demonstrating advanced concepts:

- Use of ConfigMaps and Secrets for configuration management
- Persistent Volumes for postgres database storage.
- Multi-service deployment (PostgreSQL, backend API, frontend UI)
- Ingress configuration for external access: LoadBalancer, ReverseProxy, can also extended to make API Gateway.

## Structure
- `0-config-map.yaml`, `0-secrets.yaml`: App configuration and secrets
- `1-pg-db.yaml`: PostgreSQL deployment and persistent storage
- `2-notes-back.yaml`: Backend API deployment
- `3-notes-front.yaml`: Frontend deployment
- `4-reverse-ingrix.yaml`: Ingress resource for routing
- `0-volumes/`: Persistent volume and claim definitions

## How to Use
1. First apply '1-persistent-pg-volume-0.yaml' and '1-persistent-pg-volume-1-claim.yaml' inside '0-volumes' folder.
1. Apply all manifests in order using the command: `kubectl apply -f ./`
2. Access the app via the configured ingress or service at (http://localhost).

Practicing real-world Kubernetes deployments with stateful services.