import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArrivalService } from './arrival.service';
import { ArrivalController } from './arrival.controller';
import { Arrival, ArrivalSchema } from './schema/arrival.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Arrival.name, schema: ArrivalSchema }]),
  ],
  controllers: [ArrivalController],
  providers: [ArrivalService],
  exports: [ArrivalService],
})
export class ArrivalModule {}
