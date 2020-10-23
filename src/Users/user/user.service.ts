import {Injectable} from '@nestjs/common';
import {User} from './user';
import {InjectModel} from 'nestjs-typegoose';
import {ReturnModelType} from '@typegoose/typegoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userModel: ReturnModelType<typeof User>) {
  }

  async createCustomUser(user: User) {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async listUsers(): Promise<User[] | null> {
    return await this.userModel.find().exec();
  }
}