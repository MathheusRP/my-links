import { OpenImageStyled } from "./styled";
import imgOwner from '../../assets/img/profile.png'

export const OpenImage = () => {

    return (
        <OpenImageStyled>
            <div className="containerImage">
                <div className="image">
                    <img className="cover" src="https://i0.statig.com.br/bancodeimagens/0v/10/gk/0v10gkja6fccyqrxefzjaurpl.jpg" alt="" />
                    <button>ACESSE</button>
                </div>
                <div className="Owner">
                    <div className="image">
                        <img src={imgOwner} alt="" />
                        <h2>Lily</h2>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s... text ever since the 1500s...
                    </p>
                </div>

                <span className="span1"></span>
                <span className="span2"></span>
            </div>
            <div className="containerComment">

                <div className="containerText">
                    <textarea name="comment" id="comment" placeholder="Comment...">

                    </textarea>
                    <button>Comment</button>
                </div>
            </div>

        </OpenImageStyled>
    )
}