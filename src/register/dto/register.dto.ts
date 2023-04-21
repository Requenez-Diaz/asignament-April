import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateRegisterDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  nameEvent: string;

  @IsString()
  @IsNotEmpty()
  user: string;

  @IsNumber()
  @IsOptional()
  date: number;

  @IsNumber()
  @IsOptional()
  our: number;

  @IsString()
  @IsNumber()
  typeEvent: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  stateEvent: string;
}
