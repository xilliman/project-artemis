#!/usr/bin/env bash
# CLI_LOCATION="$(pwd)/cli"
CLI_LOCATION="/usr/local/bin"
echo "Building plugin in $(pwd)"
printf "Please input sudo password to proceed.\n"

# read -s sudopass

# printf "\n"

echo $sudopass | sudo -E $CLI_LOCATION/decky plugin build $(pwd)
