//======= 실전연습 Hash Map 만들기 ==========
//========================================
// ts코드
// class Dict{
//     constructor(
//         private words: Words
//     ){}
// }
// 위의 코드를 컴파일 한 js 코드
// class Dict {
//     constructor(words){
//         this.words = words;
//     }
// }
// ?? constructor가 words를 지정해주기를 원하지 않기 때문에(??) 이렇게 코드 작성하면 안됨
// constructor가 words를 주게 만들고 싶지 않음  
// => 이부분은 js 코드를 확인하면서 설명했는데 잘 이해가 가지 않음
// 대신 이렇게 해 줘야 함
// 1. words를 initializer 없이 선언해주고
// 2. constructor에서 수동으로 초기화(initialize)해줌
var Dict = /** @class */ (function () {
    function Dict() {
        this.words = {};
    }
    // add 메서드
    // 여기서 word 는 Word 타입
    // 특이한 점은 class 인 Word 도 타입으로 쓰일 수 있다는 점
    // 파라미터가 이 클래스의 인스턴스이길 원하면 가능함
    Dict.prototype.add = function (word) {
        // 주어진 단어가 undefined 이라는 것은 아직 사전에 존재하지 않음을 의미
        // Dict 클라스안의 private words 변수는 Words 타입
        // add 메서드의 인자인 word는 Word 클래스 타입
        // ?? 여기서 [ ]는 무슨 의미이지?
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    };
    // term 을 이용해 단어 definition 불러오는 기능
    Dict.prototype.def = function (term) {
        return this.words[term];
    };
    return Dict;
}());
// Word 클래스 만들기, 각각의 단어 만들기
var Word = /** @class */ (function () {
    function Word(term, def) {
        this.term = term;
        this.def = def;
    }
    return Word;
}());
// 새 변수 kimchi 는 2개의 인자를 받고 첫번째는 term, 두번째는 definition
var kimchi = new Word("kimchi", "한국의 대표적 발효음식");
// Dict 클라스 인스턴트, Dict 의 모든 요소, 메서드를 상속받음
var dict = new Dict();
console.log(dict.add(kimchi));
console.log(dict.def("kimchi"));
