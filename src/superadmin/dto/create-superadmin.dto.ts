import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSuperAdminDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '03001234567' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: '35202-1234567-1' })
  @IsString()
  @IsNotEmpty()
  cnic: string;

  @ApiProperty({ example: 'Lahore, Pakistan', required: false })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
