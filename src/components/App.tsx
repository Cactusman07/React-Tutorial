import * as React from 'react';

import PageInterface from '../PageInterface';

class App extends React.Component<PageInterface, {}>{
    render() {
        return (<div>
            <h1>This is my React Application, with Typescript</h1>
            <p>Page Color is: {this.props.color}</p>
        </div>
        );
    }
}