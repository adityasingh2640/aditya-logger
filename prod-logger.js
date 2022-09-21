const { format, createLogger, transports } = require('winston');
const { combine, timestamp, printf } = format;

function buildProdLogger(){
    const logger = createLogger({
        format: combine(
            format.errors({stack:true}),
            format.json(),
            timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
            ),
        defaultMeta:{service:'user-service'},
        transports: [
            //new winston.transports.File({ filename: 'error.log', level: 'error' }),
            //new winston.transports.File({ filename: 'combined.log' }),
            new transports.Console()
        ],
    });
    return logger;
}



module.exports = buildProdLogger;
