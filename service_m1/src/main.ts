import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { microservicesConfig } from './app.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  const appMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      microservicesConfig,
    );

  await appMicroservice.listen();

  const config = new DocumentBuilder()
    .setTitle(`Backend service_m1`)
    .setDescription(`API docs`)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

  await app.listen(process.env.APP_PORT ?? 3000, () => {
    console.log(`\nserver listening on port: ${process.env.APP_PORT}`);
  });
}
bootstrap();
