import {
    Catch,
    ExceptionFilter,
    HttpException,
    ArgumentsHost,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { MyLoggerService } from './logger/logger.service';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    constructor(private readonly logger: MyLoggerService) {}

    // catching all http exception
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse<Response>();
        const request = context.getRequest<Request>();
        const status = exception.getStatus();

        const path = request.url;
        const method = request.method;
        const message = exception.message || null;

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

        response.status(status).json(errorRespond);
    }
}
