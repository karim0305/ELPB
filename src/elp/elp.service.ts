import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Elp, ElpDocument } from './schema/elp.schema';
import { CreateElpDto } from './dto/create-elp.dto';
import { UpdateElpDto } from './dto/update-elp.dto';

@Injectable()
export class ElpService {
  constructor(
    @InjectModel(Elp.name)
    private readonly elpModel: Model<ElpDocument>,
  ) {}

  async create(createElpDto: CreateElpDto): Promise<Elp> {
    return this.elpModel.create(createElpDto);
  }

  async findAll(): Promise<Elp[]> {
    return this.elpModel.find().populate('millid').exec();
  }

  async findOne(id: string): Promise<Elp> {
    const elp = await this.elpModel.findById(id).populate('millid');
    if (!elp) throw new NotFoundException('ELP not found');
    return elp;
  }

  async update(id: string, updateElpDto: UpdateElpDto): Promise<Elp> {
    const elp = await this.elpModel.findByIdAndUpdate(
      id,
      updateElpDto,
      { new: true },
    );
    if (!elp) throw new NotFoundException('ELP not found');
    return elp;
  }

  async remove(id: string): Promise<void> {
    const result = await this.elpModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('ELP not found');
  }
}
