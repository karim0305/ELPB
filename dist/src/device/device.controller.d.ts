import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
export declare class DeviceController {
    private readonly deviceService;
    constructor(deviceService: DeviceService);
    create(dto: CreateDeviceDto): Promise<import("./schema/device.schema").Device>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/device.schema").Device, {}, {}> & import("./schema/device.schema").Device & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(millid: string): Promise<import("./schema/device.schema").Device>;
    update(millid: string, dto: UpdateDeviceDto): Promise<import("./schema/device.schema").Device>;
    remove(millid: string): Promise<{
        message: string;
    }>;
}
