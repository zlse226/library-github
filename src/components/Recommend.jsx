import "../styles/Recommend.css";
import recommendBook1 from "../assets/images/book_new_1.jpg";
import recommendBook2 from "../assets/images/book_new_2.jpg";
import recommendBook3 from "../assets/images/book_new_3.jpg";
import recommendBook4 from "../assets/images/book_new_4.jpg";
import recommendBook5 from "../assets/images/book_new_5.jpg";
import recommendBook6 from "../assets/images/book_new_6.jpg";
import recommendBook7 from "../assets/images/book_new_7.jpg";
import recommendBook8 from "../assets/images/book_new_8.jpg";
import recommendBook9 from "../assets/images/book_new_9.jpg";
import recommendBook10 from "../assets/images/book_new_10.jpg";
import ChevronPrev from "../assets/icons/icon_chevron-prev.svg";
import ChevronNext from "../assets/icons/icon_chevron-next.svg";
import { useState } from "react";


function Recommend(){

    const recommendBooks = [
        {
            id: 1,
            title: "고구마랑깨",
            subtitle: "",
            author: "사이다",
            translator: "",
            publisher: "반달",
            callNumber: "345너1293",
            description: "언제나 작은 것만은 아닌, ‘나’와 ‘상대’를 바라보는 관점에 관한 이야기. 작구마는 자신이 정말 작고, 그래서 던져졌다고 생각합니다. 하지만 자신보다 훨씬 작은 깨는 작구마를 ‘큰 친구’라고 부르지요. ‘크다’는 말은 처음 들은 작구마는 깨와의 뜻밖의 만남으로, 자신을 바라보는 시선이 상대에 따라 달라질 수 있다는 것을 알게 됩니다. 『고구마랑깨』는 작구마와 깨의 대화를 통해 내가 작다고 생각해도 누군가에게는 큰 존재일 수 있고, 내가 작다고 여겼던 상대 역시 나에게는 멋지고 소중한 존재가 될 수 있다는 것을 보여 줍니다. 크고 작음을 절대적인 기준으로 나누기 보다 서로의 눈으로 바라볼 때 미처 알지 못했던 서로의 모습을 발견할 수 있습니다. 『고구마랑깨』는 서로를 바라보는 시선이 달라질 때 비로소 보이는 특별한 모습을 따뜻하게 전하는 그림책입니다.",
            image: recommendBook1
        },
        {
            id: 2,
            title: "여름을 건너",
            subtitle: "",
            author: "야프 로번",
            translator: "박영록",
            publisher: "문학과지성사",
            callNumber: "911고1020",
            description: "원제 “Zomervacht”는 네덜란드어로 직역하면 ‘여름의 털가죽’을 뜻합니다. 털가죽은 몸을 감싸고 보호하지만 여름에는 무겁고 답답하기도 합니다. 작품 속 돌봄 역시 누군가를 감싸고 지키는 사랑인 동시에 너무 무거운 짐이 될 수 있습니다. 『여름을 건너』는 브라이언과 뤼시엔이 함께 통과하는 한 철의 시간을 담았습니다. 브라이언은 형을 돌보며 그를 새롭게 알아가는 동시에 자신의 마음과 한계를 마주하고 그렇게 여름은 브라이언이 형을, 그리고 자기 자신을 이전과는 다르게 알아가는 시간이 됩니다. 소설이 끝내 향하는 곳은 사람과 사람 사이의 연결입니다. 말이 통하지 않아도 서로의 몸짓을 읽고, 이해하기 어려운 존재에게 조금 더 가까이 가려는 마음. 그 눈부시고도 아픈 여름 끝에 남는 것은, 가장 척박한 삶의 자리에서도 끝내 서로에게 닿으려 하는 사람들의 모습입니다.",
            image: recommendBook2
        },
        {
            id: 3,
            title: "종의 기원을 읽은 척할 수 있는 책",
            subtitle: "",
            author: "사라시나 이사오",
            translator: "이진원",
            publisher: "까치",
            callNumber: "495거0429",
            description: "진화생물학을 확립한 인류의 명저, 혹은 오류투성이. 21세기의 지식으로 바로잡는 『종의 기원』 속 오류. 『종의 기원』은 인류 지성사에 거대한 지각 변동을 일으킨 명저이지만, 시대적인 한계로 말미암아 곳곳에 오류가 숨어 있습니다. 적절한 배경지식 없이 원전을 읽다 보면, 원전의 오류까지 무차별적으로 받아들일 수도 있습니다. 이에 따라서 사라시나 이사오는 현대의 과학 지식을 동원하여 다윈이 미처 설명하지 못했거나 모순에 부딪혔던 부분들을 설명합니다. 원전에는 등장하지 않는 멘델의 유전 법칙, 게놈 데이터 등을 함께 설명하여 다윈의 진화 이론에 생긴 구멍을 메우고, 다윈 이후에 더 많은 것이 밝혀진 지질 시대에 관련해서도 설명을 덧붙입니다.",
            image: recommendBook3
        },
        {
            id: 4,
            title: "공간 디자이너의 일",
            subtitle: "",
            author: "최인애",
            translator: "",
            publisher: "꿈꾸는 인생",
            callNumber: "190너2348",
            description: "이 책은 먼지투성이 인테리어 현장을 묘사하는 것으로 출발해, 공간을 만드는 사람의 책임과 태도, 그리고 그 공간을 사용할 사람에 대한 깊은 고민으로 독자를 데려갑니다. 인상 깊었던 것은, 공간이 제 기능을 할 수 있게 하는 것들에 대해서인데, 많은 사람이 건물의 외형에서 쉽게 마음을 빼앗깁니다. 인테리어 유행을 따르고 화려한 마감재를 사용하는 것은 그 때문일것이지만 실제로 공간이 자기 역할을 하게 만드는 것, 곧 사용자에게 지속적인 만족감을 주는 것은 벽 속에 숨어 있는 전기, 환기, 급배수, 가스 배관 같은 눈에 보이지 않는 것들입니다. 입구 장식이 아무리 멋지고 내부 장식이 훌륭하다 한들 그것들이 공간을 작동시키지는 않습니다. 그런 점에서 나는 이것이 인생과 닮았다는 생각이 들었습니다. 인간을 인간으로, 나를 나로 온전히 기능하게 하는 것 또한 눈에 보이지 않는 것들일 때가 많다고 여겨 왔기 때문입니다. 그래서일까. 저자가 공간을 만들며 마주한 질문들이 나에게는 삶을 향하는 질문으로 이어졌습니다.",
            image: recommendBook4
        },
        {
            id: 5,
            title: "바이브 코딩: 프로덕션의 원칙",
            subtitle: "생성형 AI와 에이전트로 완성하는 소프트웨어 개발의 미래",
            author: "진 킴, 스티브 예기",
            translator: "이보라",
            publisher: "제이펍",
            callNumber: "289라5932",
            description: "이 책은 구글과 아마존을 거치며 대규모 시스템을 지휘해온 전설적인 개발자 스티브 예기와 데브옵스 구루이자 베테랑 저자인 진 킴이 의기투합하여 쓴 바이브 코딩 전문서다. 두 거장은 단발성 프롬프트 팁이나 특정 도구 설명에 치중하는 대신, AI 에이전트 체계와 협업하며 '프로덕션 레벨'의 견고한 소프트웨어를 만들어내는 정교한 전략과 패러다임을 집대성했다. 바이브 코딩은 개발자를 대체하는 것이 아니라, 자잘한 단순 작업에서 벗어나 시스템 전체의 구조와 완성도를 지휘하는 ‘헤드 셰프’로 탈바꿈시킨다. 지루한 보일러플레이트 코드 작성과 에러 수정의 늪에서 벗어나, 여러 아이디어를 동시에 빠르게 탐색하고 검증하는 창의적인 업무와 본질적인 문제 해결에 집중할 수 있도록 돕는다.",
            image: recommendBook5
        },
        {
            id: 6,
            title: "궁국의 애니메이션 100",
            subtitle: "죽기 전에 꼭 봐야 할 아니메",
            author: "조 오코넬",
            translator: "서나연",
            publisher: "중앙북스",
            callNumber: "109러4230",
            description: "《궁극의 애니메이션 100》은 아니메라는 거대한 바다를 여행하는 데 필요한 지도와 나침반 역할을 한다. 영미권에서 먼저 화제가 된 뒤 국내 출간으로 이어진 도서로, 지금까지 세상에 나온 모든 아니메 중에서 꼭 봐야 하는 100편을 추렸다. 수없이 고민하며 엄선한 궁극의 리스트다. 작품 100편의 정보와 배경 및 해설, 역사적 의의도 상세하게 다룬다. 1970년대부터 현재까지 시대순으로 정리해 아니메 세계의 흐름도 한눈에 볼 수 있다. 1000장에 달하는 방대한 스틸컷은 마치 아트북을 보는 듯하며, 각기 다른 스튜디오의 허락을 구해 하나의 책에 담은 것은 주목할 만한 쾌거다.",
            image: recommendBook6
        },
        {
            id: 7,
            title: "한 조각씩 걷는 파리",
            subtitle: "나만의 속도로 맞춰가는 열 조각의 파리 도보 여행",
            author: "손지연",
            translator: "",
            publisher: "브레인스통",
            callNumber: "190호2382",
            description: "각 코스에는 주요 명소의 역사와 문화적 배경, 걷기 좋은 동선은 물론 사진을 찍기 좋은 장소와 잠시 휴식을 취하기에 좋은 카페와 식당 등 실제 여행에 활용할 수 있는 구체적인 정보도 자연스러운 스토리텔링으로 함께 곁들여진다. 이 책이 일반적인 여행 가이드북이나 여행 에세이와 다른 점은 여행 관련 정보를 선별하여 전달하는 방법에도 있다고 할 수 있을 것이다. 관광명소들이 하나의 목적지처럼 쓰이는 것이 아니라, 한 장소와 또 다른 장소 하나를 연결하는 매개체로 쓰이며, ‘걷는 시간’, ‘걷는 행위’ 자체를 여행의 중요한 경험으로 바라본다는 점이 특별하다. 그 접근은 저자의 생생한 경험에서 비롯된 것이기도 하다. 오늘은 시청까지만 걸으려 했는데 갑자기 눈앞에 퐁피두 센터가 나타나고, 구경을 마치고 나오니 전부터 가고 싶었던 빈티지 가게가 코앞에 있는 도시. 저자에게 파리는 목적지 한두 곳을 정해 놓고 여행하는 도시가 아니라, 조금만 걸으면 시공간을 초월하는 새로운 풍경을 만날 수 있는 도시다. 고대와 중세, 근대와 현대가 겹겹이 쌓인 도시 파리의 매력을 가장 잘 발견할 수 있는 여행법이 바로 ‘걷기’라는 것이다.",
            image: recommendBook7
        },
        {
            id: 8,
            title: "기쁨에도 슬픔에도 아랑곳없이",
            subtitle: "박준의 시를 읽는 마음",
            author: "박준",
            translator: "",
            publisher: "난다",
            callNumber: "120러9384",
            description: "시, 멀리서 멀리까지 『기쁨에도 슬픔에도 아랑곳없이』는 박준 시인이 한국현대시사 백여 년을 톺아보며 함께 만나고 싶은 시인 67명을 부르고, 함께 읽고 싶은 그들의 시 67편을 고르고, 그에 한 편씩 가장 솔직하고 가장 자유로우며 가장 유연한 방식으로 자기만의 산문 67편에 시 한 편을 더한 형식을 자랑합니다. 작품의 배열 순서를 시인의 출생 연도로 따르면서 총 5부로 구성하게 된 이 책은 부마다 잔잔히 바탕 컬러를 다르게 입힘으로 한국현대시의 역사를 한눈에 압축하고 한 축에 꿰는 데 나름의 역할을 해낸 건 아닌지 아주 살짝은 감히 자부하는 바입니다. 이 책을 여는 이가 1896년 태어나 1917년 등단한 김명순 시인이고 그의 시 「유언」이라 할 적에, 이 책을 닫는 이가 1995년에 태어나 2026년 등단한 김남주 시인이고 그의 시 「사춘기」라 할 적에, 박준 시인은 한국시 근 백여 년의 자장 속에 한데 흔들렸던 시인들의 면면을 특유의 조심성을 담보로 하여 뒤따라 밟으면서도 고유의 집요함을 잃지 않습니다. 시의 미래를 보기 위해서는 시의 과거로 되돌아가는 일이 반드시 필요하다는 걸 이 책의 목표로 두는 데 일찌감치 동의했기에 가능한 작업이 아니었나 싶습니다.",
            image: recommendBook8
        },
        {
            id: 9,
            title: "레베카",
            subtitle: "",
            author: "케이트 비턴",
            translator: "김지은",
            publisher: "위즈덤 하우스",
            callNumber: "578다9403",
            description: "엄마라는 강인한 삶을 선택해 온 당신에게, 깊고 환한 위로가 될 이름 《레베카》 ‘레베카’는 실존 인물로 이 책을 쓴 케이트 비턴의 먼 조상입니다. 레베카의 이야기는 가족 안에서 오래도록 전해 내려왔다고 합니다. ‘레베카’는 그녀의 딸 이름이기도 하고, 그녀의 할머니 이름이기도 합니다. 자매의 이름도 레베카이고, 조카 이름도 레베카입니다. 케이트 비턴은 아픈 여동생을 떠나보내며, 이 책을 꼭 써야겠다고 마음먹었다고 합니다. 여동생의 투병 생활 동안 그녀는 창밖으로 레베카가 살았던 작은 섬을 바라보곤 했습니다. 살아가는 것 외에는 다른 선택이 없었던 참혹한 슬픔을 마주해야만 했던 레베카를 떠올렸습니다. 1789년 바다에서 남편을 잃었을 때, 레베카의 뱃속에는 막내 아이가 있었습니다. 그 섬을 보며 레베카를 떠올리던 무렵에 케이트 비턴도 첫 아이를 뱃속에 품고 있었다고 합니다.",
            image: recommendBook9
        },
        {
            id: 10,
            title: "월간 커피(2026년 9월)",
            subtitle: "",
            author: "아이비라인 편집부",
            translator: "",
            publisher: "아이비라인",
            callNumber: "142도8904",
            description: "『월간 커피』는 커피 전문 잡지로, 커피에 대한 정보를 소개하는 것에 그치지 않고 전반적인 커피 시장에 대해 다루고 있으며 성공적인 운영 노하우 등을 공유한다.",
            image: recommendBook10
        },

    ];
    // const currentRecommendBook = recommendBooks[4];

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentRecommendBook = recommendBooks[currentIndex];

    function nextBook() {
        if(currentIndex === recommendBooks.length - 1){
            setCurrentIndex(0)
        }
        else{
            setCurrentIndex(currentIndex + 1)
        }
    }

    function prevBook(){
        if(currentIndex === 0){
            setCurrentIndex(recommendBooks.length - 1)
        }
        else{
            setCurrentIndex(currentIndex - 1)
        }
    }

    return(
        <div className="recommend-wrap">
            <div className="recommend-heading">
                <span className="recommend-eyebrow">LIBRARIAN RECOMMENDED BOOK</span>
                <h2 className="recommend-title">추천 & 신작 도서</h2>
            </div>
            <div className="recommend-content">
                <button className="recommend-btn" type="button">
                    <img src={ChevronPrev} className="recommend-prev" onClick={prevBook} alt="이전"/>
                </button>

                <div className="recommend-content-inner">
                    <div className="recommend-left">
                        <span className="recommend-left-title">사서들의 이달의 추천</span>
                        <p className="recommend-left-info">
                            {currentRecommendBook.description}
                        </p>
                    </div>
                    <div className="recommend-middle"> {/* 캐러셀 아이템 구조 */}
                        <div className="recommend-book prev2">
                            <img src={currentRecommendBook.image}/>
                        </div>
                        <div className="recommend-book prev1">
                            <img src={currentRecommendBook.image}/>
                        </div>

                        <div className="recommend-book main">
                            <img src={currentRecommendBook.image} alt={currentRecommendBook.title} />
                        </div>
                        <div className="recommend-book next1">
                            <img src={currentRecommendBook.image}/>
                        </div>
                        <div className="recommend-book next2">
                            <img src={currentRecommendBook.image}/>
                        </div>
                    </div>
                    <div className="recommend-right">
                        <h3 className="recommend-right-title">{currentRecommendBook.title}</h3>
                        <p className="recommend-right-subtitle">{currentRecommendBook.subtitle}</p>
                        <div className="recommend-meta">
                            <div className="recommend-meta-row">
                                <span className="recommend-meta-label">저자</span>
                                <span className="recommend-meta-value">{currentRecommendBook.author}</span>
                            </div>
                            <div className="recommend-meta-row">
                                <span className="recommend-meta-label">번역가</span>
                                <span className="recommend-meta-value">{currentRecommendBook.translator}</span>
                            </div>
                            <div className="recommend-meta-row">
                                <span className="recommend-meta-label">출판사</span>
                                <span className="recommend-meta-value">{currentRecommendBook.publisher}</span>
                            </div>
                            <div className="recommend-meta-row">
                                <span className="recommend-meta-label">청구기호</span>
                                <span className="recommend-meta-value">{currentRecommendBook.callNumber}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="recommend-btn" type="button">
                    <img src={ChevronNext} className="recommend-next" onClick={nextBook} alt="다음"/>
                </button>
            </div>
        </div>
    )
}

export default Recommend;