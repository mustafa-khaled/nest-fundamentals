import { IsDate, IsOptional, IsString, Length } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsOptional()
  @Length(3, 100, {
    message: 'First name must be at least 3 characters long',
  })
  firstName?: string;

  @IsString()
  @IsOptional()
  @Length(3, 100, {
    message: 'Last name must be at least 3 characters long',
  })
  lastName?: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsDate()
  @IsOptional()
  dateOfBirth?: Date;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsString()
  @IsOptional()
  profileImage?: string;
}
