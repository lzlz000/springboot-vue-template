cd ./src/main/webapp
echo "build frontend"
npm run build
cd ../../../
echo "package frontend and backend"
mvn clean package -Dmaven.test.skip=true