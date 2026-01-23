import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateElpDto {
  @ApiProperty({
    example: '66a1f0e2b3c4d5e6f7890123',
    description: 'Mill ObjectId',
  })
  @IsMongoId()
  millid: string;

  @ApiProperty({
    example: 'ELP001',
    description: 'ELP Code',
  })
  @IsString()
  @IsNotEmpty()
  elpCode: string;

  @ApiProperty({
    example: 'Main ELP Point',
    description: 'ELP Name',
  })
  @IsString()
  @IsNotEmpty()
  elpName: string;

  @ApiProperty({
    example: 'Near warehouse gate',
    required: false,
  })
  @IsOptional()
  @IsString()
  remarks?: string;
}
