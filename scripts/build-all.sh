#!/bin/bash

GREEN='\033[0;32m'
RESET='\033[0m'

build_cmd="concurrently -m 2"

apps=$(find "./apps" -maxdepth 1 -mindepth 1 -type d -exec basename {} \;)

for app in $apps; do
    build_cmd+=" \"pnpm build ${app}\""
done

wait

eval "${build_cmd}"

echo -e "\n${GREEN}All applications are built success :)${RESET}"
