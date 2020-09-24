import { Logger, QueryRunner } from "typeorm";
import {
    Logger as WinstonLogger,
    format, 
    transports, 
    createLogger
} from 'winston'
// import { Format } from './../../node_modules/logform/index.d';


export class CustomLogger implements Logger {
    private readonly queryLogger: WinstonLogger;
    private readonly schemaLogger: WinstonLogger;
    private readonly customFormat: any;    

    constructor() {
        this.customFormat = format.printf(
            ({message, level, label, timestamp}) => 
            `${timestamp} [${label}] ${message}`);
        const options = (filename: string) => ({
            transports: new transports.File({ filename, level: 'debug' }),
            format: this.customFormat
        });

        this.queryLogger = createLogger(options('query.log'));
        this.schemaLogger = createLogger(options('schema.log'))
    }

    logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
        this.queryLogger.log({
            level: 'debug',
            message: `${query} - ${parameters ? JSON.stringify(parameters) : ''}`,
            timestamp: Date.now(),
            label: 'query'
        });
    }

    logQueryError(
        error: string, 
        query: string, 
        parameters?: any[], 
        queryRunner?: QueryRunner
    ) {
        throw new Error("Method not implemented.");
    }
    logQuerySlow(
        time: number, 
        query: string, 
        parameters?: any[], 
        queryRunner?: QueryRunner
    ) {
        throw new Error("Method not implemented.");
    }
    logSchemaBuild(message: string, queryRunner?: QueryRunner) {
        this.schemaLogger.log({
            level: 'debug',
            message,
            timestamp: Date.now(),
            label: 'schema',
        })
    }
    logMigration(message: string, queryRunner?: QueryRunner) {
        throw new Error("Method not implemented.");
    }
    log(level: "log" | "info" | "warn", message: any, queryRunner?: QueryRunner) {
        // throw new Error("Method not implemented.");
    }

}
