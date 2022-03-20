import { Field, InputType } from '@nestjs/graphql';
import { LoginUserInput } from './login-user.input';

@InputType()
export class CreateUserInput extends LoginUserInput {
  @Field()
  name: string;
}
