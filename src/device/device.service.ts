import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Device } from './schema/device.schema';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Injectable()
export class DeviceService {
  constructor(
    @InjectModel(Device.name)
    private readonly deviceModel: Model<Device>,
  ) {}

  // ✅ CREATE
  async create(data: CreateDeviceDto): Promise<Device> {
    const device = new this.deviceModel(data);
    return device.save();
  }

  // ✅ READ – ALL
 async findAll() {
  return this.deviceModel
    .find()
    .populate('millid') // 👈 THIS is the key
    .exec();
}

  // ✅ READ – BY MILLID
  async findByMillid(millid: string): Promise<Device> {
    const device = await this.deviceModel.findOne({ millid }).exec();

    if (!device) {
      throw new NotFoundException(`Device with millid ${millid} not found`);
    }

    return device;
  }

  // ✅ UPDATE – BY MILLID
  async updateByMillid(
    millid: string,
    updateData: UpdateDeviceDto,
  ): Promise<Device> {
    const updatedDevice = await this.deviceModel.findOneAndUpdate(
      { millid },
      { $set: updateData },
      { new: true, runValidators: true },
    );

    if (!updatedDevice) {
      throw new NotFoundException(`Device with millid ${millid} not found`);
    }

    return updatedDevice;
  }

 async deleteById(deviceId: string): Promise<{ message: string }> {
    const deletedDevice = await this.deviceModel.findByIdAndDelete(deviceId);

    if (!deletedDevice) {
      throw new NotFoundException(`Device with id ${deviceId} not found`);
    }

    return { message: 'Device deleted successfully' };
  }
}
