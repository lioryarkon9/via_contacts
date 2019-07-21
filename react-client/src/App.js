import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppWrapper from './views/AppWrapper';
import ContactList from './views/ContactList';


const App = props => {
    return (
        <AppWrapper>
            <ContactList/>
        </AppWrapper>
    );
}

export default App;