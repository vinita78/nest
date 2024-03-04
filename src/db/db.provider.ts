import { Sequelize } from 'sequelize-typescript';
import { User } from './entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'user-db',
      });
      sequelize.addModels([User]);
      // await sequelize.sync();
      return sequelize;
    },
  },
];
