import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <a href="/menu">Menu</a>
                </li>
                <li>
                    <a href="/reservations">Reservation</a>
                </li>
                <li>
                    <a href="/order-online">Order Online</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
    )
}