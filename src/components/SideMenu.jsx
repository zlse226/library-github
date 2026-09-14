import "../styles/SideMenu.css";

function SideMenu(){
    return(
        <ul className="side-menu">
            <li>
                <a href="#">01 도서관 이용</a>
            </li>
            <li>
                <a href="#">02 문화행사</a>
            </li>
            <li>
                <a href="#">03 도서관 소식</a>
            </li>
            <li>
                <a href="#">04 내 서재</a>
            </li>
        </ul>
    )
}

export default SideMenu;