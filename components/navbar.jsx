// built in link for SSR optimization and SEO from next
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <a href="#skills" >skills</a>
      <Link href='/#skills'>
        {/* <a>Home</a> */}
        Home
      </Link>
    </nav>
  )
}