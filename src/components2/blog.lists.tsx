import { useBlog } from "./blog.provider"

export const BlogList = () => {
  const { blogs } = useBlog()

  return (
    <div>
      <h1>My Blog</h1>
      <div>{JSON.stringify(blogs, null, 2)}</div>
    </div>
  )
}
