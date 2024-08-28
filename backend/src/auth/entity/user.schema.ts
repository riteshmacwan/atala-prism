import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Document<User>;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  did: string;

  @Prop()
  credential: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
