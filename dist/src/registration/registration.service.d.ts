import { Model } from 'mongoose';
import { Registration, RegistrationDocument } from './schema/registration.schema';
import { CreateRegistrationDto } from './dto/create-registration.dto';
export declare class RegistrationService {
    private readonly registrationModel;
    constructor(registrationModel: Model<RegistrationDocument>);
    create(dto: CreateRegistrationDto): Promise<Registration>;
    findAll(): Promise<Registration[]>;
    findOne(id: string): Promise<Registration>;
    update(id: string, updateDto: Partial<CreateRegistrationDto>): Promise<Registration>;
    remove(id: string): Promise<Registration>;
    findByMill(millid: string): Promise<Registration[]>;
}
