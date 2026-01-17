import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@ApiTags('Device')
@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  // ✅ CREATE
  @Post()
  @ApiOperation({ summary: 'Register device information' })
  create(@Body() dto: CreateDeviceDto) {
    return this.deviceService.create(dto);
  }

  // ✅ READ ALL
  @Get()
  @ApiOperation({ summary: 'Get all device records' })
  findAll() {
    return this.deviceService.findAll();
  }

  // ✅ READ ONE
  @Get(':millid')
  @ApiParam({ name: 'millid', example: 'mill-123456' })
  @ApiOperation({ summary: 'Get device by millid' })
  findOne(@Param('millid') millid: string) {
    return this.deviceService.findByMillid(millid);
  }

  // ✅ UPDATE
  @Patch(':millid')
  @ApiParam({ name: 'millid', example: 'mill-123456' })
  @ApiOperation({ summary: 'Update device information by millid' })
  update(
    @Param('millid') millid: string,
    @Body() dto: UpdateDeviceDto,
  ) {
    return this.deviceService.updateByMillid(millid, dto);
  }

  // ✅ DELETE
  @Delete(':millid')
  @ApiParam({ name: 'millid', example: 'mill-123456' })
  @ApiOperation({ summary: 'Delete device by millid' })
  remove(@Param('millid') millid: string) {
    return this.deviceService.deleteById(millid);
  }
}
