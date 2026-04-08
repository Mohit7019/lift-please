# Lift-Please - Architecture Decisions

## Initial decisions
- Project type: production-style DevOps implementation
- Cloud: AWS
- IaC: Terraform with reusable modules
- Container orchestration: Amazon EKS
- Ingress: AWS Load Balancer Controller with ALB
- Artifact registry: Amazon ECR
- Infra CI: GitHub Actions
- App CD: GitLab CI/CD
- Application language: Python (FastAPI) or Node.js (Express) - to be finalized
- Terraform backend: S3 + DynamoDB
- Environments: dev, prod