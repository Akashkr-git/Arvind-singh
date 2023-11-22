import React from 'react';
import Services from "./Services";
import Service from "./Service";
import "./CSS/services.css";

const Service_List = () => {
    return (
        <div className="body2">
            <div className="list_component">
                <h2>Services</h2>
                <div className='service_list'>
                    {Services.map((service) => (
                        <Service key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Service_List;