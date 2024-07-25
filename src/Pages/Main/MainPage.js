import './MainPage.css'
import {Canvas} from "@react-three/fiber"
import ProjectOne from "./ProjectOne/ProjectOne.js"
import Lang from "../Lang/Lang";
import {Menu} from "../Menu/Menu";
import Contacts from "../Contacts/Contacts"
import Header from "../Header/Header";

const MainPage = ({currentLang, setCurrentLang, menuOpened, setMenuOpened}) => {

    return (
        <>
            <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} currentLang={currentLang}/>
            <Header setCurrentLang={setCurrentLang} menuOpened={menuOpened} setMenuOpened={setMenuOpened} currentLang={currentLang}/>
            <Lang setCurrentLang={setCurrentLang} currentLang={currentLang}/>
            <Canvas camera={{fov: 54, position: [2, 1, 5]}}>
                <ProjectOne currentLang={currentLang}/>
            </Canvas>
        </>
    )
}

export default MainPage