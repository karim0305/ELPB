import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SuperAdmin, SuperAdminDocument } from './schema/user.schema';
import { CreateSuperAdminDto } from './dto/create-superadmin.dto';
import { UpdateSuperAdminDto } from './dto/update-superadmin.dto';

@Injectable()
export class SuperAdminService {
  constructor(
    @InjectModel(SuperAdmin.name)
    private superAdminModel: Model<SuperAdminDocument>,
  ) {}

  async create(createDto: CreateSuperAdminDto): Promise<SuperAdmin> {
    const createdAdmin = new this.superAdminModel(createDto);
    return createdAdmin.save();
  }

  async findAll(): Promise<SuperAdmin[]> {
    return this.superAdminModel.find().exec();
  }

  async findOne(id: string): Promise<SuperAdmin> {
    const admin = await this.superAdminModel.findById(id);
    if (!admin) throw new NotFoundException('SuperAdmin not found');
    return admin;
  }

  async update(id: string, updateDto: UpdateSuperAdminDto) {
    const updated = await this.superAdminModel.findByIdAndUpdate(
      id,
      updateDto,
      { new: true },
    );
    if (!updated) throw new NotFoundException('SuperAdmin not found');
    return updated;
  }

  async remove(id: string) {
    const deleted = await this.superAdminModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('SuperAdmin not found');
    return { message: 'SuperAdmin deleted successfully' };
  }
}
