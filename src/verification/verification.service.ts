import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Verification, VerificationDocument } from './schema/verification.schema';
import { CreateVerificationDto } from './dto/create-verification.dto';
import { UpdateVerificationDto } from './dto/update-verification.dto';
import { Registration, RegistrationDocument } from 'src/registration/schema/registration.schema';

@Injectable()
export class VerificationService {
  constructor(
    @InjectModel(Verification.name)
    private verificationModel: Model<VerificationDocument>,
     @InjectModel(Registration.name)
  private registrationModel: Model<RegistrationDocument>,
  ) {}

  async create(createDto: CreateVerificationDto): Promise<Verification> {
    const created = new this.verificationModel(createDto);
    return created.save();
  }

  async findAll(): Promise<Verification[]> {
    return this.verificationModel
      .find()
      .populate('millid')
      .populate('registrationid')
      .exec();
  }

  async findOne(id: string): Promise<Verification> {
    const verification = await this.verificationModel
      .findById(id)
      .populate('millid')
      .populate('registrationid')
      .exec();

    if (!verification) {
      throw new NotFoundException('Verification not found');
    }

    return verification;
  }

  async update(
    id: string,
    updateDto: UpdateVerificationDto,
  ): Promise<Verification> {
    const updated = await this.verificationModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();

    if (!updated) {
      throw new NotFoundException('Verification not found');
    }

    return updated;
  }

  async remove(id: string): Promise<{ message: string }> {
    const deleted = await this.verificationModel
      .findByIdAndDelete(id)
      .exec();

    if (!deleted) {
      throw new NotFoundException('Verification not found');
    }

    return { message: 'Verification deleted successfully' };
  }
  

 async GetVerificationByMill(millid: string) {
  return this.registrationModel
    .find({ millid: new Types.ObjectId(millid) })
    .populate('millid')
    .populate('registrationid')
    .populate('arrivalid')
    .lean();
}
}