import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     email:'gonzagargantini20@gmail.com',
//     name:'Flavio'

// }

export const UserPorvider = ({ children }) => {

  const[ user, setUser ] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}
