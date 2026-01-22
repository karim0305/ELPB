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
 @Get('imei/:imei')
@ApiParam({ name: 'imei', example: '8f7d6623071fd85c' })
@ApiOperation({ summary: 'Get device by IMEI' })
findByImei(@Param('imei') imei: string) {
  return this.deviceService.findByImei(imei);
}


  // ✅ UPDATE
 @Patch('imei/:imei')
@ApiParam({ name: 'imei', example: '8f7d6623071fd85c' })
@ApiOperation({ summary: 'Update device information by IMEI' })
updateByImeiController(
  @Param('imei') imei: string,
  @Body() dto: UpdateDeviceDto,
) {
  return this.deviceService.updateByImei(imei, dto);
}

  // ✅ DELETE
@Delete('imei/:imei')
@ApiParam({ name: 'imei', example: '8f7d6623071fd85c' })
@ApiOperation({ summary: 'Delete device by IMEI' })
deleteByImeiController(@Param('imei') imei: string) {
  return this.deviceService.deleteByImei(imei);
}
}
