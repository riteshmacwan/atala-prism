import { Controller, Post, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PrismService } from 'src/prism/prism.service';
import { User, UserDocument } from './entity/user.schema';
import { Model } from 'mongoose';

@Controller('auth')
export class AuthController {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    private readonly prismService: PrismService,
  ) {}

  @Post('register')
  async register(@Body() body: { username: string }) {
    const did = await this.prismService.createDid();
    const credential = {
      '@context': 'https://www.w3.org/2018/credentials/v1',
      type: ['VerifiableCredential'],
      issuer: did,
      credentialSubject: {
        id: did,
        username: body.username,
      },
    };
    const issuedCredential = await this.prismService.issueCredential(
      did,
      credential,
    );
    await this.userModel.create({
      username: body.username,
      did,
      credential: issuedCredential,
    });
    return { did, issuedCredential };
  }

  @Post('login')
  async login(@Body() body: { credential: any }) {
    const isValid = await this.prismService.verifyCredential(body.credential);
    if (isValid) {
      return {
        message: 'Login successful',
        did: body.credential.credentialSubject.id,
      };
    } else {
      return { message: 'Invalid credentials' };
    }
  }
}
