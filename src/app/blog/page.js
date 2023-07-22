"use client"
import Link from "next/link"
import style from "../page.module.css"
import { useEffect} from "react"
import { useState } from "react"

// Step 1 : Collect all the files from blog data directory
// Step 2  ; iterate through them and display that 
export default function Blog() {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/api/blogs").then((a)=>{
      return a.json();
      
    }).then((parsed)=>{
      setBlogs(parsed)
    })
  },[])
  return (
    <div className={style.center}>
        <div className="blogs">
        {
          blogs.map((item)=>(
            // eslint-disable-next-line react/jsx-key
            <div key={item.title} className="blogItem">
          <Link className={style.noLinkDesign} href={`/blogpost/${item.slug}`}>
          <h3>{item.title}</h3></Link>
          <p>{item.description.substr(0,400)}</p>
        </div>
          ))
        }
      </div>
    </div>
  )
}
