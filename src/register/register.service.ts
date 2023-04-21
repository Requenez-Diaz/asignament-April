import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegisterDto } from './dto/register.dto';
import { Register } from './entities/register-entities';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(Register)
    private readonly registerRepository: Repository<Register>,
  ) {}

  async create(registerDto: CreateRegisterDto) {
    const register = this.registerRepository.create(registerDto);
    await this.registerRepository.save(register);

    return register;
  }

  findAll() {
    return this.registerRepository.find();
  }
}
