import React from 'react';

const StateInfo = () => {
    const circle = {
        width: '150px',
        height: '150px',
        background: '#fac260',
        borderRadius: '75px',
        marginTop: '0.5rem'
    }
    const innerCircle = {
        width: '144px',
        height: '144px',
        background: '#ffffff',
        borderRadius: '72px'
    }

    const textCenter = {
        textAlign: 'center'
    }

    const MoneyBox = {
        border: '0.5px solid #ffb356',
        borderRadius: '100px',
        backgroundColor: '#facb59',
        marginTop: '1rem'
    }

    const CircleData = () => (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '1rem', paddingRight: '1rem' }}>
            <div style={{ textAlign: 'center', fontSize: '0.9rem' }}>김포순</div>
            <div style={{ textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>3회 48분 지각</div>
            <div><div className="circle" style={ circle }><div className="circle" style={ innerCircle }></div></div></div>
            <div className="money-display" style={ MoneyBox }><p style={ textCenter }><strong>17,500원</strong></p></div>
        </div>
    )

    const MoneyProgress = () => (
        <div></div>
    )

    return (
        <div style={{ height: '70vh', background: 'linear-gradient(#fbda4f, #fac260)', boxSizing: 'border-box', padding: '1rem' }}>
            <p style={ textCenter }>달력쓰</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <CircleData/>
                <CircleData/>
            </div>
        </div>
    );
};

export default StateInfo;
