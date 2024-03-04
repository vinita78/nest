import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserContoller } from './user.controller';
import { UserService } from './user.service';
import { UtilModule } from 'common/util.module';
import { userProvider } from './user.provider';
import { DatabaseModule } from 'src/db/db.module';
import { DummyModule } from 'src/dummy/dynamicModule.module';
import { LoggerMiddleware } from './user.midleware';
import { ExceptionModule } from 'common/exceptions/exception.module';

@Module({
  controllers: [UserContoller],
  providers: [UserService, ...userProvider],
  imports: [UtilModule, DummyModule.forRoot('vinita'),DatabaseModule,ExceptionModule],
})
export class UserModule  implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(UserContoller)
  }
}
