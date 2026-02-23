import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Verification, VerificationSchema } from './schema/verification.schema';
import { VerificationService } from './verification.service';
import { VerificationController } from './verification.controller';
import { Registration, RegistrationSchema } from 'src/registration/schema/registration.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Verification.name, schema: VerificationSchema },
        { name: Registration.name, schema: RegistrationSchema },
    ]),
  ],
  controllers: [VerificationController],
  providers: [VerificationService],
})
export class VerificationModule {}