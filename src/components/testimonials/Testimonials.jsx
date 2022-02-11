import './testimonials.scss'
import RightArrow from "../../img/right-arrow.png"

export default function Testimonials() {
const data = [
    {id:1,
    name: "Seyi Owoeye",
    title: "CEO Plain Codes",
    img:  require('../../img/man.svg').default,
    icon: require('../../img/youtube-icon.png'),
    desc:"Peace is an absolutely amazing person "
},
    {id:2,
    name: "Comfort",
    title: "CEO Comfort Labs",
    img:  require('../../img/man.svg').default,
    icon: require('../../img/youtube-icon.png'),
    desc:"Peace is the best at what she does",
    featured: true
},
    {id:3,
    name: "Olive",
    title: "CEO Olive Labs",
    img:  require('../../img/man.svg').default,
    icon: require('../../img/youtube-icon.png'),
    desc:"Her customer service is the best around"
},
]


    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonial</h1>
            <div className="container">
            {data.map(d=>(

           
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src={RightArrow} className='left' alt="" />
                        <img src={d.img} className='user' alt="" />
                        <img src={d.icon} className='right' alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                 ))}
            </div>
        </div>
    )
}
