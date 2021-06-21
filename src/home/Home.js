import React, { useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { checkCollision, resolveCollision, adjustPositions } from './physics';
import { checkMouseClick, applyForceWithClick } from './mousePhysics';
import { generateOrbInformation, orbInformation } from './orbInformation';
import SVGS from './SVGS';

const useStyles = makeStyles({
    canvas: {
        
        margin: '3rem',
        borderRadius: 4,
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
        background: '#232a2e',
        width: 1000,
        height: 700,
        
    }
});

const getPixelRatio = context => {
        var backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1;
        
        return (window.devicePixelRatio || 1) / backingStore;
};

const Home = () => {

    const classes = useStyles();
    let ref = useRef();

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
    const orbCollection = [];

    useEffect(() => {

        let canvas = ref.current;
        let context = canvas.getContext('2d');
        let backgroundCTX = canvas.getContext('2d');

        let ratio = getPixelRatio(context);
        let width = getComputedStyle(canvas)
            .getPropertyValue('width')
            .slice(0, -2);
        let height = getComputedStyle(canvas)
            .getPropertyValue('height')
            .slice(0, -2);
         
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        generateOrbInformation();
        if (orbCollection.length < 1) {

            //for not spawning balls inside the walls
            const randomNumber = (min, max) => {
                return Math.random() * (max - min) + min;
            }

            const orbIds = Object.keys(orbInformation);

            for (let i = 0; i < orbIds.length; i++) {
                const x = orbInformation[orbIds[i]].skill;
                let skillSize = Math.sqrt(Math.sqrt(Math.sqrt( x * x * x * x * x * x * x * x))) * 10; //this is x ^ ( 4/3 ) * 10
                let randomx = randomNumber(skillSize, (canvas.width - skillSize));
                let randomy = randomNumber(skillSize, (canvas.height - skillSize));
                orbCollection.push(new Orb(randomx, randomy, skillSize, 1, orbInformation[orbIds[i]].image, context, backgroundCTX, canvas));
                
            }

        }
        canvas.addEventListener("mousedown", (event) => {
            mouse.x = event.x - 80;
            mouse.y = event.y - 144;
            orbCollection.forEach(ballA => {
                checkMouseClick(ballA, mouse);
                if (checkMouseClick(ballA, mouse)) {
                    applyForceWithClick(ballA, mouse);
                    return;
                }
            })
            
        });
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
        };
    });

    return (
        <>
            <canvas ref={ref} className={classes.canvas} id="canvas"></canvas>
            <SVGS />
        </>
    )
}

export default Home;