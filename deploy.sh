#!/usr/bin/env bash
DOCKER_NAME="bw-admin"
PORT="8080"
# repo="registry.cn-hangzhou.aliyuncs.com/your_project/${DOCKER_NAME}:latest"
# REMOTE_SERVER="root@100.100.100.100"
# JOB_NAME=${DOCKER_NAME}

# 确保脚本抛出遇到的错误
set -e

#start
echo start to compile
# rm -rf dist
# npm run build

echo start to build docker

docker build -t ${DOCKER_NAME} .
docker run -d --name ${DOCKER_NAME} -p ${PORT}:80 ${DOCKER_NAME}
# rm -rf dist   

# Deploy
echo deploy to remote server... 