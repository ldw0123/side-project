'use client';

import { Layout, Model, TabNode, IJsonModel } from 'flexlayout-react';
import 'flexlayout-react/style/gray.css'; // gray
import 'flexlayout-react/style/underline.css'; // underline
import { useRef } from 'react';
import CytoscapePage from '../cytoscape/page';

let json: IJsonModel = {
  global: { tabEnableFloat: true, enableEdgeDock: true },
  borders: [],
  layout: {
    type: 'row',
    weight: 100,
    children: [
      {
        id: 'NAVIGATION',
        type: 'tabset',
        weight: 20,
        children: [
          {
            type: 'tab',
            name: 'One',
            component: 'grid',
          },
        ],
      },
      {
        type: 'row',
        weight: 50,
        children: [
          {
            type: 'tabset',
            weight: 70,
            children: [
              {
                type: 'tab',
                name: 'Two',
                component: 'custom',
              },
            ],
          },
          {
            type: 'tabset',
            weight: 30,
            children: [
              {
                type: 'tab',
                name: 'Three',
                component: 'button',
              },
            ],
          },
        ],
      },
      {
        type: 'tabset',
        weight: 30,
        children: [
          {
            type: 'tab',
            name: 'Four',
            component: 'button',
          },
        ],
      },
    ],
  },
};

const model = Model.fromJson(json);

export default function Flexlayout() {
  const layoutRef = useRef<Layout | null>(null);

  // factory() 함수: 렌더링
  const factory = (node: TabNode) => {
    let component = node.getComponent();
    if (component === 'button') {
      return <button>{node.getName()}</button>;
    }
    if (component === 'grid') {
      return <div className="grid">그리드 컴포넌트 하하</div>;
    }
    if (component === 'custom') {
      return <CytoscapePage />;
    }
  };

  // 탭 추가 함수
  const addNewTab = () => {
    if (layoutRef.current) {
      layoutRef.current.addTabToTabSet('NAVIGATION', {
        type: 'tab',
        component: 'grid',
        name: 'Mega Coffee',
      });
    }
  };

  return (
    <div className="app">
      <button
        onClick={addNewTab}
        style={{}}
        className="absolute z-10 top-[100px] bg-[#b1e1e2] border-none cursor-pointer"
      >
        💩탭 추가💩
      </button>
      <Layout
        model={model}
        factory={factory}
        popoutURL="/popout.html"
        ref={layoutRef}
      />
    </div>
  );
}
