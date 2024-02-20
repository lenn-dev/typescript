// 타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요. 
// Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.
// 사전에 입력받을 단어의 타입 정리
// class 를 통해 인스턴스를 생성하면 (term:string,def:string) 두가지 입력값이 필요함
var Wordtype = /** @class */ (function () {
    function Wordtype(term, def) {
        this.term = term;
        this.def = def;
    }
    return Wordtype;
}());
var Dict2 = /** @class */ (function () {
    function Dict2() {
        this.dictionary = {};
    }
    // 단어 추가
    // Wordtype이란 class가 타입으로 쓰임
    // add 의 입력값은 Wordtype형식의 객체가 됨
    Dict2.prototype.add = function (word) {
        // 사전에 단어가 존재하는지 확인 
        if (this.dictionary[word.term] === undefined) {
            //객체 리터럴로 사전에 새로운 단어 등록
            this.dictionary[word.term] = word.def;
        }
    };
    // 단어 정의 리턴
    Dict2.prototype.get = function (term) {
        return this.dictionary[term];
    };
    // 단어 삭제
    Dict2.prototype.delete = function (term) {
        if (this.dictionary[term] !== undefined) {
            delete this.dictionary[term];
        }
    };
    // 단어 업데이트
    Dict2.prototype.update = function (term, def) {
        if (this.dictionary[term]) {
            this.dictionary[term] = def;
        }
    };
    // 사전의 모든 단어 보여주기
    Dict2.prototype.showAll = function () {
        return Object.keys(this.dictionary); // 배열 반환
    };
    // 사전의 단어 갯수 리턴
    Dict2.prototype.count = function () {
        var num = Object.keys(this.dictionary);
        return num.length;
    };
    // 단어 업데이트 + 없을 경우 insert (add + update)
    Dict2.prototype.upsert = function (word) {
        if (this.dictionary[word.term] === undefined) {
            //객체 리터럴로 사전에 새로운 단어 등록
            this.dictionary[word.term] = word.def;
        }
        else {
        }
    };
    // 단어 존재여부 알려줌
    Dict2.prototype.exists = function (term) {
        return this.dictionary.hasOwnProperty(term);
        //return Object.keys(this.dictionary).includes(term);
    };
    // 여러개 단어 한꺼번에 
    //[{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
    Dict2.prototype.bulkAdd = function (bulk) {
        var _this = this;
        bulk.forEach(function (word) {
            if (_this.dictionary[word.term] === undefined)
                _this.dictionary[word.term] = word.def;
        });
    };
    // 여러개 단어 한꺼번에 삭제
    //["김치", "아파트"]
    Dict2.prototype.bulkDelete = function (bulk) {
        var _this = this;
        bulk.forEach(function (word) {
            if (_this.dictionary[word])
                delete _this.dictionary[word];
        });
    };
    return Dict2;
}());
// Wordtype 형식을 갖춘 새 단어 인스턴스 객체 생성
// 새 변수 kimchi 는 2개의 인자를 받고 첫번째는 term, 두번째는 definition
var kimchi_ = new Wordtype("kimchi", "한국의 대표음식");
var chocolate = new Wordtype("chocolate", "카카오 콩을 재료로 가공한 식품");
var ai = new Wordtype("ai", " 인간의 학습능력, 추론능력, 지각능력을 인공적으로 구현하려는 컴퓨터 과학");
var stone = new Wordtype("stone", "암석에서 떨어져 나온 바위의 조각으로 모래보다 큰 것.");
// Dict2 클라스 인스턴트, Dict2 의 모든 요소, 메서드를 상속받음
var myDict = new Dict2();
// 위에서 새로 생성한 인스턴스객체가 인자로 들어감
// 사전에 입력할때 Wordtype을 갖춘 형식으로 만들었기 때문에 객체를 넣어주면 됨.
console.log(myDict.add(kimchi_));
console.log(myDict.add(chocolate));
console.log(myDict.add(ai));
console.log(myDict.get("kimchi")); // 단어의 뜻이 있는지 검색할때는 string으로 입력함
console.log(myDict.update("kimchi", "여러 채소를 소금,양념으로 발효시킨 식품이다."));
console.log(myDict.get("kimchi"));
console.log(myDict.showAll());
console.log(myDict.count());
console.log(myDict.upsert(ai));
console.log(myDict.upsert(stone));
console.log(myDict.exists("ai"));
console.log(myDict.delete("kimchi"));
console.log(myDict.showAll());
console.log(myDict.bulkAdd([{ term: "김치", def: "대박이네~" }, { term: "아파트", def: "비싸네~" }]));
console.log(myDict.showAll());
console.log(myDict.bulkDelete(["김치", "아파트"]));
console.log(myDict.showAll());
