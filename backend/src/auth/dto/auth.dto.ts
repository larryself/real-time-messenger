import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({
    example: 'email@email.ru',
    description: 'Уникальное email пользователя',
    type: String,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty({
    example: 'name',
    description: 'Уникальное name пользователя',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({
    example: 'password',
    description: 'пароль пользователя',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
