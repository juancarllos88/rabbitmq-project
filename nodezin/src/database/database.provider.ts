import { ConfigModule, ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: config.get('DATABASE_DIALECT'),
        database: config.get('DATABASE'),
        username: config.get('DATABASE_USER'),
        password: config.get('DATABASE_PASSWORD'),
        host: config.get('DATABASE_HOST'),
        port: config.get('DATABASE_PORT'),
        logging: true,
        timezone: '+00:00',
        define: {
          // don't add the timestamp attributes (updatedAt, createdAt)
          timestamps: true,

          // If don't want createdAt
          createdAt: true,

          // If don't want updatedAt
          updatedAt: true,
        },
      });
      sequelize.addModels([User]);
      if (config.get('ENVIROMENT') !== 'prd') {
        await sequelize.sync();
      }
      return sequelize;
    },
  },
];
