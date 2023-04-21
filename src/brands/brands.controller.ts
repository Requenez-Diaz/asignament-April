import { Controller } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { createBrandsDto } from './dto/brands-dto';

@Controller('brands')
export class BrandsController {}
