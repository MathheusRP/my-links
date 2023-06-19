import { HTMLInputTypeAttribute } from "react";
import { InputStyled } from "./styled";

interface InputInterface {
    type: HTMLInputTypeAttribute
    id: string
    label: string
}

export const Input = ({ type, id, label }: InputInterface) => {

    return (
        <InputStyled>
            <input id={id} type={type} required={true} />
            <label htmlFor={id}>{label}</label>
        </InputStyled>
    )
}

