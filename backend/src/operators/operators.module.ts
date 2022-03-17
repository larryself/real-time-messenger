import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperatorEntity } from 'src/operators/entities/operator.entity';
import { OperatorService } from './services/operator/operator.service';
import { OperatorResolver } from './resolvers/operator/operator.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([OperatorEntity])],
    providers: [OperatorService, OperatorResolver]
})
export class OperatorsModule {}
