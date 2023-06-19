import styled from "styled-components";

export const OpenImageStyled = styled.section`
    position: fixed;
    height: 100vh;
    width: 100vw;
    /* overflow: hidden; */
    overflow-y: auto;
    top: 0px;
    left: 0px;
    background-color: rgb(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 26px;
    
    

    .containerImage {
        margin-top: 16px;
        background-color: var(--white);
        height: 400px;
        width: 90%;
        max-width: 600px;
        border-radius: 16px;
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        gap: 5px;

        .image {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;


            .cover {
                margin-top: 16px;
                /* width: 90%; */
                height: 200px;
                padding: 5px;
                border-radius: 12px;
                box-shadow: 0px 0px 15px rgb(0, 0, 0, 0.3);
                object-fit: scale-down;
            }

            button {
                border: 3px solid var(--white);
                padding: 5px 20px;
                border-radius: 8px;
                background-color: var(--blue);
                color: var(--white);
                font-size: 16px;
                position: absolute;
                bottom: -18px;
                /* right: 40px; */
            }
        }

        .Owner {
            width: 90%;
            align-self: center;
            /* border: 2px solid red; */
            height: 150px;
            /* padding: 0px 10px; */

            .image {
                margin-top: 10px;
                display: flex;
                flex-direction: row;
                align-items: center;
                /* width: max-content; */
                gap: 10px;
                /* background-color: blue; */
                /* justify-content: center; */
            }

            h2 {
                /* margin-top: 10px; */
                font-size: 20px;
                color: var(--black);
            }

            img {
                height: 50px;
                border-radius: 50%;
                padding: 0px;
            }

            p {
                margin-top: 5px;
                text-align: justify;
                height: 90px;
                /* background-color: aqua; */
                overflow-y: auto;
            }
        }

        span {
            height: 70px;
            width: 20px;
            background-color: var(--white);
            box-shadow: 0px 5px 10px rgb(0, 0, 0, 0.3);
            position: absolute;
            border-radius: 16px;
            bottom: -50px;
        }

        .span1 {
            left: 60px;
        }

        .span2 {
            right: 60px;
        }

    }
    

    .containerComment {
        background-color: var(--white);
        height: 300px;
        width: 90%;
        max-width: 600px;
        border-radius: 16px;
        position: relative;
    }

    .containerText {
        height: 140px;
        /* width: 90%; */
        background-color: var(--white);
        border-radius: 16px;
        position: absolute;
        bottom:-100px;
        border: 6px solid rgb(0, 0, 0, 0.4);
        left: 20px;
        right: 20px;
        justify-content: center;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        

        textarea {
            width: 100%;
            background-color: transparent;
            border: none;
            outline: none;
            height: 80%;
            font-size: 16px;
        }

        button {
            background-color: var(--blue);
            width: 100px;
            height: 30px;
            font-size: 14px;
            top: 90%;
            right: 20px;
            border: solid 2px transparent;
            position: absolute;
            border-radius: 8px;
            color: var(--white);
            font-weight: 600;
            /* position: relative; */
        }
    }

    @media (min-width: 1000px) {
        .containerImage {
            height: 450px;

            .Owner {
                p {
                    margin-top: 10px;
                }
            }

            .image {

                .cover {
                    height: 250px;
                }
            }
        }
    }
`