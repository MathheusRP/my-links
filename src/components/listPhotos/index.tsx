import { ListPhotoStyled } from "./styled";
import { IoAddCircleOutline } from 'react-icons/io5'
import { Outlet } from "react-router-dom";

export const ListPhotos = () => {

    // const list = [
    //     {
    //         img: https://img.elo7.com.br/product/zoom/2B0DC39/banners-para-divulgacao-no-instagram-instagram.jpg
    //     }
    // ]

    return (
        <ListPhotoStyled>
            <button className="addPhoto"><IoAddCircleOutline /></button>
            <li>
                <img src="https://img.elo7.com.br/product/zoom/2B0DC39/banners-para-divulgacao-no-instagram-instagram.jpg" alt="Exemplo" />
            </li>
            <li>
                <img src="https://www.digitalprintbr.com.br/comunicacao-visual/imagens/banner-para-divulgacao.png" alt="Exemplo" />
            </li>
            <li>
                <img src="https://img.elo7.com.br/product/zoom/2DE40FC/banner-digital-para-instagram-banner-digital-em-rede-sociais.jpg" alt="Exemplo" />
            </li>
            <li>
                <img src="https://img.elo7.com.br/product/360x360/3B2F691/post-para-redes-sociais.jpg" alt="Exemplo" />
            </li>
            <li>
                <img src="https://i.pinimg.com/736x/44/0c/1e/440c1e7273df74d7d3fc186b291bae62.jpg" alt="Exemplo" />
            </li>

            <Outlet />

        </ListPhotoStyled>
    )
}