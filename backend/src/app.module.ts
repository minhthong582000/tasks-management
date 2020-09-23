import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [TypeOrmModule.forRoot(typeOrmConfig), TasksModule, AuthModule],
    controllers: [],
    providers: [],
})
export class AppModule {}

// use customization logging

// append to providers module

// MyLoggerService,
// {
//     provide: APP_FILTER,
//     useClass: HttpExceptionFilter,
// },
// {
//     provide: APP_INTERCEPTOR,
//     useClass: MyLogger,
// },
