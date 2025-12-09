#!/bin/bash

# Deployment script for VPS
# Usage: ./deploy.sh

set -e  # Exit on error

echo "🚀 Starting deployment..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project root?"
    exit 1
fi

echo -e "${YELLOW}📦 Pulling latest changes...${NC}"
git pull origin main || echo "⚠️  Git pull failed or not a git repo, continuing..."

echo -e "${YELLOW}📥 Installing dependencies...${NC}"
npm install

echo -e "${YELLOW}🔨 Building project...${NC}"
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo "❌ Error: Build failed - 'out' directory not found"
    exit 1
fi

echo -e "${YELLOW}🔄 Reloading Nginx...${NC}"
sudo systemctl reload nginx || echo "⚠️  Nginx reload failed (may not be installed or configured)"

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo "Your site should now be live. Check it at your domain or IP address."

