output "terraform_state_bucket" {
  value       = aws_s3_bucket.tf_state.bucket
  description = "Terraform state bucket name"
}

output "terraform_lock_table" {
  value       = aws_dynamodb_table.tf_lock.name
  description = "Terraform lock table name"
}

output "aws_account_id" {
  value       = data.aws_caller_identity.current.account_id
  description = "Current AWS account ID"
}