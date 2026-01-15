import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationService } from './registration.service';
import { Registration,RegistrationSchema } from './schema/registration.schema';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { RegistrationController } from './registration.controller';


@Module({
  imports: [MongooseModule.forFeature([{ name: Registration.name, schema: RegistrationSchema }])],
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}
