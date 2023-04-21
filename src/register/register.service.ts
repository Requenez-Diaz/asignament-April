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

  findOne(id: string) {
    return this.registerRepository.findOneBy({ id });
  }

  async remove(id: string) {
    const register = await this.findOne(id);
    await this.registerRepository.remove(register);
    return `register deleted`;
  }

  async update(id: string, changeDto: CreateRegisterDto) {
    const findRegister = await this.findOne(id);
    const updateRegister = await this.registerRepository.merge(
      findRegister,
      changeDto,
    );

    return this.registerRepository.update(id, updateRegister);
  }
}
