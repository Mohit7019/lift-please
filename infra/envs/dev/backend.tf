terraform {
  backend "s3" {
    bucket         = "lift-please-tfstate-503668361641-us-east-1"
    key            = "dev/infra/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "lift-please-tf-locks"
    encrypt        = true
  }
}