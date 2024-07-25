import {Link} from "react-router-dom"

export const Menu = (props) => {
    const {menuOpened, setMenuOpened, currentLang} = props

    return (
        <>
            <button
                onClick={() => setMenuOpened(!menuOpened)}
                className="xs:hover:scale-100 md:hover:scale-150  z-20 fixed top-20 right-12 p-3 backdrop-blur-sm bg-gray-500/50 w-11 h-11 rounded-md"
            >
                <div
                    className={`bg-white h-0.5 rounded-md w-full transition-all ${
                        menuOpened ? "rotate-45  translate-y-0.5" : ""
                    }`}
                />
                <div
                    className={`bg-white h-0.5 rounded-md w-full my-1 ${
                        menuOpened ? "hidden" : ""
                    }`}
                />
                <div
                    className={`bg-white h-0.5 rounded-md w-full transition-all ${
                        menuOpened ? "-rotate-45" : ""
                    }`}
                />
            </button>
            <div
                className={`z-10 fixed top-36 h-auto right-0 bg-gray-500/70 text-white transition-all overflow-hidden flex flex-col rounded-2xl ${menuOpened ? "w-80" : "w-0"}`}
            >
                <div className="flex items-center justify-start flex-col gap-6 p-8 font-bold ">
                    <div className={'h-6 w-auto cursor-pointer text-xl hover:scale-200'}>
                        <Link to={"/"}
                              onClick={() => setMenuOpened(false)}
                              className="hover:text-red-700 hover:text-3xl"
                        >
                            {currentLang === "en" ? "HOME" : ""}
                            {currentLang === "rs" ? "POCETNA" : ""}
                            {currentLang === "ru" ? "НА ГЛАВНУЮ" : ""}
                        </Link>
                    </div>

                    <div className={'h-6 w-auto cursor-pointer text-xl'}>
                        <Link to={"/furniture"}
                              onClick={() => setMenuOpened(false)}
                              className="hover:text-red-700 hover:text-3xl"
                        >
                            {currentLang === "en" ? "Furniture" : ""}
                            {currentLang === "rs" ? "Namestaj" : ""}
                            {currentLang === "ru" ? "Мебель" : ""}
                        </Link>
                    </div>

                    <div className={'h-6 w-auto cursor-pointer text-xl'}>
                        <Link to={"/lamp"}
                              onClick={() => setMenuOpened(false)}
                              className="hover:text-red-700 hover:text-3xl"
                        >
                            {currentLang === "en" ? "Lamps" : ""}
                            {currentLang === "rs" ? "Lampe" : ""}
                            {currentLang === "ru" ? "Светильники" : ""}
                        </Link>
                    </div>

                    <div className={'h-6 w-auto cursor-pointer text-xl'}>
                        <a href="http://web3ddd.com"
                           className="hover:text-red-700 hover:text-3xl"
                           target="_blank"
                           onClick={() => setMenuOpened(false)}
                        >
                            {currentLang === "en" ? "3d designer" : ""}
                            {currentLang === "rs" ? "3d konstruktor" : ""}
                            {currentLang === "ru" ? "3d конструктор" : ""}
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}
