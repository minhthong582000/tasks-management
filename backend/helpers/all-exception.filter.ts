import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { MyLoggerService } from './logger/logger.service';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    constructor(private readonly logger: MyLoggerService) {}

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const path = request.url;
        const method = request.method;
        const message = exception;

        const status =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        const errorRespond = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path,
            message,
        };

        this.logger.error(
            `${method} ${path}`,
            `${JSON.stringify(errorRespond)}`,
            'ExceptionFilter',
        );

        delete errorRespond.message;

        response.status(status).json(errorRespond);
    }
}
