import styled from "styled-components";

export const InputStyled = styled.div`

    width: 90%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    position: relative;

    input {
        border: 2px solid var(--black);
        height: 50px;
        background-color: transparent;
        border-radius: 12px;
        outline: none;
        font-size: 1.1rem;
        padding: 0px 16px;
        transition: 0.5s;

        &:focus {
            border-color: var(--blue);
            transition: 0.5s;
        }
    }

    label {
        position: absolute;
        font-size: 20px;
        top: 7px;
        left: 2px;
        background-color: var(--white);
        padding: 3px 15px;
        border: 2px solid transparent;
        border-radius: 8px;
        transition: 0.5s;
    }

    input:hover ~ label, input:valid ~ label{
        top: -15px;
        left: 20px;
        border-color: var(--black);
        font-size: 16px;
        transition: 0.5s;
        
    }

    input:focus ~ label {
        top: -15px;
        left: 20px;
        border-color: var(--blue);
        font-size: 16px;
        transition: 0.5s;
        
    }


`