module.exports = {
  dialect: 'postgres',
  host: 'docker',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  defines: {
    timestamps: true,
    underscorded: true,
    underscordedAll: true,
  },
};
