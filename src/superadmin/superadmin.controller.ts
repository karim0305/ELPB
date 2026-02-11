import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SuperAdminService } from './superadmin.service';
import { CreateSuperAdminDto } from './dto/create-superadmin.dto';
import { UpdateSuperAdminDto } from './dto/update-superadmin.dto';

@ApiTags('Super Admin')
@Controller('super-admin')
export class SuperAdminController {
  constructor(private readonly superAdminService: SuperAdminService) {}

  @Post()
  @ApiOperation({ summary: 'Create Super Admin' })
  @ApiResponse({ status: 201, description: 'Super Admin created' })
  create(@Body() createDto: CreateSuperAdminDto) {
    return this.superAdminService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Super Admins' })
  findAll() {
    return this.superAdminService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Super Admin by ID' })
  findOne(@Param('id') id: string) {
    return this.superAdminService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Super Admin' })
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateSuperAdminDto,
  ) {
    return this.superAdminService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Super Admin' })
  remove(@Param('id') id: string) {
    return this.superAdminService.remove(id);
  }
}
