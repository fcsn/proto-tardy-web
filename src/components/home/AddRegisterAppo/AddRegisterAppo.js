import React from 'react';
import { Link } from 'react-router-dom';

class AddRegisterAppo extends React.Component {
    render () {
        return (
            <div style={{ backgroundColor: 'black', height: '4rem', color: 'white', fontSize: '1.2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <div><Link to='/create' style={{ all: 'unset' }}>일정 등록하기 +</Link></div>
                </div>
            </div>
        );
    }
}

export default AddRegisterAppo;
