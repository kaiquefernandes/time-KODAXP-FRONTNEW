
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Define the points as {x, y}
let start = { x: 50,    y: 20  };
let cp1 =   { x: 230,   y: 30  };
let cp2 =   { x: 200,   y: 50  };
let cp3 =   { x: 180,   y: 80  };
let cp4 =   { x: 210,   y: 20  };
let cp5 =   { x: 150,   y: 80  };
let end =   { x: 250,   y: 100 };

// Cubic Bézier curve
ctx.beginPath();
ctx.moveTo(start.x, start.y);
ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y,cp3.x, cp3.y,cp4.x, cp4.y,cp5.x, cp5.y, end.x, end.y);
ctx.stroke();

// Start and end points
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI);  // Start point
ctx.arc(end.x, end.y, 5, 0, 2 * Math.PI);      // End point
ctx.fill();

// Control points
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI);  // Control point one
ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI);  // Control point two
ctx.fill();