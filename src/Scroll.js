import React from 'react';

const Scroll = (props) => {
    return (
        <dir style={{ overflowY: 'scroll', border: '5px solid black', height: '1800px' }}>
            {props.children}
        </dir>

    );
};

export default Scroll;