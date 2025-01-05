import express from "express";
import { router } from "./routes/routes";
import sequelize from "./config/database"; 

const app = express();

app.use(express.json());
app.use(router);

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexão com o banco de dados estabelecida com sucesso.");

        await sequelize.sync({ alter: true });
        console.log("Modelos sincronizados com o banco de dados.");

        app.listen(3312, () => {
            console.log("Server is running on http://localhost:3312");
        });
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        process.exit(1); 
    }
};


startServer();
