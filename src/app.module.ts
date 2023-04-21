import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandsController } from './brands/brands.controller';
import { BrandsService } from './brands/brands.service';
import { BrandsModule } from './brands/brands.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    BrandsModule,
    RegisterModule,
  ],
  controllers: [AppController, RegisterController],
  providers: [AppService, RegisterService],
})
export class AppModule {}
