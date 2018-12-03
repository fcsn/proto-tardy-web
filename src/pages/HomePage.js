import React from 'react';
import HomeContainer from 'containers/home/HomeContainer';

class HomePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: 'HomePage'
        };
    }

    render () {
        return (
            <div>
                <HomeContainer/>
            </div>
        );
    }
};

export default HomePage;
