aws_region   = "us-east-1"
project_name = "lift-please"
environment  = "dev"
owner        = "platform-team"

vpc_cidr             = "10.10.0.0/16"
availability_zones   = ["us-east-1a", "us-east-1b"]
public_subnet_cidrs  = ["10.10.1.0/24", "10.10.2.0/24"]
private_subnet_cidrs = ["10.10.11.0/24", "10.10.12.0/24"]

enable_nat_gateway = true
single_nat_gateway = true

cluster_name        = "lift-please-dev-eks"
cluster_version     = "1.30"
node_group_name     = "general"
node_instance_types = ["t3.medium"]
node_desired_size   = 2
node_min_size       = 2
node_max_size       = 3
capacity_type       = "ON_DEMAND"
disk_size           = 30

