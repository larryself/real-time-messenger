import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  userId: number;

  @Field({ nullable: true })
  content: string;
}
