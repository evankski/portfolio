// built in link for SSR optimization
import Link from "next/link";

function Navbar() {
    return ( 
        <nav>
            <Link href={'/about'}>
                About Me
            </Link>
        </nav>
     );
}

export default Navbar;