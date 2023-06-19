import styled from "styled-components";

export const ListPhotoStyled = styled.ul`

    width: 100%;
    /* border: 2px solid red; */
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: flex-start;
    padding-bottom: 32px;
    position: relative;
    padding-top: 64px;

    .addPhoto {
        position: absolute;
        width: 100%;
        padding: 5px;
        border-radius: 8px;
        border: none;
        top: 0px;
        background-color: var(--black);
        color: var(--white);
        font-size: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li {
        width: calc(33% - 16px);
        padding: 5px;
        box-shadow: 0px 0px 15px  rgb(0, 0, 0, 0.25);
        border-radius: 8px;
        background-color: var(--white);
        transition: 0.5s;

        img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
        }

        &:hover {
            /* border: 4px solid var(--blue); */
            box-shadow: 0px 0px 0px 3px var(--blue);
            transition: 0.5s;
            transform: scale(1.1);
        }
    }

    .add {
        padding: 32px;
        
        img {
            color: var(--blue);
        }
    }

    @media (min-width: 650px) {
        gap: 32px;

        li {
            width: calc(33% - 32px);
        }
    }
`