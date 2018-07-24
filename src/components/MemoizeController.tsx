import * as React from 'react';
import MemoizeComponent from '../components/Memoize';
import '../styles/index.css';

export interface MCState {
  selectedId: string;
}

export default class MemoizeController extends React.PureComponent<{}, MCState> {
  state = { selectedId: '1' };

  private handleClick = (id: string) => {
    return this.setState({ selectedId: id });
  };

  render() {
    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <text
          style={{
            height: 64,
            width: 64,
            backgroundColor: 'teal',
            textAlign: 'center',
            color: 'white',
            fontSize: '24'
          }}
        >
          {this.state.selectedId}
        </text>
        <MemoizeComponent
          selectedId={this.state.selectedId}
          onChange={this.handleClick}
        />
      </div>
    );
  }
}
