import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegistrationService } from './registration.service'; // ✅ path must be correct
import { Registration, RegistrationDocument } from './schema/registration.schema';
import { CreateRegistrationDto } from './dto/create-registration.dto';

@ApiTags('registration')
@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {} // ✅ inject service

  @Post()
  create(@Body() createRegistrationDto: CreateRegistrationDto): Promise<Registration> {
    return this.registrationService.create(createRegistrationDto); // ✅ must exist
  }

  @Get()
  findAll(): Promise<Registration[]> {
    return this.registrationService.findAll(); // ✅ must exist
  }



   @Get('by-mill/:millid')
  getByMillId(
    @Param('millid') millid: string,
    @Query('deviceId') deviceId: string,
  ) {
    return this.registrationService.getByMillId(
      millid,
      deviceId,
    );
  }


   @Get('registrationWithElp/:millid')
    registrationWithElp(
      @Param('millid') millid: string,
    ) {
      return this.registrationService.getRegistrationElpByMillId(millid);
    }
  
  
  

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Registration> {
    return this.registrationService.findOne(id);
  }


 



  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: Partial<CreateRegistrationDto>): Promise<Registration> {
    return this.registrationService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Registration> {
    return this.registrationService.remove(id);
  }
}
