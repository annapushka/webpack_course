import { useState } from "react"
import classes from "./App.module.scss"
import { Link } from "react-router-dom"
import { About } from "@/pages/About"

export const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div style={{padding: 32}}>
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