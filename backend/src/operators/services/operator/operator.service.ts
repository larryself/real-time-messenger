import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OperatorEntity } from 'src/operators/entities/operator.entity';
import { CreateOperatorInput } from 'src/operators/inputs/create-operatos.input';
import { Repository } from 'typeorm';

@Injectable()
export class OperatorService {
    constructor(
        @InjectRepository(OperatorEntity)
        private readonly operatorRepository: Repository<OperatorEntity>
    ){}

    async createOperator(operatorInput: CreateOperatorInput): Promise<OperatorEntity>{
        return await this.operatorRepository.save({...operatorInput})
    } 

    async getOneOperator(id: number): Promise<OperatorEntity>{
        return await this.operatorRepository.findOne({id})
    } 

    async getAllOperators(): Promise<OperatorEntity[]>{
        return await this.operatorRepository.find()
    } 

    async pay(phone: number, amount: number): Promise<number>{
        
        return phone
    }
}
