import { useState } from 'react';
import "./App.css";

export function Project1() {
    const [selectedTheme,setSelectedTheme] = useState('white')
    const themes = ['white','black','blue','yellow']
    const max = themes.length - 2

    function handleClick() {
        const nextThemes = themes.filter((value) => {
            if (value !== selectedTheme) return value
            else return null
        })
        setSelectedTheme(nextThemes[Math.floor(Math.random() * (max - 0 + 1)) + 0])
    }

    return (
        <div style={{ backgroundColor: selectedTheme}} className="App_1">
            <button onClick={handleClick} className="Button_1">
                Click Me!
            </button>
        </div>
    )
}

export function Project2() {
    return(
        <div 
            style={{ backgroundColor: 'blue'}}
            className="App"
        >
            <button>
                Click me
            </button>
        </div>
    )
}

//export default Project1