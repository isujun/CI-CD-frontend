import React, { createContext, useContext, useEffect, useState } from "react";

export const BlogContext = createContext({})
const api = "https://jsonplaceholder.typicode.com/posts";

export const BlogProvider = ({ children }: React.PropsWithChildren) => {
  const [blogs, setBlogs] = useState({})

  useEffect(() => {

    async function getBlog() {
      try {
        const res = await fetch(api)
        const data = await res.json()
        setBlogs(data)
      } catch (error) {
        console.log(error)
      }
    }
    getBlog()
  }, [])


  return <BlogContext.Provider value={{ blogs }}>{children}</BlogContext.Provider>
}


export const useBlog = () => useContext(BlogContext)

