import { useContext } from "react"
import { UserContext } from "../react-context/context"

export function Footer() {
  const { user } = useContext(UserContext)
  return <div>ini {user.email}</div>
}
