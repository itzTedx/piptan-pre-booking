# VPS Deployment Guide

This guide will help you deploy your Next.js static export to a VPS.

## Prerequisites

- A VPS with Ubuntu/Debian (or similar Linux distribution)
- SSH access to your VPS
- Domain name (optional, but recommended)
- Node.js 18+ installed on VPS (for building)

## Option 1: Build on VPS (Recommended)

### Step 1: Connect to Your VPS

```bash
ssh user@your-vps-ip
```

### Step 2: Install Required Software

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20 (using NodeSource)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx
sudo apt install -y nginx

# Install Git
sudo apt install -y git
```

### Step 3: Clone Your Repository

```bash
# Create a directory for your app
sudo mkdir -p /var/www
cd /var/www

# Clone your repository (replace with your repo URL)
sudo git clone https://github.com/yourusername/your-repo.git piptan-pre-booking
sudo chown -R $USER:$USER /var/www/piptan-pre-booking
cd piptan-pre-booking
```

### Step 4: Install Dependencies and Build

```bash
# Install dependencies
npm install

# Build the project
npm run build
```

The build output will be in the `out` directory.

### Step 5: Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/piptan-pre-booking
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # Replace with your domain or IP

    root /var/www/piptan-pre-booking/out;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json application/javascript;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Cache static assets
    location /_next/static/ {
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    location /nextImageExportOptimizer/ {
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    # Main location block
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # Handle 404 errors
    error_page 404 /404.html;
}
```

### Step 6: Enable the Site

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/piptan-pre-booking /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### Step 7: Set Up SSL with Let's Encrypt (Optional but Recommended)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate (replace with your domain)
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Certbot will automatically update your Nginx config
# Test auto-renewal
sudo certbot renew --dry-run
```

## Option 2: Build Locally and Transfer

If you prefer to build locally and transfer files:

### Step 1: Build Locally

```bash
npm run build
```

### Step 2: Transfer Files to VPS

```bash
# Using SCP (replace with your details)
scp -r out/* user@your-vps-ip:/var/www/piptan-pre-booking/out/

# Or using rsync (better for updates)
rsync -avz --delete out/ user@your-vps-ip:/var/www/piptan-pre-booking/out/
```

### Step 3: Configure Nginx (same as Option 1, Step 5-6)

## Option 3: Automated Deployment Script

Create a deployment script for easier updates:

```bash
# Create deploy.sh
nano deploy.sh
```

Add this content:

```bash
#!/bin/bash

echo "Starting deployment..."

# Pull latest changes
git pull origin main

# Install/update dependencies
npm install

# Build the project
npm run build

# Restart Nginx (if needed)
sudo systemctl reload nginx

echo "Deployment complete!"
```

Make it executable:

```bash
chmod +x deploy.sh
```

Run it:

```bash
./deploy.sh
```

## Firewall Configuration

If you have a firewall enabled, allow HTTP and HTTPS:

```bash
# UFW (Ubuntu Firewall)
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable

# Or for specific ports
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

## Troubleshooting

### Check Nginx Status
```bash
sudo systemctl status nginx
```

### Check Nginx Error Logs
```bash
sudo tail -f /var/log/nginx/error.log
```

### Check Nginx Access Logs
```bash
sudo tail -f /var/log/nginx/access.log
```

### Verify Build Output
```bash
ls -la /var/www/piptan-pre-booking/out/
```

### Test Nginx Configuration
```bash
sudo nginx -t
```

## Updating Your Site

When you need to update:

```bash
cd /var/www/piptan-pre-booking
git pull origin main
npm install
npm run build
sudo systemctl reload nginx
```

Or use the deployment script if you created one.

## Performance Optimization

### Enable Nginx Caching

Add to your Nginx config:

```nginx
# Cache zone
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m use_temp_path=off;

# In server block
location / {
    proxy_cache my_cache;
    proxy_cache_valid 200 60m;
    try_files $uri $uri.html $uri/ =404;
}
```

### Enable HTTP/2

In your Nginx config, change:
```nginx
listen 443 ssl http2;
```

## Monitoring

### Set up log rotation
Nginx logs are automatically rotated, but you can check:
```bash
sudo logrotate -d /etc/logrotate.d/nginx
```

### Monitor disk space
```bash
df -h
```

## Security Checklist

- [ ] SSL certificate installed
- [ ] Firewall configured
- [ ] Nginx security headers added
- [ ] Regular updates scheduled
- [ ] SSH key authentication (disable password auth)
- [ ] Fail2ban installed (optional)

## Quick Reference Commands

```bash
# Restart Nginx
sudo systemctl restart nginx

# Reload Nginx (no downtime)
sudo systemctl reload nginx

# Check Nginx status
sudo systemctl status nginx

# View Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Test Nginx config
sudo nginx -t

# Renew SSL certificate
sudo certbot renew
```

