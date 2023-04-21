import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class createBrandsDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  name: string;

  @IsString()
  @IsOptional()
  color: string;

  @IsString()
  @IsOptional()
  model: string;

  @IsString()
  @IsOptional()
  @MinLength(30)
  description: string;

  @IsString()
  @IsNotEmpty()
  userCreate: string;

  @IsNumber()
  @IsNotEmpty()
  dateModified: number;

  @IsNumber()
  @IsNotEmpty()
  createdDate: number;
}
