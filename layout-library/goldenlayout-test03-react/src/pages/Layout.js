import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { GoldenLayout } from 'golden-layout';
import 'golden-layout/dist/css/themes/goldenlayout-light-theme.css';

const TestComponent = ({ label }) => {
  return <h1>{label}</h1>;
};

export default function Layout() {
  const layoutRef = useRef(null);

  useEffect(() => {
    const myLayout = new GoldenLayout(
      {
        content: [
          {
            type: 'row',
            content: [
              {
                type: 'component',
                componentType: 'test-component',
                componentState: { label: 'A' },
              },
              {
                type: 'column',
                content: [
                  {
                    type: 'component',
                    componentType: 'test-component',
                    componentState: { label: 'B' },
                  },
                  {
                    type: 'component',
                    componentType: 'test-component',
                    componentState: { label: 'C' },
                  },
                ],
              },
            ],
          },
        ],
      },
      layoutRef.current
    );

    myLayout.registerComponentFactoryFunction(
      'test-component',
      (container, state) => {
        const div = document.createElement('div');
        container.element.append(div);
        const root = ReactDOM.createRoot(div);
        root.render(<TestComponent {...state} />);
      }
    );
    myLayout.init();
    // myLayout.loadLayout();
  }, []);

  return <div ref={layoutRef} style={{ height: '100vh', width: '100%' }} />;
}
