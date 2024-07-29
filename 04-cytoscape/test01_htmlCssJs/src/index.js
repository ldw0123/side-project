import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';
import './style.css'; // webpack으로 묶어줘야 하니 css파일을 진입점인 index.js에 import 한다

cytoscape.use(coseBilkent);

const data = [
  {
    data: {
      // id에 '공백'과 '.'이 포함되면 안 됨!
      id: 'A', // node A
      url: 'https://github.com/nomelancholy/js-project-driven-study-mind-map/projects/1?add_cards_query=is%3Aopen', // 링크 (옵션)
      label: 'Project Driven Study Map', // 표시하고 싶은 내용 (옵션)
    },
  },
  {
    data: {
      id: 'B',
      url: 'https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5',
      label: 'package.json 에러',
    },
  },
  {
    data: {
      id: 'A->B', // edge A->B
      source: 'B', // 연결할 노드 중 하위에 놓을 node id
      target: 'A', // 연결할 노드 중 상위에 놓을 node id
    },
  },
  {
    data: {
      id: 'C',
      url: 'https://stackoverflow.com/questions/9484829/npm-cant-find-package-json',
      label: 'npm 패키지 설치 순서 숙지',
    },
  },
  {
    data: {
      id: 'B->C',
      source: 'C',
      target: 'B',
    },
  },
  {
    data: {
      id: 'D',
      url: 'https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNT3L0sknJfq3DO75H55Q5VQJODk-Q%3A1577373778729&ei=UtAEXvGVLMLh-AbOm7CYDA&q=Uncaught+SyntaxError%3A+Cannot+use+import+statement+outside+a+modul&oq=Uncaught+SyntaxError%3A+Cannot+use+import+statement+outside+a+modul&gs_l=psy-ab.3..35i39j0l2j0i203l7.513620.513620..514369...0.0..0.167.374.1j2......0....2j1..gws-wiz.gwgT-rwsfWw&ved=0ahUKEwjxhomez9PmAhXCMN4KHc4NDMMQ4dUDCAs&uact=5',
      label: 'script module 에러',
    },
  },
  {
    data: {
      id: 'A->D',
      source: 'D',
      target: 'A',
    },
  },
  {
    data: {
      id: 'E',
      url: 'https://velog.io/@takeknowledge/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%A8%EB%93%88-%ED%95%99%EC%8A%B5-%EB%82%B4%EC%9A%A9-%EC%9A%94%EC%95%BD-lwk4drjnni',
      label: 'js module 학습',
    },
  },
  {
    data: {
      id: 'D->E',
      source: 'E',
      target: 'D',
    },
  },
  {
    data: {
      id: 'F',
      url: 'https://velog.io/@takeknowledge/script-%ED%83%9C%EA%B7%B8%EB%8A%94-%EC%96%B4%EB%94%94%EC%97%90-%EC%9C%84%EC%B9%98%ED%95%B4%EC%95%BC-%ED%95%A0%EA%B9%8C%EC%9A%94',
      label: 'script 태그 위치 학습',
    },
  },
  {
    data: {
      id: 'D->F',
      source: 'F',
      target: 'D',
    },
  },
  {
    data: {
      id: 'G',
      url: 'https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNSmKE1wN_fBQuRtT5pwz0hZ5JqldQ%3A1577374293889&ei=VdIEXtP7NY-lmAX82Z7oDg&q=Access+to+script+at+%27file%3A%2F%2F%2FC%3A%2Fdev%2Fworkspace%2Fjs-seomal-clone%2Fjs%2Fcyto.js%27+from+origin+%27null%27+has+been+blocked+by+CORS+policy%3A+Cross+origin+requests+are+only+supported+for+protocol+schemes%3A+http%2C+data%2C+chrome%2C+chrome-extension%2C+https.&oq=Access+to+script+at+%27file%3A%2F%2F%2FC%3A%2Fdev%2Fworkspace%2Fjs-seomal-clone%2Fjs%2Fcyto.js%27+from+origin+%27null%27+has+been+blocked+by+CORS+policy%3A+Cross+origin+requests+are+only+supported+for+protocol+schemes%3A+http%2C+data%2C+chrome%2C+chrome-extension%2C+https.&gs_l=psy-ab.3..35i39j0i20i263l2j0i203l7.516217.516217..516645...0.0..0.177.281.0j2......0....2j1..gws-wiz.JE3_EPpI5o4&ved=0ahUKEwiT-tuT0dPmAhWPEqYKHfysB-0Q4dUDCAs&uact=5',
      label: 'local 실행시 CORS 에러',
    },
  },
  {
    data: {
      id: 'A->G',
      source: 'G',
      target: 'A',
    },
  },
  {
    data: {
      id: 'H',
      url: 'https://velog.io/@takeknowledge/%EB%A1%9C%EC%BB%AC%EC%97%90%EC%84%9C-CORS-policy-%EA%B4%80%EB%A0%A8-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3gk4gyhreu',
      label: 'CORS & SOP 학습',
    },
  },
  {
    data: {
      id: 'G->H',
      source: 'H',
      target: 'G',
    },
  },
  {
    data: {
      id: 'I',
      url: 'https://goenning.net/2017/07/21/how-to-avoid-relative-path-hell-javascript-typescript-projects/',
      label: 'module import 경로 에러',
    },
  },
  {
    data: {
      id: 'A->I',
      source: 'I',
      target: 'A',
    },
  },
  {
    data: {
      id: 'J',
      url: 'https://github.com/nomelancholy/webpack-build-practice',
      label: 'webpack build 실습',
    },
  },
  {
    data: {
      id: 'I->J',
      source: 'J',
      target: 'I',
    },
  },
  {
    data: {
      id: 'K',
      url: 'https://github.com/nomelancholy/webpack-build-practice',
      label: 'js 엔진과 runtime 학습',
    },
  },
  {
    data: {
      id: 'J->K',
      source: 'K',
      target: 'J',
    },
  },
];

