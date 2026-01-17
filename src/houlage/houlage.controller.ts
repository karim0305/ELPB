import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Haulage, HaulageSchema } from './schema/houlage.schema';
import { HaulageService } from './houlage.service';
import { CreateHaulageDto } from './dto/create-houlage.dto';
import { UpdateHaulageDto } from './dto/update-houlage.dto';
@ApiTags('Haulage')
@Controller('haulage')
export class HaulageController {
  constructor(private readonly haulageService: HaulageService) {}

  @Post()
  @ApiOperation({ summary: 'Create haulage' })
  @ApiResponse({ status: 201, type: Haulage })
  create(@Body() dto: CreateHaulageDto) {
    return this.haulageService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all haulages' })
  findAll() {
    return this.haulageService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get haulage by ID' })
  findOne(@Param('id') id: string) {
    return this.haulageService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update haulage' })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateHaulageDto,
  ) {
    return this.haulageService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete haulage' })
  remove(@Param('id') id: string) {
    return this.haulageService.remove(id);
  }
}
