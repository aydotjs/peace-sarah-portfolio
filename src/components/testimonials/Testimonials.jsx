import './testimonials.scss'
import RightArrow from "../../img/right-arrow.png"

export default function Testimonials() {
const data = [
    {id:1,
    name: "Seyi Owoeye",
    title: "CEO Plain Codes",
    img:  require('../../img/man.svg').default,
    icon: require('../../img/youtube-icon.png'),
    desc:"Peace is an absolutely amazing person fvgvhbsjchbsij jb  sjbjchgn dxnji fdxbhdcj"
},
    {id:2,
    name: "Ayo Owoeye",
    title: "CEO Plain Codes",
    img:  require('../../img/man.svg').default,
    icon: require('../../img/youtube-icon.png'),
    desc:"Peace is an absolutely amazing person fvgvhbsjchbsij jb  sjbjchgn dxnji fdxbhdcj",
    featured: true
},
    {id:3,
    name: "Tony Owoeye",
    title: "CEO Plain Codes",
    img:  require('../../img/man.svg').default,
    icon: require('../../img/youtube-icon.png'),
    desc:"Peace is an absolutely amazing person fvgvhbsjchbsij jb  sjbjchgn dxnji fdxbhdcj"
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
