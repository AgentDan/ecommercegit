import React from 'react'
import Lang from "../Lang/Lang";
import {Menu} from "../Menu/Menu";
import Contacts from "../Contacts/Contacts"

const Header = ({currentLang, setCurrentLang, menuOpened, setMenuOpened}) => {
    return (
        <div className="absolute">
            <div className="mt-0 w-screen h-16 fixed fixed-row right-1 backdrop-blur-xl z-20"></div>
            <div className="hidden md:block fixed  flex-row z-20 h-auto w-auto mt-4 ml-4">
                <svg width="153" height="45" viewBox="0 0 153 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M89.597 4.48583V17.947H80.6355V8.97167H53.7601V17.947H44.7986V4.48583C44.7986 2.01025 46.8057 0 49.2775 0H85.1199C87.5917 0 89.5989 2.01025 89.5989 4.48583H89.597Z"
                        fill="white"/>
                    <path
                        d="M89.5969 26.9167V40.3779C89.5969 42.859 87.5897 44.8693 85.118 44.8693H49.2756C46.8038 44.8693 44.7966 42.859 44.7966 40.3779V26.9167H53.7582V35.8921H80.6336V26.9167H89.5951H89.5969Z"
                        fill="white"/>
                    <path
                        d="M152.316 22.5615C152.316 25.0426 150.309 27.0529 147.838 27.0529H143.353V40.5085C143.353 42.9896 141.351 44.9999 138.874 44.9999C136.397 44.9999 134.395 42.9896 134.395 40.5085V9.10585H107.514V18.0757H120.955C123.427 18.0757 125.434 20.0859 125.434 22.5615C125.434 25.0371 123.427 27.0529 120.955 27.0529H107.514V40.5085C107.514 42.9896 105.507 44.9999 103.035 44.9999C100.564 44.9999 98.5565 42.9896 98.5565 40.5085V4.6145C98.5565 2.13892 100.558 0.128662 103.035 0.128662H138.874C141.351 0.128662 143.353 2.13892 143.353 4.6145V18.0757H147.838C150.309 18.0757 152.316 20.0859 152.316 22.5615Z"
                        fill="white"/>
                    <path
                        d="M35.8388 40.5122C35.8388 42.9878 33.8316 44.998 31.3598 44.998H4.47893C2.00716 44.998 0 42.9878 0 40.5122V4.6145C0 2.13892 2.00716 0.128662 4.47893 0.128662C6.95069 0.128662 8.96336 2.13892 8.96336 4.6145V36.0227H31.3598C33.8316 36.0227 35.8388 38.0329 35.8388 40.514V40.5122Z"
                        fill="white"/>
                </svg>

            </div>
            <Contacts setCurrentLang={setCurrentLang} menuOpened={menuOpened} setMenuOpened={setMenuOpened} currentLang={currentLang}/>
        </div>
    )
}
export default Header