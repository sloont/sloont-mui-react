import React, { useRef, useEffect, useState } from 'react';
//import './pages.css';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import { Grid, Paper, Typography } from '@material-ui/core';
import _debounce from 'lodash.debounce';
import { checkMouseClick, applyForceWithClick } from '../home/mousePhysics';
import { checkCollision, resolveCollision, adjustPositions } from '../home/physics';

import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';




const useStyles = makeStyles({
    grid: {
        width: '100% !important',
        height: '100% !important',
        marginRight: '1rem'
    },
    gridMobile: {
        width: '100% !important',
        height: '100%',
        marginBottom: '1rem'
    },
    canvas: {
        borderRadius: 4,
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
        background: '#232a2e',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        maxHeight: 'calc(100vh - 5rem)'
    },
    outerGrid: {
        justifyContent: 'center',
        height: '100%'
    },
    outerGridMobile: {
        justifyContent: 'center',
        height: '100%',
        marginBottom: '1rem'
    },
    descriptionGridItem: {
        width: '100%', 
        height: 0, 
        minHeight: 'calc(90% - 1rem)', 
        marginBottom: '1rem'
    },
    descriptionGridItemMobile: {
        width: '100%', 
        height: 0, 
        minHeight: 'calc(90% - 1rem)', 
        marginBottom: '1rem'
    },
    descriptionGrid: {
        height: 0, 
        minHeight: '100%'
    },
    descriptionGridMobile: {
        height: 'calc(100vh - 5rem)',
        
    },
    description: {
        padding: '1rem', 
        textAlign: 'justify', 
        overflow: 'hidden', 
        borderRadius: 4, 
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',  
        paddingBottom: '1rem', 
        paddingTop: '1rem',
        width: '100%', 
        height: '100%',
        
    },
    descriptionMobile: {
        padding: '0', 
        textAlign: 'justify', 
        overflow: 'hidden', 
        borderRadius: 4, 
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',  
        paddingBottom: '1rem', 
        width: '100%', 
        height: '100%',
         
    },
    innerDescription: {
        padding: '0 1rem 1rem 1rem', 
        height: '100%', 
        width: '100%', 
        overflow: 'auto',
        '& p': {
            fontSize: '18px !important',
            letterSpacing: 1.5
        } 
    },
    descriptionHeader: {
        padding : 4,
        
    },
    linksGridItem: {
        width: '100%', 
        height: 0, 
        minHeight: '10%',
    },
    linksGridItemMobile: {
        width: '100%', 
        height: 0, 
        minHeight: 'calc(10% - 1rem)',
        marginBottom: '1rem'
    },
    links: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '2rem', 
        borderRadius: 4, 
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)', 
        width: '100%', 
        height: '100%',
        '& a': {
            textDecoration: 'none',
            color: '#75cff8',
        },
        '& a:hover': {
            color: '#ff905b'
        }
    }

});

const mouse = {
    x: undefined,
    y: undefined,
};

