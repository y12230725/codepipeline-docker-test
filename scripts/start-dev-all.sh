#!/bin/bash

init_cmd="concurrently"

apps=$(find "./apps" -maxdepth 1 -mindepth 1 -type d -exec basename {} \;)

for app in $apps; do
    init_cmd+=" \"pnpm start:dev ${app}\""
done

wait

eval "${init_cmd}"
