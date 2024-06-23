import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsEmail, IsInt, IsString } from 'class-validator';

export class usersDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
  @Type(() => Number)
  @IsInt()
  age: number;
}

export class usersUpdateDto extends PartialType(usersDto) {}
