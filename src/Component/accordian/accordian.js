import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './accordian.css';

function Userdata(props) {
    const {data}= props;
    console.log(data)
    return (

          <Accordion defaultActiveKey="0" flush>
              {
                  data.map((uniquedata,key)=> {
                      return (
                        <Accordion.Item eventKey={key}>
                        <Accordion.Header className="header-body">{uniquedata.title}</Accordion.Header>
                        <Accordion.Body className="header-body">
                            {uniquedata.description}
                        </Accordion.Body>
                              </Accordion.Item>
                      );
                  })
              }
         </Accordion>
    );
    };
    export default Userdata;