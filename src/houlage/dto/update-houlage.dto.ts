import { PartialType } from '@nestjs/swagger';
import { CreateHaulageDto } from './create-houlage.dto';

export class UpdateHaulageDto extends PartialType(CreateHaulageDto) {}
