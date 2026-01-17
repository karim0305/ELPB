import { IsString, IsOptional, IsDate, IsNumber, IsObject, IsMongoId, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GpsDto {
  @ApiProperty({ example: 12.9716, description: 'Latitude of the device' })
  @IsNumber()
  latitude: number;

  @ApiProperty({ example: 77.5946, description: 'Longitude of the device' })
  @IsNumber()
  longitude: number;
}

export class CreateArrivalDto {


  @ApiProperty({ example: '64cfa9a3b8c1a34f9e12abcd', description: 'Unique mill ID' })
 @IsMongoId()
  @IsNotEmpty()
  millid: string;


  @ApiProperty({ example: '64cfa9a3b8c1a34f9e12abcd', description: 'Device MongoDB ObjectId' })
  @IsMongoId()
  @IsNotEmpty()
  deviceId: string;

  
  @ApiProperty({ example: '64cfa9a3b8c1a34f9e12abcd', description: 'Registration MongoDB ObjectId' })
  @IsMongoId()
  @IsNotEmpty()
  registrationId: string;

  @ApiProperty({ example: 'COMP123', description: 'Company code' })
  @IsString()
  companyCode: string;

  @ApiProperty({ example: 'Acme Corp', description: 'Company name' })
  @IsString()
  companyName: string;

  @ApiProperty({ example: 'LP456', description: 'LP code' })
  @IsString()
  lpCode: string; 

  @ApiProperty({ example: 'John Doe', description: 'LP name' })
  @IsString()
  lpName: string;

  @ApiProperty({ example: 'SN789', description: 'Device serial number' })
  @IsString()
  serialNumber: string;

  @ApiProperty({ example: 'IMEI1234567890', description: 'Device IMEI number' })
  @IsString()
  imei: string;


  @ApiPropertyOptional({ type: GpsDto, description: 'GPS coordinates of the device' })
  @IsOptional()
  gps?: GpsDto;

  @ApiPropertyOptional({ example: 15.5, description: 'Distance from tower in km' })
  @IsOptional()
  gpsDistance?: number;

  @ApiPropertyOptional({ example: 'TWR123', description: 'Tower ID' })
  @IsOptional()
  towerId?: string;

  @ApiPropertyOptional({ example: 'H123', description: 'Haulage code' })
  @IsOptional()
  haulageCode?: string;

  @ApiPropertyOptional({ example: 'Haulage Corp', description: 'Haulage name' })
  @IsOptional()
  haulageName?: string;

  @ApiPropertyOptional({ example: 'REG123', description: 'Registration number' })
  @IsOptional()
  registrationNumber?: string;

  @ApiPropertyOptional({ example: 'MH12AB1234', description: 'Vehicle number' })
  @IsOptional()
  vehicleNumber?: string;

  @ApiPropertyOptional({ example: 'permit.jpg', description: 'Permit image URL' })
  @IsOptional()
  permitImage?: string;

  @ApiPropertyOptional({ example: 'driver.jpg', description: 'Driver image URL' })
  @IsOptional()
  driverImage?: string;

  @ApiPropertyOptional({ example: 'vehicle.jpg', description: 'Vehicle image URL' })
  @IsOptional()
  vehicleImage?: string;

  @ApiPropertyOptional({ example: '2026-01-17', description: 'Arrival date' })
  @IsOptional()
  date?: Date;

  @ApiPropertyOptional({ example: '14:30', description: 'Arrival time' })
  @IsOptional()
  time?: string;

  @ApiPropertyOptional({ example: 'On schedule', description: 'Remarks' })
  @IsOptional()
  remarks?: string;

  @ApiPropertyOptional({ example: 'DOC456', description: 'Document number' })
  @IsOptional()
  documentNo?: string;

  @ApiPropertyOptional({ example: '10:00', description: 'Standard expected time' })
  @IsOptional()
  standardTime?: string;

  @ApiPropertyOptional({ example: '00:30', description: 'Time taken' })
  @IsOptional()
  timeTaken?: string;

  @ApiPropertyOptional({ example: '0:30', description: 'Difference from standard time' })
  @IsOptional()
  difference?: string;

 @ApiProperty({ example: 'Pending', description: 'Pending,Accepted,Rejected' })
  @IsString()
  status: string; // new required field
}
