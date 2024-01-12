import { Link } from "react-router-dom"

export function Nav() {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Anasayfa
                    </Link>
                </li>
                <li>
                    <Link to="/ürünler">
                        Ürünler
                    </Link>
                </li>
            </ul>
        </nav>
    )

}