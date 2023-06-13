import styled from "styled-components";

export const HomeStyled = styled.section`

    min-height: 100vh;
    width: 100vw;
    background-color: var(--white);
    display: flex;
    justify-content: center;

    .container {
        width: 90%;
        max-width: 600px;
        height: 500px;
        /* border: 2px solid red; */
        display: flex;
        flex-direction: column;
    }

    .imgsProfile {
        margin-top: 16px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        /* background-color: aqua; */
        height: 430px;

        .cover {
            width: 100%;
            max-width: 600px;
            height: 200px;
            object-fit: cover;
            border: solid 10px var(--white);
            box-sizing: content-box;
            box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.3);
            border-radius: 22px;
        }

        .profile {
            /* position: absolute; */
            transform: translateY(-70px);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            bottom: -80px;
            

            img {
                width: 100px;
                height: 100px;
                border: solid 8px var(--white);
                border-radius: 50%;
                box-sizing: content-box;
                box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.3);
            }

            h3 {
                font-size: 1.5rem;
                color: var(--black);
            }

            p {
                text-align: center;
                line-height: 20px;
                font-size: 16px;
                letter-spacing: 1.8px;
                /* height: 120px; */
                
            }
        }
    }

    .options {
        width: 100%;
        max-width: 600px;
        border-top: solid 4px var(--black);
        display: flex;
        justify-content: space-around;
        
        a {
            margin-top: 16px;
            color: var(--black);
            font-size: 20px;
            font-weight: 600;
            
        }
    }

    .content {
        margin-top: 32px;
        width: 100%;
        max-width: 600px;
        /* border: 2px solid red; */
    }

`