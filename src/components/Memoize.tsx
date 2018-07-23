// import { memoize } from 'lodash';
import * as React from 'react';
import '../styles/index.css';

export default class Memoize extends React.Component<{}, {}> {
  //   private remember = memoize((value: number) => {
  //     console.log('remember');
  //   });

  render() {
    return (
      <div
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h3>{'Memoize Test'}</h3>
      </div>
    );
  }
}
