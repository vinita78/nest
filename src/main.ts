import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomExceptionFilter } from 'common/exceptions/exception.exceptionFilter';
import { Catch } from '@nestjs/common';
import { ValidationPipe } from 'common/validation/validation';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
app.useGlobalFilters(new CustomExceptionFilter())
app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
