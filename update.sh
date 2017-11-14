pm2 stop uwri3d.com/client
pm2 stop uwri3d.com/server
git pull
yarn build
pm2 restart uwri3d.com/client
pm2 restart uwri3d.com/server
