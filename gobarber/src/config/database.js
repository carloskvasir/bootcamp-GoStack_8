module.exports = {
  dialect: 'postgres',
  host: 'docker',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscorded: true,
    underscordedAll: true,
  },
};
