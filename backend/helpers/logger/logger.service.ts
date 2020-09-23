import { Injectable, Inject, Logger } from '@nestjs/common';
import { Logger as WinstonLogger, transports, createLogger } from 'winston';
import * as path from 'path';

@Injectable()
export class MyLoggerService extends Logger {
    private readonly winstonOption = {
        level: 'debug',
        dirname: path.join(__dirname, '/../../../log/'),
        filename: `${process.env.NODE_ENV}.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 10,
        colorize: false,
    };
    constructor(
        @Inject('winston')
        private readonly logger?: WinstonLogger,
    ) {
        super(null, true); // set timestamp to true
        this.logger = createLogger({
            transports: [new transports.File(this.winstonOption)],
        });
    }

    log(message: any, context?: string): void {
        super.log(message, context);
        this.logger.log('info', message);
    }

    error(message: any, trace?: string, context?: string): void {
        super.error(message, trace, context);
        this.logger.error(`message + ${trace}`);
    }

    warn(message: any, context?: string): void {
        super.warn(message, context);
        this.logger.warn(message);
    }

    debug(message: any, context?: string): void {
        super.debug(message, context);
        this.logger.debug(message);
    }

    verbose(message: any, context?: string): void {
        super.verbose(message, context);
        this.logger.verbose(message);
    }
}
