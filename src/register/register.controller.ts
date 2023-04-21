import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRegisterDto } from './dto/register.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerServiceRepo: RegisterService) {}

  @Post()
  create(@Body() RegisterDto: CreateRegisterDto) {
    return this.registerServiceRepo.create(RegisterDto);
  }

  @Get()
  findAll() {
    return this.registerServiceRepo.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.registerServiceRepo.findOne(id);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.registerServiceRepo.remove(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() changeDto: CreateRegisterDto,
  ) {
    //const updatedProduct = await this.registerServiceRepo.update(id, changeDto);
    return this.registerServiceRepo.update(id, changeDto);
  }
}
