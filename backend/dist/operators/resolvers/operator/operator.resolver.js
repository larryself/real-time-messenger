"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const operator_entity_1 = require("../../entities/operator.entity");
const create_operatos_input_1 = require("../../inputs/create-operatos.input");
const operator_service_1 = require("../../services/operator/operator.service");
let OperatorResolver = class OperatorResolver {
    constructor(operatorService) {
        this.operatorService = operatorService;
    }
    async createOperator(createOpeatorInput) {
        return await this.operatorService.createOperator(createOpeatorInput);
    }
    async getOneOperator(id) {
        return await this.operatorService.getOneOperator(id);
    }
    async getAllOperators() {
        return await this.operatorService.getAllOperators();
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => operator_entity_1.OperatorEntity),
    __param(0, (0, graphql_1.Args)('createOperator')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_operatos_input_1.CreateOperatorInput]),
    __metadata("design:returntype", Promise)
], OperatorResolver.prototype, "createOperator", null);
__decorate([
    (0, graphql_1.Query)(() => operator_entity_1.OperatorEntity),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OperatorResolver.prototype, "getOneOperator", null);
__decorate([
    (0, graphql_1.Query)(() => [operator_entity_1.OperatorEntity]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OperatorResolver.prototype, "getAllOperators", null);
OperatorResolver = __decorate([
    (0, graphql_1.Resolver)('Operator'),
    __metadata("design:paramtypes", [operator_service_1.OperatorService])
], OperatorResolver);
exports.OperatorResolver = OperatorResolver;
//# sourceMappingURL=operator.resolver.js.map