import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  name: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsBoolean()
  isMarried: boolean;
}
