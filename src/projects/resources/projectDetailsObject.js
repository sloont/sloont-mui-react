

const projectDetails = {
    snips: {
        id: 'snips',
        title: 'reddit snips',
        description: {
            text: 'JavaScript',
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
            text: 'The idea with this project was to create a program that could generate all possible unique schedules given a number of teams and weeks. Some customization for the teams was added to make it look friendlier. Schedule generator ended up being --and still is-- an ambitious work in progress. Teams can play a home and away fixture against every other team. Each added set of two teams increases the number of permuations exponentially, and this ended up limiting the number of teams the generator can handle. Currently schedule generator has a maximum of 8 teams due to the stress of the calculations required. If an odd number of teams is selected, byes are filled into the schedule. The produced schedules are valid and unique, defaulting to enough gameweeks that each team can play every other team both at home and away.',
            link: 'https://sloont.github.io/snakelist',
        },
        img: {
            src: 'https://i.imgur.com/xOXPA7l.png',
            alt: 'the snake lists project',
        },
        codesnip: 'https://i.imgur.com/k53yhSC.png'
    },
    schedule: {
        id: 'schedule',
        title: 'schedule generator',
        description: {
            text: 'The idea with this project was to create a program that could generate all possible unique schedules given a number of teams and weeks. Some customization for the teams was added to make it look friendlier. Schedule generator ended up being --and still is-- an ambitious work in progress. Teams can play a home and away fixture against every other team. Each added set of two teams increases the number of permuations exponentially, and this ended up limiting the number of teams the generator can handle. Currently schedule generator has a maximum of 8 teams due to the stress of the calculations required. If an odd number of teams is selected, byes are filled into the schedule. The produced schedules are valid and unique, defaulting to enough gameweeks that each team can play every other team both at home and away.',
            link: 'https://sloont.github.io/schedule-generator',
        },
        img: {
            src: 'https://i.imgur.com/krcX45q.png',
            alt: 'the schedule generator project',
        },
        codesnip: 'https://i.imgur.com/Be4g1O0.png'
    },
    divwatch: {
        id: 'divwatch',
        title: 'divWatch',
        description: {
            text: 'When first learning asynchronous JavaScript, you are taught the set timeout function in the form of a stopwatch. I thought it could be interesting to take this example and instead of using text to display the clock, using html div elements like a digital clock. The JavaScript behind divwatch uses seven div elements for each digit of the clock and turns them off or on based on the number it is told to display. divwatch has start, stop, and reset functionality, just like your standard stopwatch.',
            link: 'https://sloont.github.io/divWatch',
        },
        img: {
            src: 'https://i.imgur.com/WcGtE2y.png',
            alt: 'the div watch project',
        },
        codesnip: 'https://i.imgur.com/vc0d4cx.png'
    },
    
}

export default projectDetails;