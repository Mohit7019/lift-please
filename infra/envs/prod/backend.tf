terraform {
  backend "s3" {
    bucket         = "REPLACE_ME"
    key            = "prod/infra/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "lift-please-tf-locks"
    encrypt        = true
  }
}