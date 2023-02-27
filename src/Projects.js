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
            <button onClick={handleClick} className='button_1'>
                Click Me!
            </button>
        </div>
    )
}

export function Project2() {
    const [selectedTheme,setSelectedTheme] = useState('#FFFFFF')
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
            <h1>{selectedTheme}</h1>
            <button onClick={handleClick} className='button_2'>
                Click Me!
            </button>
        </div>
    )
}

export function Project3() {
    const quotes = [
        {
          quote:
            "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
          author: " Life"
        },
        {
          quote:
            "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
          author: "John Kenneth Galbraith"
        },
        {
          quote:
            "God save me from my friends. I can protect myself from my enemies.",
          author: "Claude Louis Hector de Villars "
        },
        {
          quote: "The price of anything is the amount of life you exchange for it.",
          author: "David Thoreau"
        },
        {
          quote:
            "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
          author: "Charles Lindbergh"
        },
        {
          quote:
            "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
          author: " Tyne Daly"
        }
      ];



    return(
        <div className='App_3'>
            <div className='container_3'>
                <button className='button_3'>Generate Quote</button>
                <h3 className='text_3'>"{quotes[0].quote}</h3>
                <h5 className='author_3'>{quotes[0].author}</h5>
            </div>
        </div>
    )
}

//export default Project1