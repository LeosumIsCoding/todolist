import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BppModule } from './bpp/bpp.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.warn('port:3000');
  await app.listen(3000);
  const bpp = await NestFactory.create(BppModule);
  console.warn('port:3001');
  await bpp.listen(3001);
}
bootstrap();
