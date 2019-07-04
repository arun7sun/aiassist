import React from 'react';
import Loading from 'react-loading';
import './style'

const Loader = (props) => {
    return (
        <div className="loader">
            <Loading type={props.type} color='#2a3f54' delay={props.delay} />
        </div>
    )
}
export default Loader;