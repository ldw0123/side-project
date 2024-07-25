// react-cytoscapejs.d.ts
declare module 'react-cytoscapejs' {
  import { Component } from 'react';
  import cytoscape from 'cytoscape';

  interface CytoscapeComponentProps {
    elements: cytoscape.ElementDefinition[];
    style?: React.CSSProperties;
    cy?: (cy: cytoscape.Core) => void;
    layout?: cytoscape.LayoutOptions;
    stylesheet?: cytoscape.Stylesheet | cytoscape.Stylesheet[];
    className?: string;
    wheelSensitivity?: number;
  }

  export default class CytoscapeComponent extends Component<CytoscapeComponentProps> {}
}
