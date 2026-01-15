import { Model } from 'mongoose';
import { Registration, RegistrationDocument } from './schema/registration.schema';
import { CreateRegistrationDto } from './dto/create-registration.dto';
export declare class RegistrationService {
    private registrationModel;
    constructor(registrationModel: Model<RegistrationDocument>);
    create(createRegistrationDto: CreateRegistrationDto): Promise<Registration>;
    findAll(): Promise<Registration[]>;
    findOne(id: string): Promise<Registration>;
    update(id: string, updateDto: Partial<CreateRegistrationDto>): Promise<Registration>;
    remove(id: string): Promise<Registration>;
}
