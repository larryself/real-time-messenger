import { OperatorEntity } from 'src/operators/entities/operator.entity';
import { CreateOperatorInput } from 'src/operators/inputs/create-operatos.input';
import { OperatorService } from 'src/operators/services/operator/operator.service';
export declare class OperatorResolver {
    private readonly operatorService;
    constructor(operatorService: OperatorService);
    createOperator(createOpeatorInput: CreateOperatorInput): Promise<OperatorEntity>;
    getOneOperator(id: number): Promise<OperatorEntity>;
    getAllOperators(): Promise<OperatorEntity[]>;
}
