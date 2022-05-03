// built in link for SSR optimization and SEO from next
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
       <a href="https://www.linkedin.com/in/evan-karwowski/" target="_blank" rel="noreferrer">
          <img src="https://pnggrid.com/wp-content/uploads/2021/05/linkedin-logo-white-1024x1024.png" alt="Linked in logo" width={'4%'}/>
        </a>  
        <a href="https://github.com/evankski/" target="_blank" rel="noreferrer">
          <img src="http://rajlab.org/icons/github_white.png" alt="github logo" width={'4%'}/>
        </a>  
    </nav>
  )
}