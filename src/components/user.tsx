import { useEffect, useState } from "react"

interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: IAddress[];
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface IGeo {
  lat: string;
  lng: string;
}
export const User = () => {
  const [user, setUser] = useState<IUser[]>([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(data => setUser(data))
  })


  return (
    <div>
      {user.map((user) => {
        return (
          <div>
            <div key={user.id}>name:{user.name} </div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>phone: {user.phone}</div>
            <div>website: {user.website}</div>
            <div>address: {user.address}</div>
            <br />
          </div>
        )
      })}
    </div >
  )
}