class Orb {
    constructor(xpos, ypos, radius, speed, image, context, canvas) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.speed = speed;
        this.image = image;
        this.context = context;
        this.canvas = canvas;
        //set deltas
        this.dx = 1.5 * this.speed;
        this.dy = 1 * this.speed;
        this.gravity = [0, -0.01];
        
    }
    draw() {
        if (typeof this.image === 'string') {

            this.context.fillStyle = this.image
            this.context.beginPath();
            this.context.strokeStyle = '#1a2125'
            this.context.lineWidth = 2;
            this.context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
            this.context.fill();
            this.context.stroke();
            this.context.closePath();


        } else {

            this.context.save();
            this.context.beginPath();
            this.context.strokeStyle = "white";
            this.context.lineWidth = 5;
            this.context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
            this.context.clip();
            this.context.drawImage(this.image, (this.xpos - this.radius), (this.ypos - this.radius), this.radius *2, this.radius*2);
            this.context.stroke();
            this.context.restore();

        }
        
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
            this.dx *= -0.8;
        }

        else if (this.xpos < this.radius) {
            this.xpos = this.radius;
            this.dx *= -0.8;
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

const About = () => {
    const matches = useMediaQuery('(max-width:480px)');
    let grid, outerGrid, descriptionGrid, linksGridItem, descriptionGridItem, description;
    const ref = useRef();
    const gridItemRef = useRef();
    const classes = useStyles();
    
    if (!matches) {
        grid =  classes.grid;
        outerGrid =  classes.outerGrid;
        descriptionGrid =  classes.descriptionGrid;
        linksGridItem =  classes.linksGridItem;
        descriptionGridItem  =  classes.descriptionGridItem;
        description =  classes.description;
    }
    else {
        grid =  classes.gridMobile;
        outerGrid =  classes.outerGridMobile;
        descriptionGrid =  classes.descriptionGridMobile;
        linksGridItem =  classes.linksGridItemMobile;
        descriptionGridItem  =  classes.descriptionGridItemMobile;
        description =  classes.descriptionMobile;
    }

    const [resized, setResized] = useState(false);
    const image = new Image();
    image.src = 'https://i.imgur.com/8mI7YJ2.jpg';
    const ballPit = [];

    const generateOrbs = (canvas, context, gridItem) => {

        if (ballPit.length < 1 || resized === true) {
            
            //for not spawning balls inside the walls
            const randomNumber = (min, max) => {
                return Math.random() * (max - min) + min;
            }

            let radius = (gridItem.clientHeight + gridItem.clientWidth) / 10
            ballPit.push(new Orb(canvas.width / 2, canvas.height - radius/2, radius , 0, image, context, canvas));

            for (let i = 0; i < 75; i++) {
                const x = 1;
                let skillSize = Math.sqrt(Math.sqrt(Math.sqrt( x * x * x * x * x * x * x * x))) * (gridItem.clientHeight + gridItem.clientWidth) / 150;
                let randomx = randomNumber(skillSize, (canvas.width - skillSize));
                let randomy = randomNumber(skillSize, (canvas.height - skillSize));
                ballPit.push(new Orb(randomx, randomy, skillSize, 1, Math.floor(Math.random() * 2) > 0 ? '#75cff8' : '#ff905b', context, canvas));
                
            }

        }
    }



    useEffect(() => {
        
        const resizer = _debounce((event) => {
            event.stopPropagation();
            if (!matches) {
                setResized(true);
                return resized;
            } 
            if (matches) {
                console.log('Dynamic grid resizing is turned off for mobile. If you\'re in the inspector, refresh the page for canvas resize :D');
            }
        }, 500);
        window.addEventListener('resize', resizer);

        let canvas = ref.current;
        let gridItem = gridItemRef.current;

        let height = gridItem.clientHeight;

        canvas.width = height * gridItem.clientWidth / gridItem.clientHeight;
        canvas.height = height;

        canvas.style.width = `${canvas.width}px`;
        canvas.style.height = `${canvas.height}px`;
        
        let context = canvas.getContext('2d');

        generateOrbs(canvas, context, gridItem);

        const mouseClick = (event) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
            ballPit.forEach(ballA => {
                checkMouseClick(ballA, mouse);
                if (checkMouseClick(ballA, mouse)) {
                    applyForceWithClick(ballA, mouse, gridItem);
                    return;
                }
            });
            
        }
        canvas.addEventListener("mousedown", mouseClick)
            
        let requestId;
        const animate = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
    
            ballPit.forEach(ballA => {
                ballA.update();
    
                ballPit.forEach(ballB => {
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
        <Grid container className={outerGrid}>
            <Grid item ref={gridItemRef} xs={12} sm={4} className={grid}>
                <canvas ref={ref} className={classes.canvas} id="canvas"></canvas>
            </Grid>
            <Grid item container xs={12} sm={6} className={descriptionGrid}>
                
                <Grid item sm={12} className={descriptionGridItem}><Paper className={description}>
                    <div className={classes.innerDescription}><Typography gutterBottom variant='h2' align='center' className={classes.descriptionHeader}>what is <span style={{ color: '#75cff8' }}>sloont</span>?</Typography>
                        <Typography variant='body1'>Well, it's me. At this point, I don't actually know about the name ??? it's old and has stuck around for a long time.</Typography>

                        <br />
                        <Typography variant='body1'>You can call me <span style={{ color: '#ff905b' }}>Colin</span>.</Typography>
                        
                        <br />
                        <Typography variant='body1'>My education is in bio- and physical chemistry, with a minor in writing. I like soccer, hockey, number theory, precious metal refining, video games, and cats. I love learning new things, and if I could go to school forever, I probably would.</Typography>
                        
                        <br />
                        <Typography variant='body1'>The last few years, though, my main focus has been web development. This website, and the projects linked here, are examples of what I create when left to my own devices. and now that I???ve started creating, I???m not sure I know how to stop.</Typography>
                        
                        <br />
                        <Typography variant='body1'>If you're wondering what I'm working on now... a few things. The most notable being an overhaul of the old Schedule Generator project. I'm working on moving the data structure and calculations to a fresh Node.js backend, with authentication so users can store teams and schedules on a Mongo database.</Typography>
                </div></Paper></Grid>
                <Grid item sm={12} className={linksGridItem}><Paper className={classes.links}>
                    <a href='https://github.com/sloont'><GitHubIcon fontSize='large' /></a><a href='mailto:colinabel93@gmail.com?subject=mail from sloont.me'><MailOutlineIcon fontSize='large' /></a></Paper>
                </Grid>
                
            </Grid>
        </Grid>
        
    )
}

export default About;

//img src="