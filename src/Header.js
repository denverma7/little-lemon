import Nav from './Nav';
import Logo from './images/Logo.svg';



export default function Header(){
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <Nav />
        </header>
    )
}