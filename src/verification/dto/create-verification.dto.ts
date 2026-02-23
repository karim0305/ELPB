import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsMongoId, IsOptional, IsString } from 'class-validator';



export enum VerificationStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export class CreateVerificationDto {

  @ApiProperty()
  @IsMongoId()
  millid: string;

  @ApiProperty()
  @IsMongoId()
  registrationid: string;

  @ApiProperty()
  @IsMongoId()
  arrivalid: string;

  @ApiProperty({ enum: VerificationStatus })
  @IsEnum(VerificationStatus)
  status: VerificationStatus;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  remarks?: string;
}