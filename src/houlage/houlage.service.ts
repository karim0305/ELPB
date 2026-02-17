import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHaulageDto } from './dto/create-houlage.dto';
import { UpdateHaulageDto } from './dto/update-houlage.dto';
import { Haulage, HaulageDocument } from './schema/houlage.schema';

@Injectable()
export class HaulageService {
  constructor(
    @InjectModel(Haulage.name)
    private haulageModel: Model<HaulageDocument>,
  ) {}

 
  async create(dto: CreateHaulageDto): Promise<Haulage> {
    try {
      return await this.haulageModel.create(dto);
    } catch (error: any) {
      // Duplicate key error
      if (error.code === 11000) {
        // Pick the field causing the duplicate
        const duplicateField = Object.keys(error.keyPattern)[0];
        throw new ConflictException(
          `${duplicateField} already exists!`,
        );
      }

      // Other errors
      throw new InternalServerErrorException(
        'Failed to create haulage',
      );
    }
  }
}

  async findAll(): Promise<Haulage[]> {
  return this.haulageModel
    .find()
    .populate('millid') // 👈 IMPORTANT
    .exec();
}

async findOne(id: string): Promise<Haulage> {
  const haulage = await this.haulageModel
    .findById(id)
    .populate('millid')
    .exec();

  if (!haulage) {
    throw new NotFoundException('Haulage not found');
  }
  return haulage;
}

  async update(id: string, dto: UpdateHaulageDto): Promise<Haulage> {
    const haulage = await this.haulageModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();

    if (!haulage) {
      throw new NotFoundException('Haulage not found');
    }
    return haulage;
  }

  async remove(id: string): Promise<void> {
    const result = await this.haulageModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Haulage not found');
    }
  }
}
