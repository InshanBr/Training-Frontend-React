import { useState } from 'react';
import './App.css';

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
        <div style={{ backgroundColor: selectedTheme}} className='App_1'>
            <button onClick={handleClick} className='Button_1'>
                Click Me!
            </button>
        </div>
    )
}

export function Project2() {
    const [selectedTheme,setSelectedTheme] = useState('')
    const list = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    function handleClick() {
        const theme = '#'.concat(
            list[Math.floor(Math.random() * (list.length - 1))],
            list[Math.floor(Math.random() * (list.length - 1))],
            list[Math.floor(Math.random() * (list.length - 1))],
            list[Math.floor(Math.random() * (list.length - 1))],
            list[Math.floor(Math.random() * (list.length - 1))],
            list[Math.floor(Math.random() * (list.length - 1))]
        )
        setSelectedTheme(theme)
    }

    return (
        <div style={{ backgroundColor: selectedTheme}} className='App_2'>
            <h1 className='text'>{selectedTheme}</h1>
            <button onClick={handleClick} className='Button_2'>
                Click Me!
            </button>
        </div>
    )
}

//export default Project1