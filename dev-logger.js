const { format, createLogger, transports } = require('winston');
const { combine, timestamp, printf,errors } = format;

function buildDevLogger(){
    const logFormat = printf(({ level, message, timestamp,stack }) => {
        return `${timestamp} ${level} : ${stack||message}`;
    });
    const logger = createLogger({
        format: combine(
            errors({stack:true}),
            format.colorize(),
            format.simple(),
            timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            logFormat
            ),
        defaultMeta:{service:'user-service'},
        transports: [
            new transports.Console()
        ],
    });
    return logger;
}



module.exports = buildDevLogger;
