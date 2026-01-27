import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Registration, RegistrationDocument } from './schema/registration.schema';
import { CreateRegistrationDto } from './dto/create-registration.dto';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel(Registration.name)
    private readonly registrationModel: Model<RegistrationDocument>,
  ) {}

  // CREATE
 async create(dto: CreateRegistrationDto): Promise<Registration> {
  try {
    const created = new this.registrationModel({
      ...dto,
      millid: new Types.ObjectId(dto.millid),
      deviceId: new Types.ObjectId(dto.deviceId),
      elpId: new Types.ObjectId(dto.elpId),
       gps: dto.gps ? { latitude: dto.gps.latitude, longitude: dto.gps.longitude } : undefined,
    });

    const saved = await created.save();
    return saved.toObject();
  } catch (err) {
    console.error('Registration creation error:', err);
    throw err; // Let NestJS handle it
  }
}

  // FIND ALL
  async findAll(): Promise<Registration[]> {
    const registrations = await this.registrationModel
      .find()
      .populate('millid') // populate MillInfo
      .exec();

    return registrations.map(r => r.toObject());
  }

  // FIND ONE
  async findOne(id: string): Promise<Registration> {
    const registration = await this.registrationModel
      .findById(id)
      .populate('millid')
      .exec();

    if (!registration) {
      throw new NotFoundException(`Registration with ID ${id} not found`);
    }

    return registration.toObject();
  }

  // UPDATE
  async update(
    id: string,
    updateDto: Partial<CreateRegistrationDto>,
  ): Promise<Registration> {
    const updated = await this.registrationModel
      .findByIdAndUpdate(
        id,
        {
          ...updateDto,
          ...(updateDto.millid && {
            millid: new Types.ObjectId(updateDto.millid),
          }),
        },
        { new: true },
      )
      .populate('millid')
      .exec();

    if (!updated) {
      throw new NotFoundException(`Registration with ID ${id} not found`);
    }

    return updated.toObject();
  }

  // DELETE
  async remove(id: string): Promise<Registration> {
    const deleted = await this.registrationModel
      .findByIdAndDelete(id)
      .exec();

    if (!deleted) {
      throw new NotFoundException(`Registration with ID ${id} not found`);
    }

    return deleted.toObject();
  }

  // FIND BY MILL ID (VERY USEFUL)
  async findByMill(millid: string): Promise<Registration[]> {
    const registrations = await this.registrationModel
      .find({ millid: new Types.ObjectId(millid) })
      .populate('millid')
      .exec();

    return registrations.map(r => r.toObject());
  }
}
