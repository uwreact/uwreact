pm2 stop uwri3d.com-client
pm2 stop uwri3d.com-server
git checkout master
git pull
yarn up
yarn build
pm2 restart uwri3d.com-client
pm2 restart uwri3d.com-server
