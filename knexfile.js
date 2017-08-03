module.exports = {
  client: 'mysql',
  connection: {
    host : 'citadel_mysql',
    user : 'root',
    password : process.env.MYSQL_ROOT_PASSWORD,
    database : 'citadel__app'
  }
};
