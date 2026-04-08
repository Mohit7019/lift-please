variable "aws_region" {
  description = "AWS region for bootstrap resources"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project name"
  type        = string
  default     = "lift-please"
}

variable "environment" {
  description = "Bootstrap environment label"
  type        = string
  default     = "shared"
}

variable "owner" {
  description = "Owner or team name"
  type        = string
  default     = "platform-team"
}