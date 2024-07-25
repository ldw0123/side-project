import { Layout, Model, TabNode, IJsonModel } from 'flexlayout-react';
import './App.css';
import 'flexlayout-react/style/gray.css'; // gray
import 'flexlayout-react/style/underline.css'; // underline
import { useRef } from 'react';

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
        weight: 50,
        children: [
          {
            type: 'tab',
            name: 'One',
            component: 'button',
          },
        ],
      },
      {
        type: 'tabset',
        weight: 50,
        children: [
          {
            type: 'tab',
            name: 'Two',
            component: 'button',
          },
        ],
      },
      {
        type: 'tabset',
        weight: 20,
        children: [
          {
            type: 'tab',
            name: 'Three',
            component: 'button',
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

function LayoutComponent() {
  const layoutRef = useRef<Layout | null>(null);

  // factory() 함수: 렌더링
  const factory = (node: TabNode) => {
    let component = node.getComponent();
    if (component === 'button') {
      return <button>{node.getName()}</button>;
    }
    if (component === 'grid') {
      return <div className="grid">Grid Component</div>;
    }
  };

  // 탭 추가 함수
  const addNewTab = () => {
    if (layoutRef.current) {
      layoutRef.current.addTabToTabSet('NAVIGATION', {
        type: 'tab',
        component: 'grid',
        name: 'a grid',
      });
    }
  };

  return (
    <div className="app">
      <button onClick={addNewTab} style={{}} className="tabAddButton">
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

export default Layout;
