import "../styles/Home.css";
import Clock from "../assets/icons/icon_clock.svg";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import QuickMenu from "../components/QuickMenu";
import SideMenu from "../components/SideMenu";
import Popular from "../components/Popular";
import Recommend from "../components/Recommend";

function Home(){
    return(
        <>
            <Header/>
            <main>
                {/* 첫 화면 */}
                <section className="main-visual">
                    {/* 검색 또는 메인 문구 등 */}
                    <SearchBar/>
                    <QuickMenu/>
                    <SideMenu/>

                    <div className="operating-hours" >
                        <div className="operating-title">
                            <img src={Clock} alt="운영시간"/>
                            <span>도서관 운영시간</span>
                        </div>
                        <div className="operating-info">
                            <span>
                                자료실 평일 09:00 ~ 18:00 , 주말 09:00 ~ 17:00
                            </span>
                            <span className="operating-line"></span>
                            <span>
                                열람실 07:00 ~ 22:00
                            </span>
                        </div>
                    </div>
                </section>

                {/* 두번째 화면 */}
                <section className="popular-section">
                    <Popular/>
                </section>
                <section className="Recommend-section">
                    <Recommend/>
                </section>
            </main>

        </>
    )
}

export default Home;