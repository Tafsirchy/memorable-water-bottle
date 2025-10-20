import React from 'react';

const Bottle = ({bottle}) => {
    console.log(bottle);
    const {brand, image} = bottle;
    return (
        <div>
            <h3>Brand:{brand} </h3>
            <img style={{
                maxHeight: '400px',
                maxWidth: '300px',
                border: '2px solid olive',
                padding: '10px',
                margin: '10px',
            }} src={image} alt="" />
        </div>
    );
};

export default Bottle;