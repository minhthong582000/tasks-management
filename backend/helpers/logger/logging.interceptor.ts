import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from '@nestjs/common';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { MyLoggerService } from './logger.service';

@Injectable()
export class MyLogger implements NestInterceptor {
    constructor(private readonly logger: MyLoggerService) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req = context.switchToHttp().getRequest<Request>();
        const classContext = context.getClass().name;

        const {
            url,
            method,
            httpVersion,
            hostname,
            headers,
            query,
            ip,
            params,
            protocol,
        } = req;

        // remove sensitive data
        delete headers.authorization;
        delete headers.cookie;

        return next.handle().pipe(
            tap(() => {
                this.logger.debug(
                    `${ip} ${url} - ${method} ${JSON.stringify(
                        params,
                    )} ${JSON.stringify(
                        query,
                    )} hostname:${hostname} ${protocol}/${httpVersion} ${JSON.stringify(
                        headers,
                    )}`,
                    `${classContext}`,
                );
            }),
        );
    }
}
