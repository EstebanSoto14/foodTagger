import {prop, Typegoose} from '@typegoose/typegoose';

export class User extends Typegoose {
  @prop()
  name?: string;
}