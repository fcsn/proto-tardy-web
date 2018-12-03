import React from 'react';
import AppointmentInfo from 'components/home/AppointmentInfo';
import StateInfo from 'components/home/StateInfo';
import AddRegisterAppo from 'components/home/AddRegisterAppo';

class HomeContainer extends React.Component {
    render () {
        return (
            <div className="home-container">
                <StateInfo/>
                <AppointmentInfo/>
                <AddRegisterAppo/>
            </div>
        );
    }
}

export default HomeContainer;
