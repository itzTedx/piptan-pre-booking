# Quick Deployment Guide

## TL;DR - Fastest Way to Deploy

### 1. On Your VPS, Run These Commands:

```bash
# Install Node.js and Nginx
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt update && sudo apt install -y nodejs nginx git

# Clone your repo (replace with your repo URL)
sudo mkdir -p /var/www
cd /var/www
sudo git clone YOUR_REPO_URL piptan-pre-booking
sudo chown -R $USER:$USER piptan-pre-booking
cd piptan-pre-booking

# Install and build
npm install
npm run build

# Copy Nginx config (edit the server_name first!)
sudo cp nginx.conf.example /etc/nginx/sites-available/piptan-pre-booking
sudo nano /etc/nginx/sites-available/piptan-pre-booking  # Edit server_name

# Enable site
sudo ln -s /etc/nginx/sites-available/piptan-pre-booking /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default  # Optional
sudo nginx -t
sudo systemctl restart nginx

# Set up SSL (optional but recommended)
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### 2. For Future Updates:

```bash
cd /var/www/piptan-pre-booking
./deploy.sh
```

That's it! Your site should be live.

## What You Need to Change

1. **In `nginx.conf.example`**: Replace `your-domain.com` with your actual domain or IP
2. **Clone URL**: Replace `YOUR_REPO_URL` with your actual Git repository URL
3. **Domain**: If using a domain, make sure DNS points to your VPS IP

## Common Issues

- **Port 80 blocked?** Check firewall: `sudo ufw allow 80/tcp`
- **Permission denied?** Make sure you own the directory: `sudo chown -R $USER:$USER /var/www/piptan-pre-booking`
- **Build fails?** Check Node.js version: `node --version` (should be 18+)

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

