import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ArrivalService } from './arrival.service';
import { CreateArrivalDto } from './dto/create-arrival.dto';
import { Arrival } from './schema/arrival.schema';

@Controller('arrival')
export class ArrivalController {
  constructor(private readonly arrivalService: ArrivalService) {}

  @Post()
  async create(@Body() createArrivalDto: CreateArrivalDto): Promise<Arrival> {
    return this.arrivalService.create(createArrivalDto);
  }


    @Get('ArrivalMillidWithElp/:millid')
    registrationWithElp(
      @Param('millid') millid: string,
    ) {
      return this.arrivalService.getArrivalElpByMillId(millid);
    }
  

  @Get()
  async findAll(): Promise<Arrival[]> {
    return this.arrivalService.findAll();
  }

  

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Arrival> {
    return this.arrivalService.findById(id);
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ): Promise<Arrival> {
    return this.arrivalService.updateStatus(id, status);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Arrival> {
    return this.arrivalService.delete(id);
  }
}
