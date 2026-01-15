import { RegistrationService } from './registration.service';
import { Registration } from './schema/registration.schema';
import { CreateRegistrationDto } from './dto/create-registration.dto';
export declare class RegistrationController {
    private readonly registrationService;
    constructor(registrationService: RegistrationService);
    create(createRegistrationDto: CreateRegistrationDto): Promise<Registration>;
    findAll(): Promise<Registration[]>;
    findOne(id: string): Promise<Registration>;
    update(id: string, updateDto: Partial<CreateRegistrationDto>): Promise<Registration>;
    remove(id: string): Promise<Registration>;
}
