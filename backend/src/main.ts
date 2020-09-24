import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';
import * as config from 'config';

async function bootstrap() {
    const serverConfig = config.get('server');
    const port = process.env.PORT || serverConfig.port;
    const logger = new Logger('bootstrap');

    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.setGlobalPrefix('api');

    if (process.env.NODE_ENV === 'production') {
        app.enableCors({
            origin: [
                process.env.CORS_ORIGIN,
                serverConfig.origin,
                'http://127.0.0.1',
                'http://172.20.0.2',
                'http://172.20.0.1',
                'http://localhost',
                'http://frontend',
                'http://nhom12.sirdev.codes',
            ],
        });
        app.use(helmet());
        app.set('trust proxy', 1);
        app.use(
            rateLimit({
                windowMs: 15 * 60 * 1000, // 15 minutes
                max: 100, // limit each IP to 100 requests per windowMs
            }),
        );
    } else {
        app.enableCors();
    }

    const docsOpts = new DocumentBuilder()
        .setTitle('Nestjs crud api docs')
        .setDescription('Tasks management crud api')
        .setVersion('1.0')
        .setContact(
            'Minh Thong',
            'minhthong.le0508@gmail.com',
            'minhthong.le0508@gmail.com',
        )
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
            'access-token',
        )
        .build();
    const document = SwaggerModule.createDocument(app, docsOpts);
    SwaggerModule.setup('/docs', app, document);

    await app.listen(port);
    logger.log(`Application listening on port: ${port}\n
                Accepting request from ${serverConfig.origin}`);
}
bootstrap();
