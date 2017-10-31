pm2 stop com.uwri3d.client
pm2 stop com.uwri3d.server
git pull
yarn build
pm2 restart com.uwri3d.client
pm2 restart com.uwri3d.server
