import { FormStyled } from "../../styles/styled";
import { Input } from "../../components/input";
import { Link } from 'react-router-dom'
import { IoHome } from 'react-icons/io5'

export const LoginPage = () => {

    return (
        <FormStyled>
            <Link to={'/home'} className='icon'><IoHome /></Link>
            <form>
                <h1>Login</h1>
                <Input
                    id="email"
                    label="Email"
                    type="text"

                />
                <Input
                    id="password"
                    label="Password"
                    type="password"

                />
                <div className="buttons">
                    <button type="button">Login</button>
                    <p>OR</p>
                    <Link to={'/register'}>Register</Link>
                </div>
            </form>
        </FormStyled>
    )
}