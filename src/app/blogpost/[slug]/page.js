"use client"
import { useEffect, useState } from "react";
import style from "../../page.module.css"
export default function BlogPost({params}) {
  const {slug}=params;
  const [blog, setBlog] = useState({})
  
  useEffect(()=>{
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
      return a.json();
      
    }).then((parsed)=>{
      setBlog(parsed)
    })
  },[])


  return (
    <div className={style.main}>
      <h1>{blog.title}</h1>
      <div className={style.blogItems}>
       {blog.description}
      </div>
    </div>
  )
}
