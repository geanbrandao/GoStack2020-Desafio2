// precisa intalar umas dependencias quando o dialect é o postgres
// https://sequelize.org/master/manual/dialect-specific-things.html
module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'postgres',
  password: 'docker',
  database: 'desafio2',
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
