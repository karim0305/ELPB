import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

class LocationDto {
  @ApiProperty({
    example: 28.6139,
    description: 'Latitude of the device location',
  })
  @IsNumber()
  latitude: number;

  @ApiProperty({
    example: 77.209,
    description: 'Longitude of the device location',
  })
  @IsNumber()
  longitude: number;

  @ApiPropertyOptional({
    example: 215,
    description: 'Altitude in meters (Android only)',
  })
  @IsOptional()
  @IsNumber()
  altitude?: number;

  @ApiPropertyOptional({
    example: 3.4,
    description: 'Speed in m/s (Android only)',
  })
  @IsOptional()
  @IsNumber()
  speed?: number;
}

export class CreateDeviceDto {
  @ApiProperty({
    example: '64cfa9a3b8c1a34f9e12abcd',
    description: 'MillInfo MongoDB ObjectId',
  })
  @IsMongoId()
  millid: string;

  @ApiProperty({
    example: 'Pixel 7',
    description: 'Device model',
  })
  @IsString()
  deviceModel: string;

  @ApiProperty({
    example: 'Google',
    description: 'Device brand/manufacturer',
  })
  @IsString()
  deviceBrand: string;

  @ApiProperty({
    type: LocationDto,
    example: {
      latitude: 28.6139,
      longitude: 77.209,
      altitude: 215,
      speed: 3.4,
    },
  })
  location: LocationDto;

  @ApiPropertyOptional({
    example: 'New Delhi, India',
    description: 'Human-readable approximate location',
  })
  @IsOptional()
  @IsString()
  approximateLocation?: string;

  @ApiProperty({
    example: true,
    description: 'Internet connectivity status',
  })
  @IsBoolean()
  internetStatus: boolean;

  @ApiPropertyOptional({
    example: null,
    description: 'IMEI (usually unavailable due to OS restrictions)',
  })
  @IsOptional()
  @IsString()
  imei?: string;

  @ApiPropertyOptional({
    example: '02:00:00:00:00:00',
    description: 'Randomized MAC address on modern OS',
  })
  @IsOptional()
  @IsString()
  macAddress?: string;
}
