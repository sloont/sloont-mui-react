import React, { useRef, useEffect, useState } from 'react';
//import './pages.css';
import { makeStyles } from '@material-ui/core';
import { Grid, Paper, Typography } from '@material-ui/core';
import _debounce from 'lodash.debounce';
import { checkMouseClick, applyForceWithClickAbout } from '../home/mousePhysics';


const useStyles = makeStyles({
    grid: {
        width: '100% !important',
        height: '100% !important',
        marginRight: '1rem'
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
        this.gravity = [0, -0.05];
    }
    draw() {
        
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
    const ref = useRef();
    const gridItemRef = useRef();
    const classes = useStyles();

    const [resized, setResized] = useState(false);
    const image = new Image();
    image.src = 'https://i.imgur.com/8mI7YJ2.jpg';
    
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

        let height = gridItem.clientHeight;

        canvas.width = height * gridItem.clientWidth / gridItem.clientHeight;
        canvas.height = height;

        canvas.style.width = `${canvas.width}px`;
        canvas.style.height = `${canvas.height}px`;
        
        let context = canvas.getContext('2d');
        let radius = (gridItem.clientHeight + gridItem.clientWidth) / 10
        let orb = new Orb(canvas.width / 2, canvas.height - radius/2, radius , 0, image, context, canvas);

        const mouseClick = (event) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
            console.log(mouse.x, mouse.y);
    
            checkMouseClick(orb, mouse);
            if (checkMouseClick(orb, mouse)) {
                applyForceWithClickAbout(orb, mouse, gridItem);
                return;
            }
            
        }
        canvas.addEventListener("mousedown", mouseClick)
            
        let requestId;
        const animate = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
    
            orb.update();
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
        <Grid container  style={{ justifyContent: "center", height: '100%' }}>
            <Grid item ref={gridItemRef} xs={12} sm={4} className={classes.grid}>
                <canvas ref={ref} className={classes.canvas} id="canvas"></canvas>
            </Grid>
            <Grid item container xs={12} sm={6} style={{ height: 0, minHeight: '100%'}}>
                
                <Grid item sm={12} style={{ width: '100%', height: 0, minHeight: '60%', marginBottom: '1rem' }}><Paper style={{ padding: '2rem', textAlign: 'justify', overflow: 'hidden', borderRadius: 4, boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',  paddingBottom: '2rem', width: '100%', height: '100%' }}>
                    <div style={{  padding: '0 2rem 2rem 2rem', height: '100%', width: '100%', overflow: 'auto'}}><Typography gutterBottom variant='h4' align='center' style={{ padding : 4 }}>what is <span style={{ color: '#75cff8' }}>sloont</span>?</Typography>
                    <Typography>well, it's me. to be honest, i don't really know about the name. it's old and has stuck around for a long time.</Typography>
                    <Typography>i'm <span style={{ color: '#ff905b' }}>colin.</span></Typography>
                    <br />
                    <Typography>i've been many things in life, from college dropout to barista, from unemployed to college graduate. i love learning new things, and if i could go to school forever, i probably would.</Typography>
                    <Typography>i like soccer and hockey, number theory and precious metal refining, video games and cats. basically a whole handful of different things.</Typography>
                    <br />
                    <Typography>my education is in bio- and physical chemistry, but at some point i decided to go against it. i wanted to do other things.</Typography>
                    <Typography>so here i am.</Typography>
                    <br />
                    <Typography>now, web development is the name of the game. for a few years i've been grinding my axe, and in the last six months i hit that magic moment where you don't feel like an impostor any more.</Typography>
                    <Typography>...and i started creating. now i don't know how to stop.</Typography>
                </div></Paper></Grid>
                <Grid item sm={12} style={{ width: '100%', height: 0, minHeight: 'calc(40% - 1rem)', }}><Paper style={{ textAlign: 'justify', overflow: 'auto', padding: '2rem', borderRadius: 4, boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)', width: '100%', height: '100%' }}></Paper></Grid>
                
            </Grid>
        </Grid>
        
    )
}

export default About;

//img src="