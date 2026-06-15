#!/usr/bin/env bash
# date: 14/06/2026
# description:  Bash script to create a Node.js project
# author: omitida

# global filename variables
filename=

# make help function
function help {
    echo "Usage: $0 -<option> <project_name>"
    echo ""
    echo "Options:"
    echo "  -d  Delete the file or project"
    echo "  -h  Display this help message"
    echo "  -g  Generate a generic Node.js project"
    echo "  -r  Run the project"
    echo ""
}

NODE_FILE="\"use strict\";

console.log(\"Starts Here!\");
"

# Parse cli options
if [[ $# -ne 2 ]]; then
    help
    exit 1
fi

optionstring="d:g:r:h"

while getopts "${optionstring}" opt; do
    case $opt in
        d) filename="${OPTARG}"
            while read -r -p "Are you sure you want to delete ${filename}? (y/n) " ans; do
                echo
                if [[ $ans =~ ^[Yy]$ ]]; then
                    rm -rf "${filename}"
                    exit 0
                else
                    exit 1
                fi
            done
        ;;
        g)
            filename="${OPTARG}"
            echo "Generating generic Node.js project: ${filename}"
            mkdir -p "${filename}"
            cd "${filename}" || exit
            npm init -y > /dev/null
            echo "${NODE_FILE}" > "app.js"
            # run the project
            node "app.js"
            ;;
        h) help;;
        r) filename="${OPTARG}"
            ! [[ -e "${filename}" ]] && { echo "File not found: ${filename}"; exit 1; }
            echo "Running project: ${filename}"
            node "${filename}/app.js"
            ;;
        \?) help;;
    esac
done
