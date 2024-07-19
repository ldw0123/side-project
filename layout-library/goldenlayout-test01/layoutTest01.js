// config 객체: 레이아웃을 정의
// content 배열: 레이아웃의 구조를 나타냄
var config = {
  content: [
    {
      type: 'column', // row: 행, column: 열, stack: 스택
      content: [
        {
          type: 'component',
          componentName: 'example',
          componentState: { text: 'Component 1' },
        },
        {
          type: 'component',
          componentName: 'example',
          componentState: { text: 'Component 2' },
        },
        {
          type: 'component',
          componentName: 'example',
          componentState: { text: 'Component 3' },
        },
        {
          type: 'component',
          componentName: 'example',
          componentState: { text: 'Component 4' },
        },
      ],
    },
  ],
};

// Golden Layout 초기화
let myLayout = new GoldenLayout(config, '#layoutContainer'); // #layoutContainer: 레이아웃이 렌더링될 HTML 요소의 ID

// registerComponent(): 컴포넌트를 등록
// 인자1: 컴포넌트의 이름 ('example')
// 인자2: 컴포넌트가 생성될 때 호출되는 콜백 함수
myLayout.registerComponent('example', function (container, state) {
  container.getElement().html(`<h2>${state.text}</h2>`);
});

myLayout.init(); // Golden Layout 호출
