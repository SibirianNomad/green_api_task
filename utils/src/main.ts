import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.APP_PORT ?? 3000, () => {
    console.log(`\nserver listening on port: ${process.env.APP_PORT}`);
  });
}
bootstrap();
