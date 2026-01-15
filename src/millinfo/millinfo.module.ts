import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MillInfoService } from './millinfo.service';
import { MillInfoController } from './millinfo.controller';
import { MillInfo, MillInfoSchema } from './schema/millinfo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: MillInfo.name, schema: MillInfoSchema }])],
  controllers: [MillInfoController],
  providers: [MillInfoService],
})
export class MillInfoModule {}
