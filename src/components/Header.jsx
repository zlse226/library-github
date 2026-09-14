import "../styles/Header.css";
import mainLogo from "../assets/icons/main-logo.svg";
import gnb from "../assets/icons/icon_menu.svg";


function Header() { // Header -> Home.jsx -> App.jsx 로 연결
    return(
        <header className="header">
            <h1 className="main-logo">
                <img src={mainLogo} alt="메인로고"/>
                <span>Forest Library</span>
            </h1>
            <button className="gnb" type="button">
                <img src={gnb} alt="메뉴 열기"/>
            </button>
        </header>
    )
}

export default Header;