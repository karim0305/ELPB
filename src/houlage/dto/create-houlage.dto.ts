import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateHaulageDto {

  @ApiProperty({ example: '65a7c1e3c12f9a6b91f42abc' })
  @IsMongoId()
  millid: string;

  @ApiProperty({ example: 'HLG001' })
  @IsString()
  @IsNotEmpty()
  haulageCode: string;

  @ApiProperty({ example: 'ABC Transport' })
  @IsString()
  @IsNotEmpty()
  haulageName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  remarks?: string;
}
