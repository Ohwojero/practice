
import { GiCrownedExplosion } from "react-icons/gi";
import { GiGoldShell } from "react-icons/gi";


const trainer1 = require('./images/trainer1.avif')
const trainer7 = require('./images/trainer7.avif')
const trainer8 = require ('./images/trainer8.avif')
const trainer9 = require('./images/trainer9.avif')
const trainer5 = require('./images/trainer5.avif')
export const links =[
    {
        name:"Home",
        path:'/'
    },

    {
        name:"About",
        path:'/about'
    },

    {
        name:"Gallery",
        path:'/gallery'
    },
    {
        name:"Plans",
        path:'/plans'
    },
    {
        name:"Trainers",
        path:'/trainers'
    },
   
    {
        name:"Contact",
        path:'/contact'
    },
]




export const programs = [

    {
        id:1,
        icon:<GiCrownedExplosion />,
        title:" Program 1",
        info:"Learning react and building Projects",
        path:"/programs/111"
    },

    {
        id:2,
        icon:<GiCrownedExplosion />,
        title:"program 2",
        info:"Learning react and building Projects",
        path:"/programs/222"
    },

    {
        id:3,
        icon:<GiCrownedExplosion />,
        title:"program 3",
        info:"Learning react and building Projects",
        path:"/programs/333"
    },

    {
        id:4,
        icon:<GiCrownedExplosion />,
        title:"Program 4",
        info:"Learning react and building Projects",
        path:"/programs/444"
    }


]

export const values = [
    {
        id:1,
        icon:<GiGoldShell />,
        title:"Value One",
        desc:"Please check our values and our Qualities"
    },

    {
        id:2,
        icon:<GiGoldShell />,
        title:"Value Two",
        desc:"Please check our values and our Qualities"
    },

    {
        id:3,
        icon:<GiGoldShell />,
        title:"Value Three",
        desc:"Please check our values and our Qualities"
    },

    {
        id:4,
        icon:<GiGoldShell />,
        title:"Value Four",
        desc:"Please check our values and our Qualities"
    },
]

export const faqs = [
    {
        id:1,
        question:"How often Should i Exercise",
        answer:"A question in a list of questions and answers intended to help people understand a particular subject"
        
    },

   
    {
        id:2,
        question:"How often Should i Exercise",
        answer:"A question in a list of questions and answers intended to help people understand a particular subject"
        
    },
    {
        id:3,
        question:"How often Should i Exercise",
        answer:"A question in a list of questions and answers intended to help people understand a particular subject"
        
    },
    {
        id:4,
        question:"How often Should i Exercise",
        answer:"A question in a list of questions and answers intended to help people understand a particular subject"
        
    },
    {
        id:5,
        question:"How often Should i Exercise",
        answer:"A question in a list of questions and answers intended to help people understand a particular subject"
        
    },
    {
        id:6,
        question:"How often Should i Exercise",
        answer:"A question in a list of questions and answers intended to help people understand a particular subject"
        
    },
]

export const testimonials = [
    {
        id:1,
        name:"James",
        quote:"Keep Building it will definitely get better with time",
        jop:"Student",
        avatar: require("./images/image3.avif")

    },

    {
        id:2,
        name:"Godstime",
        quote:"Learn React and flow up",
        jop:"Student",
        avatar: require("./images/image4.avif")

    },


    {
        id:3,
        name:"Nelson",
        quote:"Keep your coding skill up to date with react",
        jop:"Student",
        avatar: require("./images/image5.avif")

    },

    {
        id:4,
        name:"Wesley",
        quote:"Keep learning and never try to give up",
        jop:"Student",
        avatar: require("./images/image6.avif")

    },

    {
        id:5,
        name:"James",
        quote:"I seriously want to advance in the tect hub",
        jop:"Student",
        avatar: require("./images/image7.avif")

    },

    {
        id:1,
        name:"Racheal",
        quote:"Always thankGod for his Goodness and mercy",
        jop:"Student",
        avatar: require("./images/image8.avif")

    },

]

export const plant = [
    {
        id:1,
        name:'Silver Package',
        desc:'This package is prefect for Beginners who need constant help',
        price:29.99,
        features:[
            {feature:'first Features', available: true},
            {feature:'second Features', available: true},
            {feature:'Third Features', available: true},
            {feature:'Fourth Features', available: true},
            {feature:'Fifth Features', available: true},
            {feature:'Sixth Features', available: true},
            {feature:'Seventh Features', available: false},
            {feature:'Eighth Features', available: false},
            {feature:'ninth Features', available: false},
            {feature:'Tenth Features', available: false},
            {feature:'Eleventh Features', available: false},
        ],
    },

    
    {
        id:2,
        name:'Golden Package',
        desc:'This package is prefect for Beginners who need constant help',
        price:49.99,
        features:[
            {feature:'first Features', available: true},
            {feature:'second Features', available: true},
            {feature:'Third Features', available: true},
            {feature:'Fourth Features', available: true},
            {feature:'Fifth Features plus', available: true},
            {feature:'Sixth Features', available: true},
            {feature:'Seventh Features plus', available: false},
            {feature:'Eighth Features', available: false},
            {feature:'ninth Features', available: false},
            {feature:'Tenth Features', available: false},
            {feature:'Eleventh Features', available: false}
        ],
    },


    {
        id:3,
        name:'Platinum package Package',
        desc:'This package is prefect for Beginners who need constant help',
        price:89.99,
        features:[
            {feature:'first Features', available: true},
            {feature:'second Features', available: true},
            {feature:'Third Features', available: true},
            {feature:'Fourth Features', available: true},
            {feature:'Fifth Features plus', available: true},
            {feature:'Sixth Features', available: true},
            {feature:'Seventh Features plus', available: true},
            {feature:'Eighth Features', available: true},
            {feature:'ninth Features', available: true},
            {feature:'Tenth Features', available: true},
            {feature:'Eleventh Features', available: true}
        ]
    }


]

export const trainers = [
    {
        id:1,
        image: trainer1,
        name:'Mr Philips',
        social:[
            'https://instagram.com',
            'https://twitter.com',
            'https://facebook.com',
            'https://linkedin.com/'
        ]
    },


    {
        id:2,
        image: trainer7,
        name:'Mr Godwin',
        social:[
            'https://instagram.com',
            'https://twitter.com',
            'https://facebook.com',
            'https://linkedin.com/'
        ]
    },




    {
        id:3,
        image: trainer8,
        name:'Mr Wesley',
        social:[
            'https://instagram.com',
            'https://twitter.com',
            'https://facebook.com',
            'https://linkedin.com/'
        ]
    },


    {
        id:4,
        image: trainer9,
        name:'Mr Godstime',
        social:[
            'https://instagram.com',
            'https://twitter.com',
            'https://facebook.com',
            'https://linkedin.com/'
        ]
    },
    {
        id:5,
        image: trainer9,
        name:'Mr George',
        social:[
            'https://instagram.com',
            'https://twitter.com',
            'https://facebook.com',
            'https://linkedin.com/'
        ]
    },
    {
        id:6,
        image: trainer5,
        name:'Mr Samy',
        social:[
            'https://instagram.com',
            'https://twitter.com',
            'https://facebook.com',
            'https://linkedin.com/'
        ]
    }  
]