import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brands } from './entities/brands-entities';
import { createBrandsDto } from './dto/brands-dto';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brands)
    private readonly brandRepository: Repository<Brands>,
  ) {}

  async create(brandDto: createBrandsDto) {
    const brands = this.brandRepository.create(brandDto);
    await this.brandRepository.save(brands);

    return brands;
  }
  findAll() {
    return this.brandRepository.find();
  }

  //Metodo para visualizar un producto
  findOne(id: string) {
    return this.brandRepository.findOneBy({ id });
  }

  //eliminar productos

  async remove(id: string) {
    const product = await this.findOne(id);
    await this.brandRepository.remove(product);
    return `brands deleted`;
  }

  async update(id: string, changeDto: createBrandsDto) {
    const findBrands = await this.findOne(id);
    const updateBrands = await this.brandRepository.merge(
      findBrands,
      changeDto,
    );

    return this.brandRepository.update(id, updateBrands);
  }
}
