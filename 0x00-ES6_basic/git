#!/bin/bash

# Check if the user is in a git repository
if [ ! -d .git ]; then
    echo "Error: This script must be run inside a Git repository."
    exit 1
fi

# Prompt for commit message
read -p "Enter commit message: " commit_msg

# Stage all changes
git add .

# Commit changes with the user-provided message
git commit -m "$commit_msg"

# Prompt for username and password
read -p "Enter your Git username: " git_username
read -sp "Enter your Git password: " git_password
echo # New line after password prompt

# Push changes to the remote repository
# Note: Make sure to replace 'origin' and 'main' with your remote name and branch name
git push https://$git_username:$git_password@github.com/your-username/your-repo.git main

