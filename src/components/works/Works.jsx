import React from 'react'
import {useState} from 'react'
import './works.scss'
export default function Works() {
    const [currentSlide,setCurentSlider] = useState(0)
    const data = [
        {
            id:"1",
            title: "Project 1",
            icon:require('../../img/flower-card.jpg'),
            desc:"Flowers",
            img: require('../../img/flower-card.jpg')
        },
        {
            id:"2",
            title: "Project 2",
            icon:require('../../img/flower-card.jpg'),
            desc:"Cards",
            img:require('../../img/flower-card.jpg')
        },
        {
            id:"3",
            icon:require('../../img/flower-card.jpg'),
            title: "Project 3",
            desc:"Gift box",
            img: require('../../img/flower-card.jpg')
        },
    ]
    const handleClick =(way)=>{
        way==="left" ? setCurentSlider(currentSlide > 0 ? currentSlide-1 : 2) : 
        setCurentSlider(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }
    return (
        <div className='works' id='works'>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        
        
        {data.map(d=>(

          <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                            <div className="imgContainer">
                            <img src={d.icon} alt="" />
                            </div>
                            <h2>{d.title}</h2>
                            <p>
                               {d.desc}
                            </p>
                            <span>Project</span>
                        </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                     
                </div>)) }
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Antu_arrow-right.svg" alt="" className="arrow left" onClick={()=>handleClick('left')}/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Antu_arrow-right.svg" alt="" className="arrow right" onClick={()=>handleClick()} />
         
        </div>
    )
}
