# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Installation and deployment guide

---

## 🚀 Production Deployment (Linux VM)

1️⃣ Install Node.js & Git
sudo apt update && sudo apt install -y nodejs npm git

2️⃣ Clone your project repo
git clone https://github.com/yourusername/portfolio.git && cd portfolio

3️⃣ Install dependencies
npm install

4️⃣ Build production files
npm run build
→ generates optimized static files in ./dist

5️⃣ Install & serve via Nginx
sudo apt install -y nginx
sudo rm /etc/nginx/sites-enabled/default

sudo bash -c 'cat > /etc/nginx/sites-available/portfolio <<EOF
server {
listen 80;
server_name your_domain_or_ip;
root /home/ubuntu/portfolio/dist;
index index.html;
location / {
try_files $uri /index.html;
}
}
EOF'

sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo systemctl restart nginx

6️⃣ Optional — HTTPS (Let’s Encrypt)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your_domain

7️⃣ Access your site at http://your_domain or http://your_VM_IP
