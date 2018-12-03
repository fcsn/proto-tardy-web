import React from 'react';
import AppointmentInfo from 'components/home/AppointmentInfo';
import StateInfo from 'components/home/StateInfo';

class HomeContainer extends React.Component {
    render () {
        const defaultPadding = {
            minHeight: '100vh'
        }
        return (
            <div className="home-container" style={defaultPadding}>
                <StateInfo/>
                <AppointmentInfo/>
            </div>
        );
    }
}

export default HomeContainer;
