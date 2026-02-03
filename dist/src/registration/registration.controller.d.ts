import { RegistrationService } from './registration.service';
import { Registration, RegistrationDocument } from './schema/registration.schema';
import { CreateRegistrationDto } from './dto/create-registration.dto';
export declare class RegistrationController {
    private readonly registrationService;
    constructor(registrationService: RegistrationService);
    create(createRegistrationDto: CreateRegistrationDto): Promise<Registration>;
    findAll(): Promise<Registration[]>;
    getByMillId(millid: string, deviceId: string): Promise<(import("mongoose").Document<unknown, {}, RegistrationDocument, {}, {}> & Registration & import("mongoose").Document<unknown, any, any, Record<string, any>, {}> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<Registration>;
    update(id: string, updateDto: Partial<CreateRegistrationDto>): Promise<Registration>;
    remove(id: string): Promise<Registration>;
}
