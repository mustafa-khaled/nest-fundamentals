import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 100, {
    message: 'First name must be at least 3 characters long',
  })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 100, {
    message: 'Last name must be at least 3 characters long',
  })
  lastName: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;
}
