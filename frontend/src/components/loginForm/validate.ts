export const validate = (values: {name: string, password: string, email: string}) => {
    const errors: {name?: string, password?:string, email?: string} = {};
    if (!values.name) {
        errors.name = 'Обязательное поле';
    } else if (values.name.length > 15) {
        errors.name = 'Не больше 15 символов';
    }

    if (!values.password) {
        errors.password = 'Обязательное поле';
    } else if (values.password.length > 20) {
        errors.password = 'Не больше 20 символов';
    }

    if (!values.email) {
        errors.email = 'Обязательное поле';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};
