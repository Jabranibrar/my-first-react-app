import React from 'react'

export default function Volunteer(props) {
    const {VolunteerData,DiscoveryData}=props;
    console.log(VolunteerData);
    console.log(DiscoveryData);
    return (
        <>
        <div>
            {
                VolunteerData.map((itemData)=> {
                    return (
                    <div className="container">
                        <h4 className='heading'>{itemData.heading}</h4>
                        <p className="para">{itemData.title}</p>
                        <p className="para-2">{itemData.description}</p>
                        <p className="para-3">{itemData.paragraph}</p>
                    </div>
                    );
                })
            }
        </div>
        <div className="container-2">
            {
                DiscoveryData.map((Datadiscover)=> {
                    return (
                        <div className="container">
                        <h4 className='heading'>{Datadiscover.heading}</h4>
                        <p className="para">{Datadiscover.title}</p>
                        <p className="para-2">{Datadiscover.description}</p>
                        <p className="para-3">{Datadiscover.paragraph}</p>
                        </div>
                    );
                })
            }
        </div>
        </>
    )
}


