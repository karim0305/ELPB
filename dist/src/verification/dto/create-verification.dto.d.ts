export declare enum VerificationStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}
export declare class CreateVerificationDto {
    millid: string;
    registrationid: string;
    arrivalid: string;
    status: VerificationStatus;
    remarks?: string;
}
