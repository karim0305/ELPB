import { Model } from 'mongoose';
import { Registration, RegistrationDocument } from './schema/registration.schema';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { RegistrationGateway } from './registration.gateway';
export declare class RegistrationService {
    private readonly registrationModel;
    private readonly registrationGateway;
    constructor(registrationModel: Model<RegistrationDocument>, registrationGateway: RegistrationGateway);
    create(dto: CreateRegistrationDto): Promise<Registration>;
    findAll(): Promise<Registration[]>;
    getElpByMillId(millid: string): Promise<(import("mongoose").FlattenMaps<RegistrationDocument> & Required<{
        _id: import("mongoose").FlattenMaps<unknown>;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<Registration>;
    update(id: string, updateDto: Partial<CreateRegistrationDto>): Promise<Registration>;
    remove(id: string): Promise<Registration>;
    findByMill(millid: string): Promise<Registration[]>;
    getByMillId(millid: string, deviceId?: string): Promise<(import("mongoose").Document<unknown, {}, RegistrationDocument, {}, {}> & Registration & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
