FROM amazonlinux:latest
LABEL youngwoo <cxz5309@mz.co.kr>

RUN yum -y update \
    && yum install -y httpd \
    && yum install -y git \
    && yum install -y npm \
    && yum install -y vim \
    && yum install -y findutils \
    && yum install -y iputils \
    && yum install -y net-tools
RUN npm install -g pnpm
RUN npm install -g @nestjs/cli
RUN npm install -g typescript
RUN npm install -g concurrently
RUN mkdir -p /home/app

ADD ./ /home/app

WORKDIR /home/app

RUN pnpm install

# 용도가 달라 큰 의미는 없다 run -p 9000:9000 사용할 것
# 하지만 docker config 로 ExposedPort 정보를 확인할 수 있어서 hint를 줄 수 있다.,
EXPOSE 9000

