// Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting

function areCirclesIntersecting(circle1, circle2) {
    const distance = Math.sqrt(Math.pow(circle2.x - circle1.x, 2) + Math.pow(circle2.y - circle1.y, 2));
    return distance < (circle1.radius + circle2.radius);
}

let circle1 = { x: 0, y: 0, radius: 5 };
let circle2 = { x: 3, y: 4, radius: 5 };
console.log(areCirclesIntersecting(circle1, circle2));  
