import { PartialType } from '@nestjs/swagger';
import { CreateMillInfoDto } from './create-millinfo.dto';

export class UpdateMillInfoDto extends PartialType(CreateMillInfoDto) {}
