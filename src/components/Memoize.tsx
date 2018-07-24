import * as _ from 'lodash';
import * as React from 'react';
import '../styles/index.css';

// Testing memoization and closures in React with Typescript.

export interface MemoizeProps {
  onChange: () => void;
}

export interface MemoizeState {
  id: string;
}

const VALUES = ['1', '2', '3'];

export default class Memoize extends React.PureComponent<MemoizeProps, MemoizeState> {
  private memoizedFunctions = [] as any;

  constructor(props: MemoizeProps) {
    super(props);
    this.state = { id: '1' };
    this.onTabPress = this.onTabPress.bind(this);
    this.memoizedFunctions.push(this.onTabPress);
  }

  private printToConsole = (...args: any[]) => {
    console.log(...args);
  };

  private setSelectedID = (id: string) => {
    if (id === '1') {
      return this.printToConsole('we have 1, not going to set state');
    } else {
      return this.setState({ id });
    }
  };

  private mapThroughMemoizedFunctions = () => {
    this.memoizedFunctions.map((func: _.MemoizedFunction) => {
      console.log('Memoized Function', this.onTabPress.cache as _.MapCache);
      for (const property in func) {
        if (func.hasOwnProperty(property)) {
          console.log(func[property]);
        }
      }
    });
  };

  private onTabPress = _.memoize((id: string) => {
    console.log('Closure Invoking Returning Function with parameter(s)', id);
    return () => this.setSelectedID(id);
  });

  private renderButtons = () => {
    return VALUES.map(o => {
      const dispatchAction = this.onTabPress(o);
      return (
        <button style={{ height: 48, width: 48 }} onClick={dispatchAction} key={o}>
          {o}
        </button>
      );
    });
  };

  render() {
    this.printToConsole(this.memoizedFunctions, this.state);
    this.mapThroughMemoizedFunctions();
    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h3 style={{ paddingRight: 4 }}>{'Memoize Test ' + this.state.id}</h3>
        {this.renderButtons()}
      </div>
    );
  }
}
