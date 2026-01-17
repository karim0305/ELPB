import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Haulage, HaulageSchema } from './schema/houlage.schema';
import { HaulageService } from './houlage.service';
import { HaulageController } from './houlage.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Haulage.name, schema: HaulageSchema },
    ]),
  ],
  controllers: [HaulageController],
  providers: [HaulageService],
})
export class HaulageModule {}
