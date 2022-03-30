import { ApiProperty } from '@nestjs/swagger';

export class MessageResponseDTO {
  @ApiProperty({
    example: 'id сообщения',
    description: 'id сообщения',
    type: Number,
  })
  id: number;

  @ApiProperty({
    example: 'текст сообщения',
    description: 'текст сообщения',
    type: String,
  })
  message: string;

  @ApiProperty({
    example: 'Автор сообщения',
    description: 'Автор сообщения',
    type: String,
  })
  to: string;
}
