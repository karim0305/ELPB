import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Arrival, ArrivalDocument } from './schema/arrival.schema';
import { CreateArrivalDto } from './dto/create-arrival.dto';

@Injectable()
export class ArrivalService {
  constructor(
    @InjectModel(Arrival.name) private arrivalModel: Model<ArrivalDocument>,
  ) {}

  // Create Arrival

async create(createArrivalDto: CreateArrivalDto): Promise<Arrival> {
  try {
    const createdArrival = new this.arrivalModel({
      ...createArrivalDto,
      millid: new Types.ObjectId(createArrivalDto.millid),
      userid: new Types.ObjectId(createArrivalDto.userid),
      deviceId: new Types.ObjectId(createArrivalDto.deviceId),
      elpId: new Types.ObjectId(createArrivalDto.elpId),
    });

    const saved = await createdArrival.save();

    // await populate
    return await saved.populate('millid deviceId');
  } catch (error) {
    if (error.code === 11000) {
      throw new BadRequestException('regid already exists');
    }
    throw error;
  }
}

  // Find all Arrivals with populated references
  async findAll(): Promise<Arrival[]> {
    return this.arrivalModel
      .find()
      .populate('millid deviceId ')
      .exec();
  }


async getArrivalElpByMillId(millid: string) {
  return this.arrivalModel
    .find({
      millid: new Types.ObjectId(millid),
      status: 'Pending',
    })
    .populate('millid')
    .populate('elpId')
    .lean();
}
  
  // Find one Arrival by ID with populated references
  async findById(id: string): Promise<Arrival> {
    const arrival = await this.arrivalModel
      .findById(id)
      .populate('millid deviceId')
      .exec();

    if (!arrival) {
      throw new NotFoundException(`Arrival with id ${id} not found`);
    }
    return arrival;
  }

  // Update status and return populated object
  async updateStatus(id: string, status: string): Promise<Arrival> {
    const updated = await this.arrivalModel
      .findByIdAndUpdate(
        id,
        { status },
        { new: true },
      )
      .populate('millid deviceId')
      .exec();

    if (!updated) {
      throw new NotFoundException(`Arrival with id ${id} not found`);
    }
    return updated;
  }
  

  // Update Arrival (return populated object for consistency)
  async update(id: string, updateDto: Partial<CreateArrivalDto>): Promise<Arrival> {
    const updated = await this.arrivalModel
      .findByIdAndUpdate(
        id,
        {
          ...updateDto,
          ...(updateDto.millid && {
            millid: new Types.ObjectId(updateDto.millid),
          }),
          ...(updateDto.userid && {
            userid: new Types.ObjectId(updateDto.userid),
          }),
          ...(updateDto.deviceId && {
            deviceId: new Types.ObjectId(updateDto.deviceId),
          }),
        },
        { new: true },
      )
      .populate('millid deviceId')
      .exec();

    if (!updated) {
      throw new NotFoundException(`Arrival with id ${id} not found`);
    }
    return updated;
  }

  // Delete Arrival (return populated object for consistency)
  async delete(id: string): Promise<Arrival> {
    const deleted = await this.arrivalModel
      .findByIdAndDelete(id)
      .populate('millid deviceId')
      .exec();

    if (!deleted) {
      throw new NotFoundException(`Arrival with id ${id} not found`);
    }
    return deleted;
  }
}
