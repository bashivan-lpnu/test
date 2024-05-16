import {useEffect, useState} from "react";

export const useValidation = (value, validations) => {

    const [isEmpty, setIsEmpty] = useState(true);
    const [isEmail, setIsEmail] = useState(true);
    const [isCorrectBirthdate, setIsCorrectBirthdate] = useState(true);
    const [minLength, setMinLength] = useState(true);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value.trim() === '' ? setIsEmpty(true) : setIsEmpty(false);
                    break;
                case 'isEmail':
                    new RegExp(/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm")
                        .test(value) ? setIsEmail(true) : setIsEmail(false);
                    break;
                case 'isCorrectBirthdate':
                    new Date(value) < new Date() && new Date(value) > new Date().getFullYear() - 100
                    ? setIsCorrectBirthdate(true) : setIsCorrectBirthdate(false);
                    break;
                case 'minLength':
                    value.length > validations[validation] ? setMinLength(true) : setMinLength(false);
                    break;
                default:
                    break;
            }
        }
    }, [value, validations]);

    return {
        isEmpty,
        isEmail,
        isCorrectBirthdate,
        minLength
    }
}
