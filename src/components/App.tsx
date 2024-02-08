import { useState } from "react"
import "./App.scss"

export const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div style={{padding: 32}}>
            <h1>{count}</h1>
            <button onClick={increment}>
                <span>
                    INC
                </span>
            </button>
        </div>
    )
}