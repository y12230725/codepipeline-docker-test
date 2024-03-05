echo "---Application Start Process---"

# docker container 내부 build
docker exec -i hello-app pnpm run build:all

# docker container 내부 pm2 실행
docker exec -i hello-app pm2 start ecosystem.config.js --env development