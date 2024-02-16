// 타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요. 
// Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.
var Dict_ = /** @class */ (function () {
    function Dict_() {
        this.dictionary = {};
    }
    // 단어 추가
    Dict_.prototype.add = function (word) {
        // 사전에 단어가 존재하는지 확인 
        if (this.dictionary[word.term] === undefined) {
            //객체 리터럴로 사전에 새로운 단어 등록
            this.dictionary[word.term] = word.def;
        }
    };
    // 단어 정의 리턴
    Dict_.prototype.get = function (term) {
        return this.dictionary[term];
    };
    // 단어 삭제
    Dict_.prototype.delete = function (term) {
        if (this.dictionary[term] !== undefined) {
            delete this.dictionary[term];
        }
    };
    // 단어 업데이트
    Dict_.prototype.update = function (term, def) {
        if (this.dictionary[term]) {
            this.dictionary[term] = def;
        }
    };
    // 사전의 모든 단어 보여주기
    Dict_.prototype.showAll = function () {
        return Object.keys(this.dictionary); // 배열 반환
    };
    // 사전의 단어 갯수 리턴
    Dict_.prototype.count = function () {
        var num = Object.keys(this.dictionary);
        return num.length;
    };
    // 단어 업데이트 + 없을 경우 insert (add + update)
    Dict_.prototype.upsert = function (word) {
        if (this.dictionary[word.term] === undefined) {
            //객체 리터럴로 사전에 새로운 단어 등록
            this.dictionary[word.term] = word.def;
        }
        else {
        }
    };
    // 단어 존재여부 알려줌
    Dict_.prototype.exists = function (term) {
        return this.dictionary.hasOwnProperty(term);
        //return Object.keys(this.dictionary).includes(term);
    };
    // 여러개 단어 한꺼번에 
    //[{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
    Dict_.prototype.bulkAdd = function (bulk) {
        var _this = this;
        bulk.forEach(function (word) {
            if (_this.dictionary[word.term] === undefined)
                _this.dictionary[word.term] = word.def;
        });
    };
    // 여러개 단어 한꺼번에 삭제
    //["김치", "아파트"]
    Dict_.prototype.bulkDelete = function (bulk) {
        var _this = this;
        bulk.forEach(function (word) {
            if (_this.dictionary[word])
                delete _this.dictionary[word];
        });
    };
    return Dict_;
}());
// 사전에 입력받을 단어의 타입 정리
var Word_ = /** @class */ (function () {
    function Word_(term, def) {
        this.term = term;
        this.def = def;
    }
    return Word_;
}());
// 새 변수 kimchi 는 2개의 인자를 받고 첫번째는 term, 두번째는 definition
var kimchi_ = new Word_("kimchi", "한국의 대표음식");
var chocolate = new Word_("chocolate", "카카오 콩을 재료로 가공한 식품");
var ai = new Word_("ai", " 인간의 학습능력, 추론능력, 지각능력을 인공적으로 구현하려는 컴퓨터 과학");
var stone = new Word_("stone", "암석에서 떨어져 나온 바위의 조각으로 모래보다 큰 것.");
// Dict 클라스 인스턴트, Dict 의 모든 요소, 메서드를 상속받음
var dict_ = new Dict_();
console.log(dict_.add(kimchi_));
console.log(dict_.add(chocolate));
console.log(dict_.add(ai));
console.log(dict_.get("kimchi"));
console.log(dict_.update("kimchi", "여러 채소를 소금,양념으로 발효시킨 식품이다."));
console.log(dict_.get("kimchi"));
console.log(dict_.showAll());
console.log(dict_.count());
console.log(dict_.upsert(ai));
console.log(dict_.upsert(stone));
console.log(dict_.exists("ai"));
console.log(dict_.delete("kimchi"));
console.log(dict_.showAll());
console.log(dict_.bulkAdd([{ term: "김치", def: "대박이네~" }, { term: "아파트", def: "비싸네~" }]));
console.log(dict_.showAll());
console.log(dict_.bulkDelete(["김치", "아파트"]));
console.log(dict_.showAll());
