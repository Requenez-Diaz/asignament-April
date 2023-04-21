import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
