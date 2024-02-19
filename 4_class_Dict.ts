//======= 실전연습 Hash Map 만들기 ==========
//========================================

// 해싱 알고리즘을 쓰는 완벽한 해시맵
// 단어사전
// Dict 클래스가 words 오브젝트를 가짐
// 사전에 새 단어 추가하고, 단어 찾고, 단어 삭제하는 메소드 만들예정

// Words 타입이 string 만을 property로 가지는 오브젝트
type Words = {
    // property의 이름은 모르지만 타입은 알때에 사용
    [key:string] : string
}

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
class Dict {

    // words 가 private이므로, dictionary 안에서만 words 보기를 원함
    private words: Words
    
    constructor(){
        this.words = {}
    }

    // add 메서드
    // 여기서 word 는 Word 타입
    // 특이한 점은 class 인 Word 도 타입으로 쓰일 수 있다는 점
    // 파라미터가 이 클래스의 인스턴스이길 원하면 가능함
    add(word:Word){
        // 주어진 단어가 undefined 이라는 것은 아직 사전에 존재하지 않음을 의미
        // Dict 클라스안의 private words 변수는 Words 타입
        // add 메서드의 인자인 word는 Word 클래스 타입
        // ?? 여기서 [ ]는 무슨 의미이지?
        if(this.words[word.term]===undefined){
            this.words[word.term] = word.def
        }
    }

    // term 을 이용해 단어 definition 불러오는 기능
    def(term:string){
        return this.words[term]
    }

    //js에도 있는 static 메소드 
    static hello(){
        return "hello";
    } 

}

// Word 클래스 만들기, 각각의 단어 만들기
class Word {
    constructor(
        // 사전에 접근해서 보여주고는 싶지만, 외부에서 수정하길 바라지 않을 경우
        // readonly 사용
        public readonly term:string,
        public readonly def:string
    ){}

    // 더 많은 메소드 만들기
    // 여기선 단어의 정의 추가, 수정
    // 단어 출력
}

// 새 변수 kimchi 는 2개의 인자를 받고 첫번째는 term, 두번째는 definition
const kimchi = new Word("kimchi","한국의 대표적 발효음식");

// Dict 클라스 인스턴트, Dict 의 모든 요소, 메서드를 상속받음
const dict = new Dict();

console.log(dict.add(kimchi));
console.log(dict.def("kimchi"));

//kimchi1.def = "xxx"; // readonly 라서 접근해서 수정 불가능
Dict1.hello();