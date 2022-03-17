import React, {FC} from "react";
import { OperatorItem } from "../operatorItem";
import {Link} from "react-router-dom";
import {List} from './style';

interface Operators {
    id: number,
    name: string,
}
interface OperatorListProps {
    operators: Operators[]
}
export const OperatorList: FC<OperatorListProps> = ({operators}) => {
    return (
        <List>
            {operators.map((operator) => (
                <li key={operator.id}>
                    <Link to={`/pay/${operator.name}`}>
                        <OperatorItem name={operator.name}/>
                    </Link>
                </li>
            ))}
        </List>
    )
}