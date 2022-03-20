import React, {FormEvent} from 'react';
import {gql, useMutation, useQuery} from "@apollo/client";

export const CREATE_USER = gql`
    mutation createUser($name: String!, $email: String!) {
      createUser(input: {name: $name, email: $email}) {
        id
        name
        email
        createdAt
        updatedAt
      }
    }
`;

export const CreateUser = () => {
    const [createUser] = useMutation(CREATE_USER);

    const handleSubmit= (event: FormEvent)=>{
        event.preventDefault()
        createUser({variables: {name:'Билайн', email: 'email@email.ru'}})
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>add operator</h2>
            <input type="text" placeholder={'Operator name'}/>


            <button type="submit">Создать</button>
            <button type="button">Назад</button>
        </form>
    );
}
