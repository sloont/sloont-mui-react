export const checkCollision = (ballA, ballB) => {
    const rSum = ballA.radius + ballB.radius;
    const dx = ballB.xpos - ballA.xpos;
    const dy = ballB.ypos - ballA.ypos;

    return [(rSum * rSum) > (dx * dx) + (dy * dy), rSum - Math.sqrt((dx * dx) + (dy * dy))];
}
//making vector representations here

export const resolveCollision = (ballA, ballB) => {
    const relVelocity = [(ballB.dx - ballA.dx), (ballB.dy - ballA.dy)];
    let normal = [(ballB.xpos - ballA.xpos), (ballB.ypos - ballA.ypos)];
    const magnitude = Math.sqrt((normal[0] * normal[0] + normal[1] * normal[1]));

    //a bit confused why we rewrite the normal here
    normal = [(normal[0] / magnitude), (normal[1] / magnitude)];

    const velocityOnNormal = (relVelocity[0] * normal[0]) + (relVelocity[1] * normal[1]);

    if (velocityOnNormal > 0) return;

    const bounce = 0.7;
    let j = -1 * (1 + bounce) * velocityOnNormal;
    j /= (1 / ballA.radius) + (1 / ballB.radius);

    const impulse = [(j * normal[0]), (j * normal[1])];

    ballA.dx -= (1 / ballA.radius) * impulse[0];
    ballB.dx += (1 / ballB.radius) * impulse[0];

    ballA.dy -= (1 / ballA.radius) * impulse[1];
    ballB.dy += (1 / ballB.radius) * impulse[1];
}

export const adjustPositions = (ballA, ballB, depth) => {
    const percent = 0.2;
    const slope = 0.01;

    let correction = (Math.max(depth - slope, 0) / (1 / ballA.radius) + (1 / ballB.radius)) * percent;

    let normal = [(ballB.xpos - ballA.xpos), (ballB.ypos - ballA.ypos)];
    const magnitude = Math.sqrt((normal[0] * normal[0]) + (normal[1] * normal[1]));

    normal = [(normal[0] / magnitude), (normal[1] / magnitude)];
    correction = [(correction * normal[0]), (correction * normal[1])];

    ballA.xpos -= (1 / ballA.radius) * correction[0];
    ballB.xpos += (1 / ballB.radius) * correction[0];

    ballA.ypos -= (1 / ballA.radius) * correction[1];
    ballB.ypos += (1 / ballB.radius) * correction[1];

}