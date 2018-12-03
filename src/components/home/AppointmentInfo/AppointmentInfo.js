import React from 'react';

class AppointmentInfo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            appoFuture: [
                {
                    date: '2018. 10. 30',
                    title: '포순이랑 영화보는 날',
                    location: '신사',
                    id: 1
                }, {
                    date: '2018. 11. 06',
                    title: '포순이랑 경주 여행',
                    location: '경주',
                    id: 2
                }
            ],
            appoPast: [
                {
                    date: '2018. 09. 30',
                    title: '포순이랑 영화보는 날',
                    location: '신사',
                    maleLateTime: '-15분',
                    femaleLateTime: '+15분',
                    id: 1
                }, {
                    date: '2018. 10. 06',
                    title: '포순이랑 경주 여행',
                    location: '경주',
                    maleLateTime: '-15분',
                    femaleLateTime: '+15분',
                    id: 2
                }
            ]
        };
    }

    render () {
        const button = {
            top: '485px',
            left: '278px',
            width: '74px',
            height: '27px'
        }

        const circle = {
            width: '50px',
            height: '50px',
            background: '#fac260',
            borderRadius: '25px',
            marginTop: '0.5rem'
        }

        const AppoFutureList = () => (
            <div>
                {this.state.appoFuture.map(appo =>
                    <div key={appo.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', border: '0.5px solid #e2e2e2', backgroundColor: '#FFFFFF', marginTop: '0.5rem', borderRadius: '5px', height: '4rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', marginTop: '0.5rem' }}>
                                <div style={{ fontSize: '0.8rem', color: '#bcbcbc' }}>{appo.date}</div>
                                <div style={{ fontSize: '0.5rem', marginLeft: '0.3rem' }}>D - 2</div>
                            </div>
                            <div style={{ fontSize: '1.2rem', marginTop: '0.3rem' }}>{appo.title}</div>
                        </div>
                        <button style={{ marginRight: '1.5rem' }}>toggle</button>
                    </div>
                )}
            </div>
        )

        const AppoPastList = () => (
            <div>
                {this.state.appoPast.map(appo =>
                    <div key={appo.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '0.5px solid #e2e2e2', backgroundColor: '#FFFFFF', marginTop: '0.5rem', borderRadius: '5px', height: '4rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                            <div style={{ fontSize: '1.2rem', color: 'a3a3a3' }}>{appo.maleLateTime}</div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', fontWeight: 'lighter', fontSize: '0.9rem' }}><div>{appo.date}</div></div>
                            <div style={{ fontSize: '1.2rem', color: 'a3a3a3' }}>{appo.maleLateTime}</div>
                        </div>
                    </div>
                )}
            </div>
        )

        const AppoFuture = () => (
            <div className="appo-future-outer">
                <div className="appo-future-header" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '1rem' }}>
                    <div><p style={{ marginTop: '0px', color: 'gray', fontSize: '0.9rem' }}>진행중인 약속</p></div>
                    <a style={ button }>편집하기</a>
                </div>

                <div className="appo-future-content">
                    <AppoFutureList/>
                </div>
            </div>
        );

        const AppoPast = () => (
            <div className="appo-past-outer">
                <div className="appo-past-header" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '2rem' }}>
                    <div><p style={{ marginTop: '0px', color: 'gray', fontSize: '0.9rem' }}>지나간 약속</p></div>
                </div>

                <div className="appo-past-content">
                    <AppoPastList/>
                </div>
            </div>
        )

        return (
            <div style={{ backgroundColor: '#f2f2f2', boxSizing: 'border-box', padding: '1rem' }}>
                <AppoFuture/>
                <div style={{ borderBottom: '0.5px solid #e2e2e2 ', marginTop: '2rem' }}></div>
                <AppoPast/>
            </div>
        );
    }
};

export default AppointmentInfo;
