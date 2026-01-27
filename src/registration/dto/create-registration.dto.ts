import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsDate, ValidateNested, IsMongoId, IsNotEmpty } from 'class-validator';
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
  
  @ApiProperty({ example: '64cfa9a3b8c1a34f9e12abcd', description: 'Unique mill ID' })
 @IsMongoId()
  @IsNotEmpty()
  millid: string;


  @ApiProperty({ example: '64cfa9a3b8c1a34f9e12abcd', description: 'Device MongoDB ObjectId' })
  @IsMongoId()
  @IsNotEmpty()
  deviceId: string;



  @ApiProperty({ example: '64cfa9a3b8c1a34f9e12abcd', description: 'Unique id of ELp' })
  @IsMongoId()
  @IsNotEmpty()
  elpId: string;


  @ApiProperty({
    example: { latitude: 37.7749, longitude: -122.4194 },
    description: 'GPS coordinates',
    required: false,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => GpsDto)
  gps?: GpsDto;

  
  @ApiProperty({ example: 'TWR1001', description: 'Tower ID', required: false })
  @IsOptional()
  @IsString()
  towerId?: string;

  @ApiProperty({ example: 'HLG001', description: 'Haulage code', required: false })
  @IsOptional()
  @IsString()
  haulage?: string;

  @ApiProperty({ example: 'DOC12345', description: 'Document number', required: false })
  @IsOptional()
  @IsString()
  documentNo?: string;

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


  @ApiProperty({ example: 'All checks passed', description: 'Remarks', required: false })
  @IsOptional()
  @IsString()
  remarks?: string;

  

  
 

  @ApiProperty({ example: 'Pending', description: 'Pending,Accepted,Rejected' })
  @IsString()
  status: string; // new required field
}
