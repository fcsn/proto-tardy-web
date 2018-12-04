import React from 'react';

class AppointmentInfo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isEdit: false,
            isExpand: false,
            appoFuture: [
                {
                    date: '2018. 10. 30',
                    time: '오후 2:45',
                    timeLimit: '22시간 45분 45초',
                    title: '포순이랑 영화보는 날',
                    location: '신사',
                    id: 1
                }, {
                    date: '2018. 11. 06',
                    time: '오후 3:00',
                    timeLimit: '20시간 45분 45초',
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
        this._toggleEdit = this._toggleEdit.bind(this);
        this._toggleExpand = this._toggleExpand.bind(this);
        this._removeAppo = this._removeAppo.bind(this);
    }

    _toggleEdit () {
        const { isEdit } = this.state
        this.setState({ isEdit: !isEdit });
    }

    _toggleExpand () {
        const { isExpand } = this.state
        this.setState({ isExpand: !isExpand });
    }

    _removeAppo () {
        console.log('Appo Removed!');
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
                    <div key={appo.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', border: '0.5px solid #e2e2e2', backgroundColor: '#FFFFFF', marginTop: '0.5rem', borderRadius: '5px', height: '4.3rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', marginTop: '0.8rem' }}>
                                <div style={{ fontSize: '0.8rem', color: '#bcbcbc' }}>{appo.date}</div>
                                <div style={{ fontSize: '0.5rem', marginLeft: '0.3rem' }}>D - 2</div>
                            </div>
                            <div style={{ fontSize: '1.2rem', marginTop: '0.3rem' }}>{appo.title}</div>
                        </div>
                        <button style={{ marginRight: '1.5rem' }} onClick={() => this._toggleExpand()}>toggle</button>
                    </div>
                )}
            </div>
        )

        const AppoFutureListEditable = () => (
            <div>
                {this.state.appoFuture.map(appo =>
                    <div key={appo.id} className="appo-future-content-editable" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
                                <div onClick={() => this._removeAppo()}>remove</div>
                            </div>
                        </div>

                        <div style={{ width: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', border: '0.5px solid #e2e2e2', backgroundColor: '#FFFFFF', marginTop: '0.5rem', borderRadius: '5px', height: '4.3rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', marginTop: '0.8rem' }}>
                                    <div style={{ fontSize: '0.8rem', color: '#bcbcbc' }}>{appo.date}</div>
                                    <div style={{ fontSize: '0.5rem', marginLeft: '0.3rem' }}>D - 2</div>
                                </div>
                                <div style={{ fontSize: '1.2rem', marginTop: '0.3rem' }}>{appo.title}</div>
                            </div>
                            <div style={{ marginRight: '1.5rem' }}></div>
                        </div>
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
                    <div style={ button } onClick={() => this._toggleEdit()}>편집하기</div>
                </div>

                { !this.state.isEdit
                    ? <div className="appo-future-content">
                        <AppoFutureList/>
                    </div>
                    : <AppoFutureListEditable/>
                }
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
