import { FormStyled } from "../../styles/styled";
import { Input } from "../../components/input";
import { Link } from 'react-router-dom'
import { IoHome } from 'react-icons/io5'

export const Register = () => {

    return (
        <FormStyled>
            <Link to={'/home'} className='icon'><IoHome /></Link>
            <form>
                <h1>Register</h1>
                <Input
                    id="name"
                    label="Name"
                    type="text"

                />
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
                <Input
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"

                />
                <Input
                    id="phone"
                    label="Phone Number"
                    type="text"

                />
                <div className="buttons">
                    <button type="button">Login</button>
                    <p>OR</p>
                    <Link to={'/'}>Register</Link>
                </div>
            </form>
        </FormStyled>
    )
}