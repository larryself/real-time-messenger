"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperatorsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const operator_entity_1 = require("./entities/operator.entity");
const operator_service_1 = require("./services/operator/operator.service");
const operator_resolver_1 = require("./resolvers/operator/operator.resolver");
let OperatorsModule = class OperatorsModule {
};
OperatorsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([operator_entity_1.OperatorEntity])],
        providers: [operator_service_1.OperatorService, operator_resolver_1.OperatorResolver],
    })
], OperatorsModule);
exports.OperatorsModule = OperatorsModule;
//# sourceMappingURL=operators.module.js.map