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
    echo "  -c  Change the extension of the file"
    echo "  -d  Delete the file or project"
    echo "  -h  Display this help message"
    echo "  -g  Generate a generic Node.js project"
    echo "  -r  Run the project"
    echo "  -o  Generate a standalone js file"
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

optionstring="c:d:g:r:o:h"

while getopts "${optionstring}" opt; do
    case $opt in
        c) filename="${OPTARG}"
            echo "Changing extension of ${filename}"
            new_filename="${filename%.*}"
            extension="${filename##*.}"
            while read -r -p "Enter the new extension: " ext; do
                if [[ "${new_filename}" == "${extension}" ]] || [[ "${ext}" == "" ]]; then
                    echo "Filename is empty"
                    continue
                else
                    mv "${filename}" "${new_filename}.${ext}"
                    exit 0
                fi
            done
        ;;
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
            if [[ -e "${filename}" ]]; then
                echo "Directory already exists: ${filename}"
                while read -r -p "Do you want to overwrite it? (y/n) " ans; do
                    echo
                    if [[ $ans =~ ^[Yy]$ ]]; then
                        rm -rf "${filename}"
                        break
                    else
                        exit 1
                    fi
                done
            fi
            mkdir -p "${filename}"
            cd "${filename}" || exit
            npm init -y > /dev/null
            perl -pe 's/main\": \"index.js\"/main\": \"app.js\"/;s/type\": \"commonjs\"/type\": \"module\"/' "package.json" > "package.json.tmp"
            mv "package.json.tmp" "package.json"
            echo "${NODE_FILE}" > "app.js"
            # run the project
            node "app.js"
            ;;
        h) help;;
        o)
            filename="${OPTARG}"
            echo "Generating standalone js file: ${filename}"
            echo "${NODE_FILE}" > "${filename}.js"
            node "${filename}.js"
            ;;
        r) filename="${OPTARG}"
            ! [[ -e "${filename}" ]] && { echo "File not found: ${filename}"; exit 1; }
            if [[ -f "${filename}" ]]; then
                echo "Running standalone js file: ${filename}"
                file_extension="${filename##*.}"
                [[ -z "${file_extension}" ]] && file_extension="js"
                filename="${filename%.*}.${file_extension}"
                node "${filename}"
            else
                cd "${filename}" || exit
                echo "Running project: app.js"
                node "app.js"
            fi
            ;;
        \?) help;;
    esac
done
