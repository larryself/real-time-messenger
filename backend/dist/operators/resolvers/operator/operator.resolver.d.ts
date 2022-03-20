import { OperatorEntity } from '../../entities/operator.entity';
import { OperatorService } from '../../services/operator/operator.service';
import { CreateOperatorInput } from '../../inputs/create-operator.input';
export declare class OperatorResolver {
    private readonly operatorService;
    constructor(operatorService: OperatorService);
    createOperator(createOperatorInput: CreateOperatorInput): Promise<OperatorEntity>;
    getOneOperator(id: number): Promise<OperatorEntity>;
    getAllOperators(): Promise<OperatorEntity[]>;
    removeOperator(id: number): Promise<number>;
}
