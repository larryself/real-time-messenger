
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { OperatorEntity } from 'src/operators/entities/operator.entity';
import { CreateOperatorInput } from 'src/operators/inputs/create-operatos.input';
import { OperatorService } from 'src/operators/services/operator/operator.service';

@Resolver('Operator')
export class OperatorResolver {
    constructor(private readonly operatorService: OperatorService){}

    @Mutation(() => OperatorEntity)
    async createOperator(@Args('createOperator') createOpeatorInput: CreateOperatorInput){
        return await this.operatorService.createOperator(createOpeatorInput)
    }
    @Query(()=> OperatorEntity)
   async getOneOperator(@Args('id') id: number): Promise<OperatorEntity>{
       return await this.operatorService.getOneOperator(id)
   }
   @Query(()=> [OperatorEntity])
   async getAllOperators(): Promise<OperatorEntity[]>{
       return await this.operatorService.getAllOperators()
   }
}
