import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateOperatorInput {
    @Field()
    name: string
}