import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMillInfoDto {
    @ApiProperty({ example: 'MILL001', description: 'Unique mill code' })
  @IsString()
  @IsNotEmpty()
  millcode: string;

  @ApiProperty({ example: 'Sunrise Textile Mill', description: 'Name of the mill' })
  @IsString()
  @IsNotEmpty()
  millname: string;

  @ApiProperty({ example: 'John Doe', description: 'Focal person for the mill' })
  @IsString()
  @IsNotEmpty()
  focalperson: string;

  @ApiProperty({ example: '35201-1234567-8', description: 'CNIC of the focal person' })
  @IsString()
  @IsNotEmpty()
  cnic: string;

  @ApiProperty({ example: '+92-300-1234567', description: 'Contact phone number' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: '123 Textile Street, Lahore', description: 'Address of the mill', required: false })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({ example: 'contact@sunrisemill.com', description: 'Email of the mill' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Admin', description: 'Role of the user', required: false })
  @IsString()
  @IsOptional()
  role?: string;

  @ApiProperty({ example: 'https://via.placeholder.com/150', description: 'Profile picture URL', required: false })
  @IsString()
  @IsOptional()
  profilePicture?: string;

  @ApiProperty({ example: 'Active', description: 'Status of the mill info', required: false })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiProperty({ example: 'P@ssw0rd123', description: 'Password for the mill account' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
