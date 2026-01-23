import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ElpService } from './elp.service';
import { CreateElpDto } from './dto/create-elp.dto';
import { UpdateElpDto } from './dto/update-elp.dto';

@ApiTags('ELP')
@Controller('elp')
export class ElpController {
  constructor(private readonly elpService: ElpService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ELP' })
  @ApiBody({ type: CreateElpDto })
  create(@Body() createElpDto: CreateElpDto) {
    return this.elpService.create(createElpDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all ELPs' })
  findAll() {
    return this.elpService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get ELP by ID' })
  @ApiParam({ name: 'id', example: '66a1f0e2b3c4d5e6f7890123' })
  findOne(@Param('id') id: string) {
    return this.elpService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update ELP by ID' })
  @ApiParam({ name: 'id', example: '66a1f0e2b3c4d5e6f7890123' })
  update(
    @Param('id') id: string,
    @Body() updateElpDto: UpdateElpDto,
  ) {
    return this.elpService.update(id, updateElpDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete ELP by ID' })
  @ApiParam({ name: 'id', example: '66a1f0e2b3c4d5e6f7890123' })
  remove(@Param('id') id: string) {
    return this.elpService.remove(id);
  }
}
