# 4-simple-k8s

A simple example of deploying applications on Kubernetes. This project demonstrates:

- Kubernetes Deployments and Services for frontend and backend
- Basic YAML manifests for quick setup

## Structure
- `backend-depl.yaml`, `backend-svc.yaml`: Backend deployment and service (build image `/shared/simple-1/server/` as 'full-nd')
- `front-depl.yaml`, `front-svc.yaml`: Frontend deployment and service (build image `/shared/simple-1/front/` as 'full-front')

## How to Use
1. Apply manifests: `kubectl apply -f .`
2. Access services via Kubernetes NodePort or ClusterIP as configured (tunnel if using minikube, or cluster ip).

The aim is to learn the basics of Kubernetes resource definitions.