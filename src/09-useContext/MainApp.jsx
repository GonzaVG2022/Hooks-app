import { Navigate, Route, Routes} from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { NavBar } from "./NavBar"
import { UserPorvider } from "./context/UserPorvider"


export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
            <NavBar/>
        <hr />
        <UserPorvider>
            <Routes>
                <Route
                    path='/'
                    element={ <HomePage/> }
                />
                <Route
                    path='login'
                    element={ <LoginPage/> }
                />
                <Route
                    path='about'
                    element={ <AboutPage/> }
                />
                <Route
                    path='/*'
                    element={ <Navigate to="/about"/> }
                />
                
            </Routes>
        </UserPorvider>
    </>
  )
}
