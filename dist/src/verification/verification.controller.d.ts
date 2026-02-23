import { VerificationService } from './verification.service';
import { CreateVerificationDto } from './dto/create-verification.dto';
import { UpdateVerificationDto } from './dto/update-verification.dto';
export declare class VerificationController {
    private readonly verificationService;
    constructor(verificationService: VerificationService);
    create(createDto: CreateVerificationDto): Promise<import("./schema/verification.schema").Verification>;
    findAll(): Promise<import("./schema/verification.schema").Verification[]>;
    findOne(id: string): Promise<import("./schema/verification.schema").Verification>;
    update(id: string, updateDto: UpdateVerificationDto): Promise<import("./schema/verification.schema").Verification>;
    remove(id: string): Promise<{
        message: string;
    }>;
    GetVerification(millid: string): Promise<any[]>;
}
