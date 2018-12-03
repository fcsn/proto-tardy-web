import React, { Component } from 'react';
import { Home, Login, Create } from 'pages';
import { Route,Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/create" component={Create}/>
                </Switch>
            </div>
        );
    }
}

export default App;
