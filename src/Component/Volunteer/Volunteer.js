import React, {useState,useEffect} from 'react'

export default function Volunteer(props) {
    const {VolunteerData,DiscoveryData}=props;
    console.log(VolunteerData);
    console.log(DiscoveryData);

    
    const [Datadiscover, setDatadiscover] = useState('This value is changed by useEffect');

//UseEffect...
    // useEffect( ()=>{
  
    //  }, [] )
    const [state, setstate] = useState(false)
    //  alert(Datadiscover);
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
            {/* //UseState function */}
             <button className="btn btn-primary mx-2" onClick= { () => setstate(true)}>Add one line</button>
         </div>
        <div className="container-2">
            {
                DiscoveryData.map((Datadiscover)=> {
                    return (
                        <div className="container">
                        <h4 className='heading'>{Datadiscover.heading}</h4>
                        <p className="para">{Datadiscover.title}</p>
                        {
                            state?(  <p className="para-2">{Datadiscover.description}</p>):(null)
                        }
                      

                        <p className="para-3">{Datadiscover.paragraph}</p>
                        </div>
                    );
                })
            }
        </div>
        </>
    )
}