// rank를 활용하기 위해 data만 입력한 cytoscape 객체
const cy_for_rank = cytoscape({
  elements: data,
});

const pageRank = cy_for_rank.elements().pageRank(); // elements들의 rank

// 추후 마우스 인/아웃 시에도 활용해야 하니, node와 font의 최대값/최소값은 변수로 빼준다
const nodeMaxSize = 100;
const nodeMinSize = 5;
const fontMaxSize = 15;
const fontMinSize = 5;

// cytoscape 객체
let cy = cytoscape({
  container: document.getElementById('cy'), // 렌더링할 컨테이너

  elements: data,

  style: [
    // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        label: 'data(label)', // data(id / label) 옵션으로 id나 label로 노드의 이름을 표시할 수 있다

        // 노드와 글씨 크기 차등 적용
        width: function (ele) {
          return nodeMaxSize * pageRank.rank('#' + ele.id()) + nodeMinSize;
        },
        height: function (ele) {
          return nodeMaxSize * pageRank.rank('#' + ele.id()) + nodeMinSize;
        },
        'font-size': function (ele) {
          return fontMaxSize * pageRank.rank('#' + ele.id()) + fontMinSize;
        },
      },
    },

    {
      selector: 'edge',
      style: {
        width: 3,
        'curve-style': 'bezier', // 간선에 화살표 추가
        'line-color': '#ccc',

        // (target/source) 옵션으로 화살표의 방향을 바꿀 수 있다
        'source-arrow-color': '#ccc',
        'source-arrow-shape': 'chevron', // 화살표 모양 옵션
      },
    },
  ],

  layout: {
    name: 'cose-bilkent',
    animate: false,
    gravityRangeCompound: 1.5,
    fit: true,
    tile: true,
    idealEdgeLength: 150,
  },
});

// 노드에 하이퍼링크 적용
cy.on('tap', function (e) {
  const url = e.target.data('url');
  if (url && url !== '') {
    window.open(url);
  }
});
