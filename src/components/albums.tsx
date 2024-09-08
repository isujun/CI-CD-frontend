import { useEffect, useState } from "react"

interface IAlbum {
  userId: string;
  id: number;
  title: string;
}

export const Album = () => {
  const [albumData, setAlbumData] = useState<IAlbum[]>([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((data) => data.json())
      .then((data) => setAlbumData(data))
  }, [])


  return (
    <div>
      {albumData.map((album) => {
        return (
          <div>
            <div key={album.id}>userId: {album.userId}</div>
            <div>id: {album.id}</div>
            <div>title: {album.title}</div>
          </div>
        )
      })}
    </div>
  )
}
