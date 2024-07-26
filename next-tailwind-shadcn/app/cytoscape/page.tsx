'use client';

import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { stylesheet } from './style';

export default function CytoscapePage() {
  const elements = [
    {
      data: { id: 'one', label: '' },
      position: { x: 100, y: 100 },
      classes: 'nodeA',
    },
    {
      data: { id: 'two', label: '' },
      position: { x: 300, y: 100 },
      classes: 'nodeB',
    },
    {
      data: { id: 'three', label: '' },
      position: { x: 500, y: 20 },
      classes: 'nodeC',
    },
    {
      data: { id: 'four', label: '' },
      position: { x: 500, y: 180 },
      classes: 'nodeD',
    },
    {
      data: {
        source: 'one',
        target: 'two',
        label: 'Node A -> Node B',
      },
    },
    {
      data: {
        source: 'two',
        target: 'three',
        label: 'Node B -> Node C',
      },
    },
    {
      data: {
        source: 'two',
        target: 'four',
        label: 'Node B -> Node D',
      },
    },
  ];

  return (
    <div className="App">
      <CytoscapeComponent
        elements={elements}
        style={{ width: '700px', height: '700px' }}
        stylesheet={stylesheet}
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
