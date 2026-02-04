import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Arrival, ArrivalDocument } from './schema/arrival.schema';
import { CreateArrivalDto } from './dto/create-arrival.dto';

@Injectable()
export class ArrivalService {
  constructor(
    @InjectModel(Arrival.name) private arrivalModel: Model<ArrivalDocument>,
  ) {}

  // Create Arrival
  async create(createArrivalDto: CreateArrivalDto): Promise<Arrival> {
    const createdArrival = new this.arrivalModel(createArrivalDto);
    const saved = await createdArrival.save();

    // Populate mill, device, registration after save
    return saved.populate('millid deviceId regid');
  }

  // Find all Arrivals with populated references
  async findAll(): Promise<Arrival[]> {
    return this.arrivalModel
      .find()
      .populate('millid deviceId registrationId')
      .exec();
  }

  // Find one Arrival by ID with populated references
  async findById(id: string): Promise<Arrival> {
    const arrival = await this.arrivalModel
      .findById(id)
      .populate('millid deviceId registrationId')
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
      .populate('millid deviceId registrationId')
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
      .populate('millid deviceId registrationId')
      .exec();

    if (!deleted) {
      throw new NotFoundException(`Arrival with id ${id} not found`);
    }
    return deleted;
  }
}
