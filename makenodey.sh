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
    echo "  -d, --delete    delete the file or project"
    echo "  -h, --help      Display this help message"
    echo "  -g, --generic   generate a generic Node.js project"
    echo ""
}

NODE_FILE="
\"use strict\";

console.log(\"Hello, World!\");
"

echo "OPTIONS: ${1}"

optionstring="d:g:h"

while getopts "${optionstring}" opt; do
    case $opt in
        d) filename="${OPTARG}"

        ;;
        g) ;;
        h) help;;
        \?) help;;
    esac
done
