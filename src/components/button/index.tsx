import { ButtonStyled } from "./styled";

interface ButtonInterface {
    text: string
    type: 'button' | 'reset' | 'submit'
}

export const Button = ({ text, type }: ButtonInterface) => {

    return (
        <ButtonStyled type={type}>
            {text}
        </ButtonStyled>
    )
}