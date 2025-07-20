import Nav from './Nav';
import Logo from './images/Logo.svg';



export default function Header(){
    return (
        <header className="flex justify-between">
            <img src={Logo} alt="" />
            <Nav />
        </header>
    )
}