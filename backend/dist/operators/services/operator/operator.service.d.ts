import { OperatorEntity } from 'src/operators/entities/operator.entity';
import { CreateOperatorInput } from 'src/operators/inputs/create-operatos.input';
import { Repository } from 'typeorm';
export declare class OperatorService {
    private readonly operatorRepository;
    constructor(operatorRepository: Repository<OperatorEntity>);
    createOperator(operatorInput: CreateOperatorInput): Promise<OperatorEntity>;
    getOneOperator(id: number): Promise<OperatorEntity>;
    getAllOperators(): Promise<OperatorEntity[]>;
    pay(phone: number, amount: number): Promise<number>;
}
