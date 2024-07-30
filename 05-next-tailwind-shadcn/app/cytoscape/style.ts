// node와 edge의 스타일 정의

export const stylesheet = [
  {
    selector: 'node',
    style: {
      label: 'data(label)',
      'text-valign': 'center',
      'text-halign': 'center',
      color: '#fff',
      'font-size': 12,
    },
  },
  {
    selector: 'node.nodeA',
    style: {
      width: 70,
      height: 70,
      'background-color': '#0074D9',
      'background-image':
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/200px-Flag_of_South_Korea.svg.png',
    },
  },
  {
    selector: 'node.nodeB',
    style: {
      width: 70,
      height: 70,
      'background-color': '#d38ee1',
    },
  },
  {
    selector: 'node.nodeC',
    style: {
      width: 70,
      height: 70,
      'background-color': '#7acb83',
    },
  },
  {
    selector: 'node.nodeD',
    style: {
      width: 70,
      height: 70,
      'background-color': '#ffad66',
    },
  },
  {
    selector: 'edge',
    style: {
      width: 1,
      'line-color': '#5a94f2',
      'target-arrow-color': '#5a94f2',
      'target-arrow-shape': 'triangle',
      'curve-style': 'bezier',
      label: 'data(label)',
      'text-rotation': 'autorotate',
      'font-size': 10,
      'text-margin-y': -10,
      color: '#000',
    },
  },
];
