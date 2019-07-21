import React from 'react';
import './AppWrapper.scss';


const AppWrapper = props => {
    return (
        <div id='app-wrapper'>
            <div id='header' className='d-flex justify-content-between align-items-center'>
                <div id='header-txt'>
                    Contact List
                </div>
                <div id='search-input'>
                    <input
                        className='form-control'
                        placeholder='search'
                    />
                </div>
            </div>
            <div id='content'>
                {props.children}
            </div>
        </div>
    );
}

export default AppWrapper;