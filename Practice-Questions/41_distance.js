// Create a function to calculate the distance between two points defined by their x, y coordinates
function calculateDistance(x1,x2,y1,y2){
    const dx = x2-x1;
    const dy = y2-y1;

    const result = Math.sqrt(dx*dx + dy*dy);
    console.log(result);
}
const x1 = 1, y1 = 2;
const x2 = 4, y2 = 6;
calculateDistance(x1,x2,y1,y2);