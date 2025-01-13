const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require('./src/routes/auth.routes');
const user = require('./src/routes/user.routes');
const djs = require('./src/routes/dj.routes');
const admin = require('./src/routes/admin.routes');
const songs = require('./src/routes/songRequest.routes');
const logMessage = require('./src/utils/loggerUtil');
const sequelize = require('./src/config/db.config')
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/auth/', auth);
app.use('/users/', user);
app.use('/djs/', djs);
app.use('/admin/', admin);
app.use('/songs/', songs);

const PORT = process.env.PORT || 3200;

const server = app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

// Capturar errores globales no manejados
process.on('uncaughtException', (error) => {
    logMessage('error', `Error no capturado: ${error.message}`);
    console.error(error);
    process.exit(1); // Opcional: reiniciar la aplicación
});

// Capturar promesas rechazadas no manejadas
process.on('unhandledRejection', (reason, promise) => {
    logMessage('error', `Promesa rechazada no manejada: ${reason}`);
    console.error(reason);
});

// Capturar errores del servidor
server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof PORT === 'string' ? `Pipe ${PORT}` : `Port ${PORT}`;
    switch (error.code) {
        case 'EACCES':
            logMessage('error', `${bind} requiere privilegios elevados`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logMessage('error', `${bind} ya está en uso`);
            process.exit(1);
            break;
        default:
            logMessage('error', `Error del servidor: ${error.message}`);
            throw error;
    }
});

module.exports = app