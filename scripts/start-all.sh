#!/bin/bash

init_cmd="concurrently"

apps=$(find "./apps" -maxdepth 1 -mindepth 1 -type d -exec basename {} \;)

node_env=${NODE_ENV}

if [ ${node_env} == "development" ]; then
    node_env="dev"
elif [ ${node_env} == "production" ]; then
    node_env="prod"
fi

for app in $apps; do
    init_cmd+=" \"pnpm start:${node_env} ${app}\""
done

wait

eval "${init_cmd}"
