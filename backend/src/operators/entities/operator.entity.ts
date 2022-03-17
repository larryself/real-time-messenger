import { Field, ID, ObjectType } from "@nestjs/graphql"
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@ObjectType()
@Entity('operator')
export class OperatorEntity {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    name: string

    @Field()
    @CreateDateColumn()
    createdDate: Date

    @Field()
    @CreateDateColumn()
    updatedDate: Date 
}