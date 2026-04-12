# Lift-Please

Lift-Please is a sample pickup-and-drop booking platform built as a production-style DevOps project.

## Planned scope
- AWS infrastructure with Terraform
- Remote Terraform backend with S3 and DynamoDB locking
- EKS-based application deployment
- GitHub Actions for infrastructure CI
- GitLab CI/CD for application deployment
- Helm-based Kubernetes delivery
- Observability with CloudWatch

┌─────────────────────┐    ┌─────────────────┐    ┌──────────────────┐
│     Terraform       │───▶│   AWS EKS       │───▶│   ArgoCD         │
│ (IaC + Backend)     │    │ (Kubernetes)    │    │ (GitOps CD)      │
└──────────┬──────────┘    └──────────┬──────┘    └──────────┬──────┘
           │                          │                       │
           ▼                          ▼                       ▼
┌──────────┴──────────┐    ┌──────────┴──────────┐    ┌──────────┴──────────┐
│ AWS VPC/Subnets/SGs  │    │ Load Balancer (ALB) │    │ Helm Charts (App)   │
│ IAM Roles/OIDC       │    │ AWS Load Balancer   │    │ Deployment/Service  │
│ ECR Repository       │    └─────────────────────┘    │ Ingress             │
└──────────────────────┘                              └──────────────────────┘
                                                                   │
                                                      ┌────────────▼────────────┐
                                                      │   Node.js/Express API   │
                                                      │     lift-please v1.1    │
                                                      │      Port: 3000         │
                                                      └──────────────────────────┘

| Component          | Technology          | Purpose                      |
| ------------------ | ------------------- | ---------------------------- |
| Infrastructure     | Terraform           | Provision VPC, EKS, IAM, ECR |
| Networking         | AWS VPC/Subnets/SGs | Isolated network for EKS     |
| Container Registry | AWS ECR             | Store Docker images          |
| Orchestration      | Amazon EKS          | Managed Kubernetes           |
| GitOps CD          | ArgoCD              | Git → K8s deployments        |
| Packaging          | Helm                | Templated K8s manifests      |
| Load Balancing     | AWS ALB             | External HTTP routing        |
| Application        | Node.js + Express   | REST API service             |


End-to-End Workflow Summary
1. terraform apply → EKS + VPC + ECR
2. docker build → push v1.1.0 to ECR  
3. git commit → ArgoCD detects change
4. ArgoCD → renders Helm → deploys K8s
5. New ReplicaSet → healthy pods
6. ALB → routes traffic → Express API

Architecture Flow
GitHub (Source of Truth) 
  ↓ git push
ArgoCD (Controller) 
  ↓ renders Helm
Kubernetes (EKS) 
  ↓ Deployment → Pods
AWS ALB 
  ↓ routes HTTP
Node.js API (lift-please)
  ↓ serves requests

  


                                                      
