import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { checkCollision, resolveCollision, adjustPositions } from './physics';
import { checkMouseClick, applyForceWithClick } from './mousePhysics';
import { generateOrbInformation, orbInformation } from './orbInformation';
import SVGS from './SVGS';
import { Grid } from '@material-ui/core';
import PlainText from './PlainText';
import _debounce from 'lodash.debounce';

const useStyles = makeStyles({
    grid: {
        // margin: 0,
        // paddingRight: '1rem',
        width: '100% !important',
        height: '100% !important',

        
    },

    canvas: {
        borderRadius: 4,
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
        background: '#232a2e',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        maxHeight: 'calc(100vh - 8rem)'
        
    }
});

////////////////////////////////////////////////
//Lets make a mouse object and a mousemove event listener to track it

const mouse = {
    x: undefined,
    y: undefined,
};

/////////////////////////////////////////////////////

class Orb {
    constructor(xpos, ypos, radius, speed, image, context, backgroundCTX, canvas) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.speed = speed;
        this.image = image;
        this.context = context;
        this.backgroundCTX = backgroundCTX;
        this.canvas = canvas;
        //set deltas
        this.dx = 1.5 * this.speed;
        this.dy = 1 * this.speed;
        this.gravity = [0, -0.05];
    }
    draw() {
        this.backgroundCTX.beginPath();
        this.backgroundCTX.fillStyle = "white";
        this.backgroundCTX.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        this.backgroundCTX.fill();
        this.backgroundCTX.closePath();

        this.context.save();
        this.context.beginPath();
        /*test*/this.context.strokeStyle = "white";
        /*test*/this.context.lineWidth = 5;
        this.context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        this.context.clip();
        this.context.drawImage(this.image, (this.xpos - this.radius), (this.ypos - this.radius), this.radius *2, this.radius*2);
        /*test*/this.context.stroke();
        this.context.restore();
    }
    update() {
        const xBound = this.canvas.width;
        const yBound = this.canvas.height;

        this.xpos += this.dx;
        this.ypos += this.dy;

        this.dx += this.gravity[0];
        this.dy -= this.gravity[1];

        if (this.xpos > xBound - this.radius) {
            this.xpos = xBound - this.radius;
            this.dx *= -1;
        }

        else if (this.xpos < this.radius) {
            this.xpos = this.radius;
            this.dx *= -1;
        }

        if (this.ypos > yBound - this.radius) {
            this.ypos = yBound - this.radius;
            this.dy *= -0.7;
        }

        else if (this.ypos < this.radius) {
            this.ypos = this.radius + 1
            this.dy *= -0.7;
        }

        

        this.draw();
    }
            
}


///////////////////////////////////////////////////////

const Home = () => {
    
    const classes = useStyles();
    let ref = useRef();
    let gridItemRef = useRef();



    let orbCollection = [];
    const [resized, setResized] = useState(false);


    const generateOrbs = (canvas, context, backgroundCTX, gridItem) => {

        if (orbCollection.length < 1 || resized === true) {
            
            //for not spawning balls inside the walls
            const randomNumber = (min, max) => {
                return Math.random() * (max - min) + min;
            }

            const orbIds = Object.keys(orbInformation);

            for (let i = 0; i < orbIds.length; i++) {
                const x = orbInformation[orbIds[i]].skill;
                let skillSize = Math.sqrt(Math.sqrt(Math.sqrt( x * x * x * x * x * x * x * x))) * 20 / ( 1 + 1 / (gridItem.clientWidth / gridItem.clientHeight))
                let randomx = randomNumber(skillSize, (canvas.width - skillSize));
                let randomy = randomNumber(skillSize, (canvas.height - skillSize));
                orbCollection.push(new Orb(randomx, randomy, skillSize, 1, orbInformation[orbIds[i]].image, context, backgroundCTX, canvas));
                
            }

        }
    }

    useEffect(() => {

        const resizer = _debounce((event) => {
            event.stopPropagation();
            setResized(true);
            return resized;
        }, 500);
        window.addEventListener('resize', resizer);

        let canvas = ref.current;
        let gridItem = gridItemRef.current;


        

        

        console.log(gridItem.clientWidth);
        console.log(gridItem.clientHeight);

        // canvas.style.maxHeight = 'calc(100vh - 8rem)';
        
        // let width = getComputedStyle(canvas)
        //     .getPropertyValue('width')
        //     .slice(0, -2);
        // let height = getComputedStyle(canvas)
        //     .getPropertyValue('height')
        //     .slice(0, -2);
        
        let height = gridItem.clientHeight;
        // let width = gridItem.clientHeight;
        
        // canvas.width = width;
        // canvas.height = height;
        canvas.width = height * gridItem.clientWidth / gridItem.clientHeight;
        canvas.height = height;

        canvas.style.width = `${canvas.width}px`;
        canvas.style.height = `${canvas.height}px`;

        
        
        let context = canvas.getContext('2d');
        let backgroundCTX = canvas.getContext('2d');
        

        generateOrbInformation();
        generateOrbs(canvas, context, backgroundCTX, gridItem);

        const mouseClick = (event) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
            console.log(mouse.x, mouse.y);
            orbCollection.forEach(ballA => {
                checkMouseClick(ballA, mouse);
                if (checkMouseClick(ballA, mouse)) {
                    applyForceWithClick(ballA, mouse);
                    return;
                }
            });
        }
        canvas.addEventListener("mousedown", mouseClick)
            
        let requestId;
        const animate = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
    
            orbCollection.forEach(ballA => {
                ballA.update();
    
                orbCollection.forEach(ballB => {
                    if (ballA !== ballB) {
                        const collision = checkCollision(ballA, ballB);
                        if (collision[0]) {
                            adjustPositions(ballA, ballB, collision[1]);
                            resolveCollision(ballA, ballB);
                        }
                    }
                });
            });
            requestId = requestAnimationFrame(animate);
        }
    
        animate();
    
        return () => {
            cancelAnimationFrame(requestId);
            setResized(false);
            window.removeEventListener('resize', resizer);
            canvas.removeEventListener('mousedown', mouseClick);
        };
    });

    return (
        <>
            <Grid container 
                // spacing={3}
                direction="row"
                justify="center"
                className={classes.grid}
            >
                <Grid ref={gridItemRef} item xs={12} sm={9} md={9}><canvas ref={ref} className={classes.canvas} id="canvas"></canvas></Grid>
                <Grid item xs={12} sm={3} md={3}><PlainText /></Grid>
                
            </Grid>
            <SVGS />
        </>
    )
}

export default Home;