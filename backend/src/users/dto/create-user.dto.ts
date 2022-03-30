import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'email@email.ru',
    description: 'Уникальное email пользователя',
    type: String,
  })
  readonly email: string;

  @ApiProperty({
    example: 'name',
    description: 'Уникальное name пользователя',
    type: String,
  })
  readonly name: string;

  @ApiProperty({
    example: 'password',
    description: 'пароль пользователя',
    type: String,
  })
  readonly password: string;
}
