import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { MillInfoService } from './millinfo.service';
import { CreateMillInfoDto } from './dto/create-millinfo.dto';
import { UpdateMillInfoDto } from './dto/update-millinfo.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MillInfo } from './schema/millinfo.schema';

@ApiTags('MillInfo')
@Controller('millinfo')
export class MillInfoController {
  constructor(private readonly millInfoService: MillInfoService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new mill info' })
  @ApiResponse({ status: 201, description: 'Mill info created', type: MillInfo })
  create(@Body() createDto: CreateMillInfoDto) {
    return this.millInfoService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all mill info records' })
  @ApiResponse({ status: 200, description: 'List of mill info', type: [MillInfo] })
  findAll() {
    return this.millInfoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a mill info by ID' })
  @ApiResponse({ status: 200, description: 'Mill info found', type: MillInfo })
  findOne(@Param('id') id: string) {
    return this.millInfoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a mill info by ID' })
  @ApiResponse({ status: 200, description: 'Mill info updated', type: MillInfo })
  update(@Param('id') id: string, @Body() updateDto: UpdateMillInfoDto) {
    return this.millInfoService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a mill info by ID' })
  @ApiResponse({ status: 200, description: 'Mill info deleted' })
  remove(@Param('id') id: string) {
    return this.millInfoService.remove(id);
  }
}
