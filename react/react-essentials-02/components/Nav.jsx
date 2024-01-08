import { IconBolt } from "./Icons"
import { Link } from "./Link"

export function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/01">
                        Liste render etmek
                    </Link>
                </li>
                <li>
                    <Link to="/02">
                        Komponentlerin pür-saf olması 
                    </Link>
                </li>
            </ul>
        </nav>
    )
}



