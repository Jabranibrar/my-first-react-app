import React from 'react'
import CardPage from '../../Component/News/Card';
const Contact = () => {
    const data=[
        {
            'title':"Achieving Scalability",
            'description':'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
            image:'/Rectangle3.png',
            "linkname":"raja njee",
            "href":"www.curriki.org"
        },
        {
            'title':"CBA to choose a stack?",
            'description':'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
            image:'/Rectangle4.png',
            "linkname":"raja njee",
            "href":"www.curriki.org"
        },
        
        {
            'title':"Fluid Dynamicist",
            'description':'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
            image:'/Rectangle5.png',
            "linkname":"raja njee",
            "href":"www.curriki.org"
        },
       

    ]

    return (
        <div>
            <CardPage CardData={data}/>
        </div>
    )
}

export default Contact
