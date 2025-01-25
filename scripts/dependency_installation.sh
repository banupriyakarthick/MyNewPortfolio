#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "Starting dependency installation..."

# Clear npm cache
npm cache clean --force

# Install dependencies using npm ci with legacy peer deps
npm ci --legacy-peer-deps

echo "Dependency installation completed successfully."

