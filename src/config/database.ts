import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Token', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});


export default sequelize;