import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SuperAdminService } from './superadmin.service';
import { CreateSuperAdminDto } from './dto/create-superadmin.dto';
import { UpdateSuperAdminDto } from './dto/update-superadmin.dto';
import { SuperAdmin, SuperAdminSchema } from './schema/user.schema';
import { SuperAdminController } from './superadmin.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SuperAdmin.name, schema: SuperAdminSchema },
    ]),
  ],
  controllers: [SuperAdminController],
  providers: [SuperAdminService],
})
export class SuperAdminModule {}
