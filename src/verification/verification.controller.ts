import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VerificationService } from './verification.service';
import { CreateVerificationDto } from './dto/create-verification.dto';
import { UpdateVerificationDto } from './dto/update-verification.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('Verification')
@Controller('verification')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @Post()
  @ApiOperation({ summary: 'Create verification' })
  @ApiResponse({ status: 201, description: 'Verification created successfully' })
  create(@Body() createDto: CreateVerificationDto) {
    return this.verificationService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all verifications' })
  findAll() {
    return this.verificationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get verification by id' })
  @ApiParam({ name: 'id', required: true })
  findOne(@Param('id') id: string) {
    return this.verificationService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update verification' })
  @ApiParam({ name: 'id', required: true })
  update(
    @Param('id') id: string,
    @Body() updateDto: UpdateVerificationDto,
  ) {
    return this.verificationService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete verification' })
  @ApiParam({ name: 'id', required: true })
  remove(@Param('id') id: string) {
    return this.verificationService.remove(id);
  }

  @Get('verification/:millid') GetVerification( @Param('millid') millid: string, ) 
  {
     return this.verificationService.GetVerificationByMill(millid); 


  }
}