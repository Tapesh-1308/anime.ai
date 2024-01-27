#!/bin/bash

# Check if commit message is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <commit_message>"
    exit 1
fi

# Commit message provided as command line argument
commit_message="$1"

# Run Git commands
git add .
git commit -m "${commit_message}"
git push

# Check if the Git commands were successful
if [ $? -eq 0 ]; then
    echo "Git commands executed successfully."
else
    echo "Error: Git commands failed."
fi
