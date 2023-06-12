import styled from "styled-components";

export const FormStyled = styled.section`

    height: 100vh;
    width: 100vw;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    

    form {
        width: 90%;
        min-height: 500px;
        box-shadow: 0px 0px 25px 5px rgb(0, 0, 0, 0.2);
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;
        justify-content: center;
        position: relative;
        max-width: 500px;
        padding: 40px 0px;

        h1 {
            font-size: 32px;
            /* position: absolute; */
            /* top: 32px; */
            
        }

        .buttons {
            display: flex;
            gap: 32px;
            align-items: center;
            font-weight: 600;

            button {
                padding: 10px 30px;
                border-radius: 12px;
                border: none;
                font-size: 18px;
                color: var(--white);
                background-color: var(--blue);
            }
            
            a {
                padding: 10px 30px;
                border: 2px solid var(--black);
                border-radius: 12px;
                font-size: 16px;
                color: var(--black);
            }
        }
    }
`