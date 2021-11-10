import React from 'react';
import Navbar from '../Component/Header/navbar';
// import HomePage from '../Myproject/home/home';
// import Rectangle from '../assets/images/Rectangle3.png';
import TextForm from '../Component/TextForm/TextForm';
import Card from '../Component/News/Card';
import Volunteer from '../Component/Volunteer/Volunteer';
import Footer from '../Component/footer/footer';

const Index = () => {
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
        {
            'title':"Amet dolor",
            'description':'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
            image:'/Rectangle6.png',
            "linkname":"raja njee",
            "href":"www.curriki.org"
        },
        {
            'title':"Lorem ipsum amet",
            'description':'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
            image:'/Rectangle7.png',
            "linkname":"raja njee",
            "href":"www.curriki.org"
        },
        
        {
            'title':"Lorem ipsum amet dolor",
            'description':'Quis viverra ut quam aliquet ipsum, habitasse congue. A vel justo at ultricies egestas. Eu lectus ullamcorper sed massa pharetra...',
            image:'/Rectangle8.png',
            "linkname":"raja njee",
            "href":"www.google.org"
        },

    ]

    const Volunteers=[
        {
            'heading':'Help this is our best appest – discovery',
            'title':'Software engineering expertise',
            'description':'If you’re a mid-level to senior software or devops engineer and can spare half a day per week, we need you!',
            'paragraph':'We need expertise in python, django, javascript, React, Rust, C++, gitops and devops expertis If you’re a mid-level to senior software or devops engineer and can spare half a day per week, we need you ',
        },
    ]

    const Discovery=[
        {
            'heading':'Opertional help',
            'title':'Can you help us write winning grant and funding applications?',
            'description':'Can you help us develop online marketing / advertising with great ROI?',
            'question':' If you have a skill and would like to help, let us know about it!',
        },
    ]
    return (
        <div>    

{/* <HomePage/> */}

<div className="container my-3">
    <TextForm heading="Enter the text to analyze below"/>
    </div>
   

<div className="card-container my-5">
    <Card CardData={data} />
                         
</div>
<div className='volunteer-container'>
    <Volunteer VolunteerData={Volunteers} DiscoveryData={Discovery}/>
</div>
       </div>
    )
}
export default Index