import React from 'react';
import HomeContainer from 'containers/home/HomeContainer';
import PageTemplate from 'components/common/PageTemplate/PageTemplate';

class HomePage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: 'HomePage'
        };
    }

    render () {
        return (
            <PageTemplate>
                <HomeContainer/>
            </PageTemplate>
        );
    }
};

export default HomePage;
