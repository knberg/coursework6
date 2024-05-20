import { Sequelize } from 'sequelize';
import config from '../config.js';

const sequelize = new Sequelize(
  config.db.database, 
  config.db.username, 
  config.db.password, 
  {
    dialect: config.db.dialect, // Используемый диалект 
    host: config.db.host,       // Хост базы данных
    port: config.db.port,       // Порт базы данных
    logging: console.log,       // Включаем логирование SQL-запросов
    define: {
      timestamps: false,
    }
  }
);

sequelize.authenticate()
  .then(() => console.log('Подключение к базе данных установлено успешно.'))
  .catch((err) => console.error('Ошибка при подключении к базе данных:', err));

export default sequelize;
