import "../styles/QuickMenu.css";
import BookOpenCheck from "../assets/icons/icon_book-open-check.svg";
import BookHeart from "../assets/icons/icon_book-heart.svg";
import BookCalendar from "../assets/icons/icon_calendar-check-2.svg";
import BookContactRound from "../assets/icons/icon_contact-round.svg";
import BookMap from "../assets/icons/icon_map.svg";

function QuickMenu(){
    return(
        <div className="quick-menu">
            <div className="quick-item">
                <button className="quick-btn" type="button">
                    <img className="quick-btn-icon" src={BookOpenCheck} alt="대출조회"/>
                </button>
                <span className="quick-title">대출조회</span>
            </div>
            <div className="quick-item">
                <button className="quick-btn" type="button">
                    <img className="quick-btn-icon" src={BookHeart} alt="관심도서"/>
                </button>
                <span className="quick-title">관심도서</span>
            </div>
            <div className="quick-item">
                <button className="quick-btn" type="button">
                    <img className="quick-btn-icon" src={BookCalendar} alt="프로그램 신청"/>
                </button>
                <span className="quick-title">프로그램<br/>신청</span>
            </div>
            <div className="quick-item">
                <button className="quick-btn" type="button">
                    <img className="quick-btn-icon" src={BookContactRound} alt="회원증"/>
                </button>
                <span className="quick-title">회원증</span>
            </div>
            <div className="quick-item">
                <button className="quick-btn" type="button">
                    <img className="quick-btn-icon" src={BookMap} alt="오시는길"/>
                </button>
                <span className="quick-title">오시는길</span>
            </div>
        </div>
    )
}

export default QuickMenu;