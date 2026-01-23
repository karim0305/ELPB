import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ElpController } from './elp.controller';
import { ElpService } from './elp.service';
import { Elp, ElpSchema } from './schema/elp.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Elp.name, schema: ElpSchema },
    ]),
  ],
  controllers: [ElpController],
  providers: [ElpService],
  exports: [ElpService], // optional, remove if not needed elsewhere
})
export class ElpModule {}
