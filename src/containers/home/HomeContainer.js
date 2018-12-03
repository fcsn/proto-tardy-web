import React from 'react';
import AppointmentInfo from 'components/home/AppointmentInfo';
import StateInfo from 'components/home/StateInfo';

class HomeContainer extends React.Component {
    render () {
        return (
            <div className="home-container">
                <StateInfo/>
                <AppointmentInfo/>
            </div>
        );
    }
}

export default HomeContainer;
