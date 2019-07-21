import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SingleContact from '../../components/SingleContact';

class ContactList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            AllContacts: []
        }
        this.getContacts = this.getContacts.bind(this);
    }
    componentDidMount () {
        this.getContacts();
    }
    getContacts () {
        fetch('http://private-05627-frontendnewhire.apiary-mock.com/contact_list')
        .then(httpRes => {
            httpRes.json()
            .then(jsonRes => this.setState({AllContacts: jsonRes}))
        })
    }
    render () {
        return (
            <Container style={{paddingTop: 2 + 'vh'}}>
                <Row>
                    {this.state.AllContacts.map((item, i) => (
                        <Col md={12} lg={3} key={'_' + i}>
                            <SingleContact
                                name={item.name}
                                driverType={item.driverType}
                                driverRank={item.driverRank}
                                phone={item.phone}
                                email={item.email}
                                profile_image={item.profile_image}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ContactList;