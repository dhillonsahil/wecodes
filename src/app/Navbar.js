import Link from 'next/link'
import pCSS from "./page.module.css"
export default function Navbar() {
  return (
    // <nav className="nav">
      <ul className='nav'>
        
        <li>
          <Link className={pCSS.noLinkDesign} href="/">Home</Link>
        </li>
        <li>
          <Link className={pCSS.noLinkDesign} href="/blog">Blog</Link>
        </li>
        <li>
          <Link className={pCSS.noLinkDesign} href="/about">About Us</Link>
        </li>
        <li>
          <Link className={pCSS.noLinkDesign} href="/contact">Contact Us</Link>
        </li>
      </ul>
      // </nav>
  )
}
