echo "---Application Stop Process---"

# ECR Logout
echo "ECR Logout"
docker logout 576237891193.dkr.ecr.us-east-1.amazonaws.com

# 이전 컨테이너 삭제
echo "stop and remove the current container"
docker rm -f hello-app
# docker rm -f rabbitmq