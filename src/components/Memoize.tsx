import {memoize} from 'lodash';
import * as React from 'react';

export interface IProps {
    name: string;
}

export default class Memoize extends React.Component<IProps,{}>{


    private remember = memoize((value: number) => {
        // do some work
    });

    render(){
        return <div>{'mem'}</div>
    }
}