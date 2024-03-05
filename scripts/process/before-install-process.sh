echo "---Before Install Process---"

# ECR Login
echo "ECR Login"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 576237891193.dkr.ecr.us-east-1.amazonaws.com

# Pulling image from ECR
echo "Pulling image from ECR"
docker pull 576237891193.dkr.ecr.us-east-1.amazonaws.com/hello-app:latest
docker pull 576237891193.dkr.ecr.us-east-1.amazonaws.com/rabbitmq:latest

# Changing image tag
echo "Changing image tag"
docker image tag 576237891193.dkr.ecr.us-east-1.amazonaws.com/hello-app:latest hello-app:latest
docker image tag 576237891193.dkr.ecr.us-east-1.amazonaws.com/rabbitmq:latest rabbitmq:latest
