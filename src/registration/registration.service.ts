import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Registration, RegistrationDocument } from './schema/registration.schema';
import { CreateRegistrationDto } from './dto/create-registration.dto';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel(Registration.name) private registrationModel: Model<RegistrationDocument>,
  ) {}

 async create(createRegistrationDto: CreateRegistrationDto): Promise<Registration> {
  const created = new this.registrationModel(createRegistrationDto);
  const saved = await created.save();  // <-- actually saves to MongoDB
  return saved.toObject(); // return as plain object
}

  async findAll(): Promise<Registration[]> {
    const registrations = await this.registrationModel.find().exec();
    return registrations.map(r => r.toObject());
  }

  async findOne(id: string): Promise<Registration> {
    const registration = await this.registrationModel.findById(id).exec();
    if (!registration) throw new NotFoundException(`Registration with ID ${id} not found`);
    return registration.toObject();
  }

  async update(id: string, updateDto: Partial<CreateRegistrationDto>): Promise<Registration> {
    const updated = await this.registrationModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
    if (!updated) throw new NotFoundException(`Registration with ID ${id} not found`);
    return updated.toObject();
  }

  async remove(id: string): Promise<Registration> {
    const deleted = await this.registrationModel.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException(`Registration with ID ${id} not found`);
    return deleted.toObject();
  }
}
