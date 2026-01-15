import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class GpsDto {
  @ApiProperty({ example: 37.7749, description: 'Latitude of the device' })
  @IsNumber()
  latitude: number;

  @ApiProperty({ example: -122.4194, description: 'Longitude of the device' })
  @IsNumber()
  longitude: number;
}

export class CreateRegistrationDto {
  @ApiProperty({ example: '6466464', description: 'Unique mill ID' })
  @IsString()
  millid: string;

  @ApiProperty({ example: 'COMP001', description: 'Company code' })
  @IsString()
  companyCode: string;

  @ApiProperty({ example: 'Millid Corporation', description: 'Company name' })
  @IsString()
  companyName: string;

  @ApiProperty({ example: 'LP1001', description: 'Logistics partner code' })
  @IsString()
  lpCode: string;

  @ApiProperty({ example: 'Logistics Partner 1', description: 'Logistics partner name' })
  @IsString()
  lpName: string;

  @ApiProperty({ example: 'SN123456789', description: 'Device serial number' })
  @IsString()
  serialNumber: string;

  @ApiProperty({ example: 'IMEI123456789012345', description: 'Device IMEI number' })
  @IsString()
  imei: string;

  @ApiProperty({
    example: { latitude: 37.7749, longitude: -122.4194 },
    description: 'GPS coordinates',
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => GpsDto)
  gps?: GpsDto;

  @ApiProperty({ example: 5.2, description: 'GPS distance in km', required: false })
  @IsOptional()
  @IsNumber()
  gpsDistance?: number;

  @ApiProperty({ example: 'TWR1001', description: 'Tower ID', required: false })
  @IsOptional()
  @IsString()
  towerId?: string;

  @ApiProperty({ example: 'HLG001', description: 'Haulage code', required: false })
  @IsOptional()
  @IsString()
  haulageCode?: string;

  @ApiProperty({ example: 'Haulage Company 1', description: 'Haulage name', required: false })
  @IsOptional()
  @IsString()
  haulageName?: string;

  @ApiProperty({ example: 'REG1234', description: 'Registration number', required: false })
  @IsOptional()
  @IsString()
  registrationNumber?: string;

  @ApiProperty({ example: 'VEH1234', description: 'Vehicle number', required: false })
  @IsOptional()
  @IsString()
  vehicleNumber?: string;

  @ApiProperty({ example: 'permit.png', description: 'Permit image filename', required: false })
  @IsOptional()
  @IsString()
  permitImage?: string;

  @ApiProperty({ example: 'driver.png', description: 'Driver image filename', required: false })
  @IsOptional()
  @IsString()
  driverImage?: string;

  @ApiProperty({ example: 'vehicle.png', description: 'Vehicle image filename', required: false })
  @IsOptional()
  @IsString()
  vehicleImage?: string;

  @ApiProperty({ example: '2026-01-15', description: 'Date of registration', required: false })
  @IsOptional()
  @IsDate()
  date?: Date;

  @ApiProperty({ example: '10:30', description: 'Time of registration', required: false })
  @IsOptional()
  @IsString()
  time?: string;

  @ApiProperty({ example: 'All checks passed', description: 'Remarks', required: false })
  @IsOptional()
  @IsString()
  remarks?: string;

  @ApiProperty({ example: 'DOC12345', description: 'Document number', required: false })
  @IsOptional()
  @IsString()
  documentNo?: string;

  @ApiProperty({ example: '24 Hours 0 Minutes', description: 'Standard time', required: false })
  @IsOptional()
  @IsString()
  standardTime?: string;

  @ApiProperty({ example: '1 Hour 37 Minutes', description: 'Time taken', required: false })
  @IsOptional()
  @IsString()
  timeTaken?: string;

  @ApiProperty({ example: '22 Hours 22 Minutes Early', description: 'Difference', required: false })
  @IsOptional()
  @IsString()
  difference?: string;
}
