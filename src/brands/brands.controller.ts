import { Controller, ParseUUIDPipe } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { createBrandsDto } from './dto/brands-dto';
import { Post, Body, Get, Delete, Patch, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandServiceRepo: BrandsService) {}

  @Post()
  create(@Body() brandsDto: createBrandsDto) {
    return this.brandServiceRepo.create(brandsDto);
  }

  @Get()
  findAll() {
    return this.brandServiceRepo.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandServiceRepo.findOne(id);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandServiceRepo.remove(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() changeDto: createBrandsDto,
  ) {
    //const updatedProduct = await this.brandServiceRepo.update(id, changeDto);
    return this.brandServiceRepo.update(id, changeDto);
  }
}
