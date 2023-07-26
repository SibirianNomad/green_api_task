import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { microservicesConfig } from './app.config';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(Logger));
  app.setGlobalPrefix('api');

  const appMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      microservicesConfig,
    );

  await appMicroservice.listen();
  await app.listen(process.env.APP_PORT ?? 3000, () => {
    console.log(`\nserver listening on port: ${process.env.APP_PORT}`);
  });
}
bootstrap();
