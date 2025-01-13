const {createLogger, format, transports, label} = require('winston');

module.exports = createLogger({
    format: format.combine(
        format.simple(),
        format.label({label: `🏷️`}),
        format.timestamp({format: 'DD/MM/YYYY HH:mm:ss'}),
        format.printf(info => `[${info.timestamp}] ${info.level.toUpperCase()} ${info.label} ${info.message} -`)
        ), //Aqui mantiene estandar para todos los transport
    transports : [
        new transports.File({
            maxfile: 5120000,
            maxFiles: 10,
            filename: `${__dirname}/../logs/log-api.log`,
            //format: format.combine(format.simple())
        }),
        // Para el log de la consola
        // new transports.Console({
        //     level: 'debug',
        //     //format: format.combine(format.simple())
        // })
    ]
})

