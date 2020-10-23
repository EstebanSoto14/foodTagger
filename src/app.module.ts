import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserModule} from './Users/user/user.module'
import {TypegooseModule} from 'nestjs-typegoose';

@Module({
  imports: [TypegooseModule.forRoot('mongodb://localhost:27017/food-tagger-api'),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}