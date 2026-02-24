import { Model } from 'mongoose';
import { Verification, VerificationDocument } from './schema/verification.schema';
import { CreateVerificationDto } from './dto/create-verification.dto';
import { UpdateVerificationDto } from './dto/update-verification.dto';
import { RegistrationDocument } from 'src/registration/schema/registration.schema';
export declare class VerificationService {
    private verificationModel;
    private registrationModel;
    constructor(verificationModel: Model<VerificationDocument>, registrationModel: Model<RegistrationDocument>);
    create(createDto: CreateVerificationDto): Promise<Verification>;
    findAll(): Promise<Verification[]>;
    findOne(id: string): Promise<Verification>;
    update(id: string, updateDto: UpdateVerificationDto): Promise<Verification>;
    remove(id: string): Promise<{
        message: string;
    }>;
    GetVerificationByMill(millid: string): Promise<(import("mongoose").FlattenMaps<VerificationDocument> & Required<{
        _id: import("mongoose").FlattenMaps<unknown>;
    }> & {
        __v: number;
    })[]>;
}
