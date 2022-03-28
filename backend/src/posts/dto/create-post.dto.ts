import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  // @ApiProperty({
  //   example: 'текст сообщения',
  //   description: 'текст сообщения',
  // })
  // readonly from?: string;

  @ApiProperty({
    example: 'текст сообщения',
    description: 'текст сообщения',
    type: String,
  })
  readonly to: string;

  @ApiProperty({
    example: 'текст сообщения',
    description: 'текст сообщения',
    type: String,
  })
  readonly message: string;
}
