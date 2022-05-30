import newrelic from 'newrelic';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NewrelicInterceptor } from './newrelic/newrelic.interceptor';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new NewrelicInterceptor());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
