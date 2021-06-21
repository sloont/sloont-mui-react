export const checkMouseClick = (ballA, mouse) => {
    const normal = [(mouse.x - ballA.xpos), (mouse.y - ballA.ypos)];
    const magnitude = Math.sqrt((normal[0] * normal[0]) + (normal[1] * normal[1]));
    return magnitude < ballA.radius;
}

export const applyForceWithClick = (ballA, mouse) => {
    let normal = [(mouse.x - ballA.xpos), (mouse.y - ballA.ypos)];
    const magnitude = Math.sqrt((normal[0] * normal[0]) + (normal[1] * normal[1]));
    normal = [(normal[0] / magnitude) , (normal[1] / magnitude)];

    const relativeVelocity = [ballA.dx, ballA.dy];
    const velocityOnNormal = (relativeVelocity[0] * normal[0]) + (relativeVelocity[1] * normal[1]);

    let j =  40 + velocityOnNormal;
    j /= (1 / ballA.radius);

    const impulse = [(j * normal[0]), (j * normal[1])];

    ballA.dx -= (1/ballA.radius) * impulse[0];
    ballA.dy -= (1/ballA.radius) * impulse[1];
    console.log("Magnitude: " + magnitude + " < " + ballA.radius + " (radius)")
    console.log("New Velocity: " + [ballA.dx, ballA.dy])
}