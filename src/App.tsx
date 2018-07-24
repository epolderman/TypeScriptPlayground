import * as React from 'react';
import { Route, Switch } from 'react-router';
import MemoizeController from './components/MemoizeController';
class App extends React.Component {
  public render() {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }}
      >
        <Switch>
          <Route exact path="/" component={MemoizeController} />
        </Switch>
      </div>
    );
  }
}

export default App;
