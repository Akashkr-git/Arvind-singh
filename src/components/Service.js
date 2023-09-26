import React from 'react';

const Service = ({ service }) => {
    return (
            <div className='service'>
                <img src={service.image} alt={service.Name} />
                <h3>{service.Name}</h3>
                <h6>{service.charges}</h6>
                <div className="buttons">
                    <button type='submit' className='btn01'>{service.book_btn01}</button>
                    <button type='submit' className='btn01'>{service.video_btn02}</button>
                </div>
            </div>
    );
};

export default Service;