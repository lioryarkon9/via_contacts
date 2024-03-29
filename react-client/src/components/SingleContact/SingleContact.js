import React from 'react';
import './SingleContact.scss';
import {Container} from 'react-bootstrap';
import PRO from '../../assets/professional.svg';
import CITIZEN from '../../assets/citizen.svg'

class SingleContact extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isFullView: false
        }
    }
    render () {
        const SHAPE = this.props.driverType === 'Professional' ? PRO : CITIZEN;
        return (
            <Container 
                className='single-contact'
                onMouseEnter={e => this.setState({isFullView: true})}
                onMouseLeave={e => this.setState({isFullView: false})}
            >
                <div className='profile-img'>
                    <img alt='img' src={this.props.profile_image}/>
                    <div className='shape-container'>
                        <div className='shape-cropper'>
                            <img alt='img' src={SHAPE} className='shape'/>
                        </div>
                    </div>
                </div>
                <div className='profile-info'>
                    <div className='full-name'>
                        {this.props.name}
                    </div>
                    <div>
                        {this.props.driverRank}
                    </div>
                    {this.state.isFullView ? 
                        <div>
                            <div>{this.props.phone}</div>
                            <div>{this.props.email}</div>
                        </div>
                    : null}
                </div>
            </Container>
        );
    }
    
}

export default SingleContact;