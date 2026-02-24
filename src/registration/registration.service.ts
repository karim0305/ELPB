import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Registration, RegistrationDocument } from './schema/registration.schema';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { RegistrationGateway } from './registration.gateway';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectModel(Registration.name)
    private readonly registrationModel: Model<RegistrationDocument>,
     private readonly registrationGateway: RegistrationGateway,
  ) {}

  // CREATE
async create(dto: CreateRegistrationDto): Promise<Registration> {
  try {
   const lastRegistration = await this.registrationModel
  .findOne({}, { regid: 1 })
  .sort({ createdAt: -1 })
  .lean();

    let nextNumber = 1001;

    if (lastRegistration?.regid) {
      const lastNum = parseInt(
        lastRegistration.regid.replace('CSML', ''),
        10,
      );
      nextNumber = lastNum + 1;
    }

    const regid = `CSML${Date.now()}`;

    const created = new this.registrationModel({
      ...dto,
      regid, // ✅ injected here
      millid: new Types.ObjectId(dto.millid),
      deviceId: new Types.ObjectId(dto.deviceId),
      elpId: new Types.ObjectId(dto.elpId),
      gps: dto.gps
        ? {
            latitude: dto.gps.latitude,
            longitude: dto.gps.longitude,
          }
        : undefined,
      status: 'Pending',
    });

    const saved = await created.save();
    this.registrationGateway.emitRegistrationCreated(saved);
    return saved;
  } catch (error) {
    throw error;
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

    this.registrationGateway.emitRegistrationUpdated(updated.toObject());
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

    this.registrationGateway.emitRegistrationDeleted(id);
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


   async getByMillId(
    millid: string,
    deviceId?: string,
  ) {
    const query: any = {
      millid: new Types.ObjectId(millid),
    };

   

    if (deviceId) {
      query.deviceId = new Types.ObjectId(deviceId);
    }

    return this.registrationModel
      .find(query)
      .sort({ createdAt: -1 });
  }
}
