import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MillInfo, MillInfoDocument } from './schema/millinfo.schema';
import { CreateMillInfoDto } from './dto/create-millinfo.dto';
import { UpdateMillInfoDto } from './dto/update-millinfo.dto';

@Injectable()
export class MillInfoService {
  constructor(
    @InjectModel(MillInfo.name) private millInfoModel: Model<MillInfoDocument>,
  ) {}

  async create(createMillInfoDto: CreateMillInfoDto): Promise<MillInfo> {
    const created = new this.millInfoModel(createMillInfoDto);
    return created.save();
  }

  async findAll(): Promise<MillInfo[]> {
    return this.millInfoModel.find().exec();
  }

  async findOne(id: string): Promise<MillInfo> {
    const mill = await this.millInfoModel.findById(id).exec();
    if (!mill) throw new NotFoundException(`Mill with ID ${id} not found`);
    return mill;
  }

  async update(id: string, updateDto: UpdateMillInfoDto): Promise<MillInfo> {
    const updated = await this.millInfoModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
    if (!updated) throw new NotFoundException(`Mill with ID ${id} not found`);
    return updated;
  }

  async remove(id: string): Promise<{ message: string }> {
    const deleted = await this.millInfoModel.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException(`Mill with ID ${id} not found`);
    return { message: 'Mill info deleted successfully' };
  }
}
