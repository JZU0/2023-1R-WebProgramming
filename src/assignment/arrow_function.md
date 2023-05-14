<h3>과제: 일반적인 function과 arrow function의 차이를 조사하여 300자 이상, 예시 코드 1개 이상 포함하여 작성한다.</h3>

<b> 1. this </b>

<h4>일반적인 function</h4>
<h5>자바스크립트에서 모든 함수는 실행될 때마다 함수 내부에 this라는 객체가 추가된다</h5> 
<ul>
<li>함수 실행시에는 전역(window) 객체를 가리킨다.</li>
<li>메소드 실행시에는 메소드를 소유하고 있는 객체를 가리킨다.</li>
<li>생성자 실행시에는 새롭게 만들어진 객체를 가리킨다.</li></ul>
일반 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.
 
<h4>화살표 함수</h4>
화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다.
화살표 함수의 this 언제나 상위 스코프의 this를 가리킨다.(Lexical this)
또한 call, apply, bind 메소드를 사용하여 this를 변경할 수 없다. 
 
``` 
function fun() {
  this.name = "a";
  return {
    name: "b",
    speak: function () {
      console.log(this.name);
    },
  };
}

function arrFun() {
this.name = "a";
return {
name: "b",
speak: () => {
console.log(this.name);
},
};
}

const fun1 = new fun();
fun1.speak(); // b

const fun2 = new arrFun();
fun2.speak(); // a

```

<b>2. 생성자 함수로 실행 여부</b>
<h5>일반 함수는 생성자 함수로 사용할 수 있다.</h5>
<h5>화살표 함수는 생성자 함수로 사용할 수 없다. prototype 프로퍼티를 가지고 있지 않기 때문이다.</h5>

```

function fun() {
this.name = "웹프";
}
const arrFun = () => {
this.name = "웹프";
};

const funA = new fun();
console.log(funA.name); // 웹프

const funB = new arrFun(); // Error

```

<b>3. arguments 사용 가능 여부</b>
<h5>일반 함수 에서는 함수가 실행 될때 암묵적으로 arguments 변수가 전달되어 사용할 수 있다.</h5>
<h5>화살표 함수에서는 arguments 변수가 전달되지 않는다.</h5>
<!--!>
```
