import { useEffect, useState } from "react";

interface IPost {
  id: string;
  title: string;
  body: string;
}

export const Catalogs = () => {
  const [catalogData, setCatalogData] = useState<IPost[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((data) =>
      data.json().then((data) => setCatalogData(data)),
    );
  }, []);

  return (
    <div>
      {catalogData.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </div>
  );
};
