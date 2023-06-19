import styled from "styled-components";

export const SelectStyled = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    gap: 24px;
    height: max-content;
    height: 50px;
    /* background-color: blue; */

    .title {
        border: 4px solid var(--black);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 0px;
        width: 100%;

        .icon {
            position: absolute;
            left: 25px;
            font-size: 24px;
            color: var(--black);
        }

        &::before {
            content: '';
            width: 10px;
            height: 10px;
            border: 4px solid var(--black);
            position: absolute;
            right: 25px;
            transform: rotate(135deg);
            border-top-color: transparent;
            border-right-color: transparent;
            top: 20px;
            transition: 0.5s;
        }
    }

    .options {
        /* height: 0px; */
        width: 80%;
        display: inline-flex;
        flex-direction: column;
        gap: 12px;
        opacity: 0%;

        a {
            display: flex;
            color: var(--white);
            background-color: var(--black);
            height: 45px;
            border-radius: 12px;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            position: relative;
        
            .icon {
                height: 30px;
                width: 30px;
                position: absolute;
                left: 16px;
                /* top: 15px; */
            }
        }

        button {
            height: 45px;
            background-color: var(--black);
            color: var(--white);
            border-radius: 12px;
            border: none;
            font-size: 20px;
        }
    }

    &.open {
        height: fit-content;

        .title {
            
            &::before {
                transform: rotate(-45deg);
                top: 12px;
            }
           
        }

        .options {
            display: flex;
            opacity: 100%;
            transition: 1s;
        }
    }

   
`