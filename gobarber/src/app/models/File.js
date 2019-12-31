import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return 'qualquer coisa';
          },
        },
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }
}

export default File;
