

export const projectDetails = {
    orbs: {
        id: 'orbs',
        title: 'skill orbs',
        description: {
            text: `This was probably my biggest challenge to date. At first I found a CodePen where someone had simple colored circles moving around an html canvas element.
                    From there I developed the idea to cover these circles in SVG images and have them represent my skill level in certain topics based on their size. More research was
                    done on how to build the physics engine inside the canvas element, including orb-to-orb and orb-to-wall collisions, gravity, and using the mouse as an impulse source.
                    Doing all this was massively fun, but I hadn't cracked a physics textbook in a decade. Skill orbs was then incorporated into this React app, and given the ability to dynamically
                    resize through window event listeners and the useEffect hook. After a day or two it could even preserve its aspect ratio. The orb size is first a function of the JSON-like object
                    displayed next to it where size is proportional to a 1-10 skill level, then the orbs are sized as a function of the combined width and height of the canvas. If you want to see Skill orbs in all
                    in its glory, give it a stress test. Play around with window sizing and see if you can break it!       
            `,
            link: '/',
        },
        img: {
            src: 'https://i.imgur.com/S3WoDvZ.png',
            alt: 'the skill orbs project',
        },
        codesnip: 'https://i.imgur.com/smGxlt9.png'
    },
    snips: {
        id: 'snips',
        title: 'reddit snips',
        description: {
            text: `Essentially designed to be a barebones Reddit clone, snips was how I learned how to use the Redux library.
                   For now there's a lot missing, but there's a sleek design and an efficient Redux store that feeds information through the client.
                   Information isn't pulled through the official Reddit API, instead posts, comments, and Subreddit information is harvests from simply appending
                   ".json" to the endpoint in use. There are CORS issues with this, so the app suffers in performance a bit. The HTTP requests are routed through 
                   a CORS-enabled proxy server resulting in a decent increase in initial load time. All said, this project was a great jumping off point into Redux, 
                   Material UI, and advanced HTML configurations for elegant media display--and it's all contained within this very React app.       
            `,
            link: 'snips',
        },
        img: {
            src: 'https://i.imgur.com/YZx7nxH.png',
            alt: 'the reddit snips project',
        },
        codesnip: 'https://i.imgur.com/ApQZOvE.png'
    },
    snake: {
        id: 'snake',
        title: 'snake lists',
        description: {
            text: `With this project I wanted to test my JavaScript ability. At the time, I had no idea how someone would implement the game of snake in a browser, 
                    so it stayed that way. Snakelists was my version of snake where it was designed without research on how it could be done better. I wanted to stay in 
                    the dark and see if I could get a working game that was fun and efficient. I chose a doubly-linked list data structure to represent the snake, creating 
                    a grid system with simple html divs for pixels. The game runs on the setTimeout method, taking directional inputs from the user and refreshing the "pixel" 
                    grid over a decreasing interval. A toggle for the gridlines, a reset, and a play button are used, as well as a functional scoreboard with its own special formula. 
                    You even get a score multiplier for playing without the grid. Its not perfect, especially without real input buffering, but after you get the hang of it, snakelists 
                    feels intuitive and maybe even fun.`,
            link: 'https://sloont.github.io/snakelist/',
        },
        img: {
            src: 'https://i.imgur.com/EHloC4w.png',
            alt: 'the snake lists project',
        },
        codesnip: 'https://i.imgur.com/TXu1DOQ.png'
    },
    schedule: {
        id: 'schedule',
        title: 'schedule generator',
        description: {
            text: `The idea with this project was to create a program that could generate all possible unique schedules given a number of teams and weeks. Some customization 
                    for the teams was added to make it look friendlier. Schedule generator ended up being --and still is-- an ambitious work in progress. Teams can play a home 
                    and away fixture against every other team. Each added set of two teams increases the number of permuations exponentially, and this ended up limiting the number 
                    of teams the generator can handle. Currently schedule generator has a maximum of 8 teams due to the stress of the calculations required. If an odd number of teams 
                    is selected, byes are filled into the schedule. The produced schedules are valid and unique, defaulting to enough gameweeks that each team can play every other team both at home and away.`,
            link: 'https://sloont.github.io/ScheduleGenerator/',
        },
        img: {
            src: 'https://i.imgur.com/SBpeI1T.png',
            alt: 'the schedule generator project',
        },
        codesnip: 'https://i.imgur.com/Te15w9o.png'
    },
    divwatch: {
        id: 'divwatch',
        title: 'divWatch',
        description: {
            text: `When first learning asynchronous JavaScript, you are taught the set timeout function in the form of a stopwatch. I thought it could be interesting to take 
                    this example and instead of using text to display the clock, using html div elements like a digital clock. The JavaScript behind divwatch uses seven div 
                    elements for each digit of the clock and turns them off or on based on the number it is told to display. divwatch has start, stop, and reset functionality, just like your standard stopwatch.`,
            link: 'https://sloont.github.io/DivWatch/',
        },
        img: {
            src: 'https://i.imgur.com/WcGtE2y.png',
            alt: 'the div watch project',
        },
        codesnip: 'https://i.imgur.com/ey0GQIS.png'
    },
    
}

