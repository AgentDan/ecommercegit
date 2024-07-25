import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {AuthContext} from './context/AuthContext'
import {useAuth} from "./hooks/auth.hook"
import MainPage from "./Pages/Main/MainPage"
import Furniture from "./Pages/Furniture/Furniture"
import {useState} from "react";
import Lamp from "./Pages/Lamp/Lamp";
import Projects from "./Pages/Projects/Projects";

function App() {
    const {login, logout, token, userId, isReady, logoName, arrNew, setArrNew, allProjects, setAllProjects, allElem, setAllElem, idProject, setIdProject} = useAuth()
    const isLogin = !!token
    const [menuOpened, setMenuOpened] = useState(false)
    const [currentLang, setCurrentLang] = useState("en")

    return (
        <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin, logoName, arrNew, setArrNew, allProjects, setAllProjects, allElem, setAllElem, idProject, setIdProject}}>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/"
                               element={<MainPage currentLang={currentLang} setCurrentLang={setCurrentLang} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>}/>
                        <Route path="/furniture" element={<Furniture currentLang={currentLang} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>}/>
                        <Route path="/lamp" element={<Lamp currentLang={currentLang} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>}/>
                        <Route path="/project/:path" element={<Projects/>}/>
                        <Route path="*" element={<MainPage currentLang={currentLang} setCurrentLang={setCurrentLang} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    )
}

export default App
