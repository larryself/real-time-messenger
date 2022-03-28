import { IsNotEmpty } from 'class-validator';

export class TokenDto {
  id: number;

  @IsNotEmpty()
  token: string;
}
