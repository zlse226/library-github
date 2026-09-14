import "../styles/Popular.css";
import popularBook1 from "../assets/images/book_1.jpg";
import popularBook2 from "../assets/images/book_2.jpg";
import popularBook3 from "../assets/images/book_3.jpg";
import popularBook4 from "../assets/images/book_4.jpg";
import popularBook5 from "../assets/images/book_5.jpg";
import popularBook6 from "../assets/images/book_6.jpg";
import popularBook7 from "../assets/images/book_7.jpg";
import popularBook8 from "../assets/images/book_8.jpg";
import ChevronNext from "../assets/icons/icon_chevron-next.svg";
import ChevronPrev from "../assets/icons/icon_chevron-prev.svg";
import { useState } from "react";

function Popular(){

    const books = [
        {
            id: 1,
            title: "세네카, 오늘을 빼앗기고 있는 당신에게",
            subtitle: "",
            author: "세네카",
            publisher: "논픽션",
            callNumber: "126나1122",
            location: "[메인관] 대형자료실 1층",
            image: popularBook1
        },
        {
            id: 2,
            title: "오뒷세이아",
            subtitle: "",
            author: "호메로스",
            publisher: "을유문화사",
            callNumber: "76도4824",
            location: "[메인관] 대형자료실 1층",
            image: popularBook2
        },
        {
            id: 3,
            title: "절창(화이트 에디션)",
            subtitle: "",
            author: "구병모",
            publisher: "문학동네",
            callNumber: "743오2828",
            location: "[서브관] 자료실 2층",
            image: popularBook3
        },
        {
            id: 4,
            title: "마음의 어휘력",
            subtitle: "",
            author: "조아란, 권희, 이정윤",
            publisher: "페이지2북스",
            callNumber: "573나3329",
            location: "[메인관] 대형자료실 2층",
            image: popularBook4
        },
        {
            id: 5,
            title: "똑똑한 사람은 어떻게 말하는가",
            subtitle: "길게 말하지 않아도 신뢰받는 사람들의 말하기 전략",
            author: "이시한",
            publisher: "북플레저",
            callNumber: "88루9463",
            location: "[서브관] 자료실 2층",
            image: popularBook5
        },
        {
            id: 6,
            title: "해커스 토익 기출 VOCA(보카)",
            subtitle: "",
            author: "David Cho",
            publisher: "해커스어학연구소",
            callNumber: "56고4510",
            location: "[메인관] 대형자료실 1층",
            image: popularBook6
        },
        {
            id: 7,
            title: "나의 첫 번재 부동산 교과서",
            subtitle: "",
            author: "송희구",
            publisher: "서삼독",
            callNumber: "83로2837",
            location: "[서브관] 자료실 3층",
            image: popularBook7
        },
        {
            id: 8,
            title: "테오",
            subtitle: "지금 우리에게 필요한 그 이름",
            author: "앨런 레비",
            publisher: "오팬하우스",
            callNumber: "24가9430",
            location: "[메인관] 대형자료실 2층",
            image: popularBook8
        },
    ];
    // const currentBook = books[0]; // 첫번째 책 가져오기 테스트 

    // currentIndex: 현재 n번째 책. setCurrentIndex: n번째 책을 변경
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentBook = books[currentIndex]; // currentBook: 그 n번째에 해당하는 실제책
    

    // 다음 버튼 함수 만들기
    function nextBook(){
        if(currentIndex === books.length - 1){ // 현재가 마지막 인덱스면
            setCurrentIndex(0); // 0으로 변경 (처음 배열로)
        }
        else{
            setCurrentIndex(currentIndex + 1); // 그게 아니면 계속 1증가

        }
    }
    // 이전 버튼 함수 만들기
    function prevBook(){
        if(currentIndex === 0){ // 현재가 0이라면
            setCurrentIndex(books.length - 1); // 마지막 인덱스로 값을 변경
        }
        else{
            setCurrentIndex(currentIndex - 1); // 그게 아니면 계속 1감소
        }
    }


    return(
        <div className="popular-wrap">
            <div className="popular-heading">
                <span className="popular-eyebrow">POPULAR LENDING BOOK</span>
                <h2 className="popular-title">인기 대출 도서</h2>
            </div>
            <div className="popular-content">
                <div className="popular-detail">
                    <h3 className="popular-book-title">
                        {currentBook.title}
                    </h3>
                    {/* {currentBook.subtitle && ()} // 앞의 조건이 참일때만 뒤의 코드 생성 */}
                    {/* 조건부랜더링을 넣으려했으나 <p>자체가 사라지므로 레이아웃이 움직이게됨 */}
                    {/* books에서 ""가 있으므로 유지되니까 조건부랜더링 삭제 */}
                    <p className="popular-book-subtitle">
                        {currentBook.subtitle}
                    </p>
                    
                    <div className="popular-meta">
                        <div className="popular-meta-row">
                            <span className="popular-meta-label">지은이</span>
                            <span className="popular-meta-value">{currentBook.author}</span>
                        </div>
                        <div className="popular-meta-row">
                            <span className="popular-meta-label">출판사</span>
                            <span className="popular-meta-value">{currentBook.publisher}</span>
                        </div>
                        <div className="popular-meta-row">
                            <span className="popular-meta-label">청구기호</span>
                            <span className="popular-meta-value">{currentBook.callNumber}</span>
                        </div>
                        <div className="popular-meta-row">
                            <span className="popular-meta-label">소장위치</span>
                            <span className="popular-meta-value">{currentBook.location}</span>
                        </div>
                    </div>
                    <div className="popular-bottom">
                        <button className="popular-btn" type="button" onClick={prevBook}>
                            <img src={ChevronPrev} alt="이전 버튼" />
                        </button>
                        <div className="popular-page">
                            <span className="popular-page-current">1</span>
                            <span className="popular-page-slash">/</span>
                            <span className="popular-page-total">8</span>
                        </div>
                        <button className="popular-btn" type="button" onClick={nextBook}>
                            <img src={ChevronNext} alt="다음 버튼"/>
                        </button>
                    </div>
                </div>
                <div className="popular-books">
                    <div className="popular-main-book" key={currentIndex}>
                        <img src={currentBook.image} alt={currentBook.title}/>
                    </div>
                    <div className="popular-preview-book" key={`preview1-${currentIndex}`}>
                        <img src={books[(currentIndex + 1)% books.length].image} alt={books[(currentIndex + 1)% books.length].title}/>
                    </div>
                    <div className="popular-preview-book" key={`preview2-${currentIndex}`}>
                        <img src={books[(currentIndex + 2)% books.length].image} alt={books[(currentIndex + 2)% books.length].title}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular;

// [nextBook에서 onClick={()=>함수명()} 이렇게 안한 이유]
// 현재는 전달할 값이 없기때문에 함수를 바로 적어준다. 다음버튼만 누를때는 현재값 +1만 하면되니까
// todo에서는 몇 번을 지울지 그 값에 대한 id가 필요했으므로 사용했던 것

// [% 연산자]
// (x+1)%n 일때 n > x이면 나눌수가 없기때문에 몫은 무조건 0이 되고 ()괄호안의 숫자가 그대로 도출
// n < x 이면 나머지는 무조건 0 ~ n-1까지만 나올수밖에 없다 (n으로나누는 순간 0이 되므로)
// 0 ~ n-1이 아니라 1~n이 나오게 하고싶으면 (x % n)+1 을 하면 됨