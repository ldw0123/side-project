'use client';

import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

export default function CytoscapePage() {
  const elements = [
    { data: { id: 'one', label: 'A' }, position: { x: 100, y: 100 } },
    { data: { id: 'two', label: 'B' }, position: { x: 300, y: 100 } },
    { data: { id: 'three', label: 'C' }, position: { x: 500, y: 20 } },
    { data: { id: 'four', label: 'D' }, position: { x: 500, y: 180 } },
    {
      data: { source: 'one', target: 'two', label: 'Node1에서 Node2' },
    },
    {
      data: {
        source: 'two',
        target: 'three',
        label: 'Node2 에서 Node3',
      },
    },
    {
      data: {
        source: 'two',
        target: 'four',
        label: 'Node2 에서 Node4',
      },
    },
  ];

  return (
    <div className="App">
      <CytoscapeComponent
        elements={elements}
        style={{ width: '700px', height: '700px' }}
        stylesheet={[
          {
            selector: 'node',
            style: {
              width: 70,
              height: 70,
            },
          },
        ]}
        cy={(cy) => {
          cy.on('tap', 'node', (evt) => {
            const node = evt.target;
            console.log('Tapped node', node.id());
          });
        }}
      />
    </div>
  );
}
