import React from 'react'
import {init} from "ityped"
import Peace from "../../img/peace-img.svg"
import {KeyboardArrowDown} from '@material-ui/icons'
import "./intro.scss"
import { useEffect, useRef } from 'react'
export default function Intro() {
    const textRef = useRef()

    useEffect(()=>{
      init(textRef.current, {
          showCursor: true,
          backDelay:1500,
          backSpeed:60,
          strings:['craft','make flowers', 'add beauty to stuffs', 'read', 'love what I do'],
      })
    },[])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src={Peace} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Peacy</h1>
                    <h3> I <span ref={textRef}></span></h3>
                </div>
                <a href='#portfolio'>
                  <KeyboardArrowDown className='arrow-down'/>
                </a>
            </div>
        </div>
    )
}
