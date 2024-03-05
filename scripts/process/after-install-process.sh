echo "---After Install Process---"

echo "Creating and starting a docker container"

# Creating and starting a docker container rabbitmq
if [ "$(docker inspect -f '{{.State.Running}}' rabbitmq 2>/dev/null)" == "true" ]; then
    echo "Container rabbitmq is already running."
else
    # Run rabbitmq container
    docker run -i -t -d --name rabbitmq --network hello-network rabbitmq:latest
fi

# get rabbitmq container ip address
export RABBIT_MQ_URI=amqp://$(docker inspect -f {{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}} rabbitmq):5672

# --env-file 문제로 env 문자 변경
sed -i "s/'//g" /home/ec2-user/app/.env.development
sed -i 's/"//g' /home/ec2-user/app/.env.development

# Creating and starting a docker container using a new image
docker run -i -t -d -p 9000:9000 --name hello-app --env-file /home/ec2-user/app/.env.development --env RABBIT_MQ_URI=$RABBIT_MQ_URI --env NODE_ENV=development --network hello-network hello-app:latest