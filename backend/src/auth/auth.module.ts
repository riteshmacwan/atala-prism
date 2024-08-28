import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PrismModule } from 'src/prism/prism.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entity/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PrismModule,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
