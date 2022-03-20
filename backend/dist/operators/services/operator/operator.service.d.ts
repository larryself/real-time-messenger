import { OperatorEntity } from '../../entities/operator.entity';
import { CreateOperatorInput } from '../../inputs/create-operator.input';
import { Repository } from 'typeorm';
export declare class OperatorService {
    private readonly operatorRepository;
    constructor(operatorRepository: Repository<OperatorEntity>);
    createOperator(operatorInput: CreateOperatorInput): Promise<OperatorEntity>;
    getOneOperator(id: number): Promise<OperatorEntity>;
    getAllOperators(): Promise<OperatorEntity[]>;
    removeOperator(id: number): Promise<number>;
    pay(phone: number, amount: number): Promise<number>;
}
