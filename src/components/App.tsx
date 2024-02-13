import { useState } from "react"
import classes from "./App.module.scss"
import { Link } from "react-router-dom"
import { About } from "@/pages/About"
import IconPng from "@/assets/iconmonstr-heart-lined-240.png"
import IconJpg from "@/assets/iconmonstr-heart-lined-240.jpg"
import IconSvg from "@/assets/iconmonstr-heart-lined.svg"

export const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div style={{padding: 32}} data-testid={'App.DataTestId'}>
            <h1>Platform: {__PLATFORM__}</h1>
            {__PLATFORM__ === 'mobile' ? 'mobile' : 'desktop'}
            <br/>
            <h1>Environment: {__ENV__}</h1>
            {__ENV__ === 'production' ? 'production' : 'development'}
            <div>
                <img width={100} src={IconPng} alt="icon"/>
                <img width={100} src={IconJpg} alt="icon"/>
                <IconSvg width={100} height={100}/>
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1>{count}</h1>
            <button 
                onClick={increment}
                className={classes.button}
            >
                <span>
                    INC
                </span>
            </button>
            <About />
        </div>
    )
}