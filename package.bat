cd ./src/main/webapp
echo build frontend
call npm run build
cd ../../../
echo package frontend and backend
@cmd /k mvn clean package -Dmaven.test.skip=true