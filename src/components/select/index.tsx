import { SelectStyled } from './styled'
import { AiFillFacebook, AiFillYoutube, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BsFillPeopleFill } from 'react-icons/bs'
import { useState } from 'react'

interface ILinkSelect {
    id: string
    name: string
    link: string
    description: string
    icon: any
}

interface ISelect {
    id: string
    title: string
    list: ILinkSelect[]
    icon: any
}

export const Select = () => {

    const [selectStatus, setSelectStatus] = useState<'open' | 'close'>('close')
    const setSelectFunction = () => {

        console.log('ok')

        if (selectStatus === 'close') {
            setSelectStatus('open')
        } else {
            setSelectStatus('close')
        }
    }

    return (
        <SelectStyled className={selectStatus}>
            <div onClick={() => setSelectFunction()} className='title'>
                <h3 >Rede Sociais</h3>
                <BsFillPeopleFill className='icon' />
            </div>

            <div className='options'>
                <button type='button'>Add link</button>
                <a href="">
                    <AiFillFacebook className='icon' />
                    <p>Facebook</p>
                </a>
                <a href="">
                    <AiFillYoutube className='icon' />
                    <p>Youtube</p>
                </a>
                <a href="">
                    <AiFillInstagram className='icon' />
                    <p>Instagram</p>
                </a>
                <a href="">
                    <AiFillLinkedin className='icon' />
                    <p>LinkedIn</p>
                </a>

            </div>
        </SelectStyled>
    )
}