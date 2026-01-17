import { UserRole } from '../enum/user.enum';
export declare class CreateUserDto {
    millid: string;
    name: string;
    email: string;
    phone: string;
    cnic: string;
    address?: string;
    image?: string;
    lastLogin?: Date;
    status?: string;
    password: string;
    role: UserRole;
}
