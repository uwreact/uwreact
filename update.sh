pm2 stop client.uwri3d.com
pm2 stop server.uwri3d.com
git pull
yarn build
pm2 restart client.uwri3d.com
pm2 restart server.uwri3d.com
