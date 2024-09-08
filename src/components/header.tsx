import { useContext } from "react"
import { UserContext } from "../react-context/context"

export function Header() {
  const { user } = useContext(UserContext)

  return <div>{user.name}</div>
}
