# sequelize model:generate --name sessions \
#   --attributes sid:string,sess:string,expire:time

sequelize model:generate --name users \
  --attributes username:string,password:string,email:string