import "../styles/SearchBar.css";
import search from "../assets/icons/Icon_search.svg";

function SearchBar(){

    return(
        <div className="search-bar">
            <span className="search-title">통합자료검색</span>
            <div className="search-line"></div>
            <div className="search-input-wrap">
                <input className="search-input" placeholder="검색어를 입력하세요"/> {/* 나중에 문구 피그마참고 */}
                <button className="search-button" type="button">
                    <img src={search} alt="검색"/>
                </button>
            </div>
        </div>
    )
}

export default SearchBar;