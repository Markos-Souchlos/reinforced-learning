let matrix = [];

let x = 2;
let y = 1;
const id = "0";

let moves = {
    up: [0.2, -1],
    down: [0.2, 1],
    left: [0.2, -1],
    right: [0.2, 1],
}

const goalx = 9;
const goaly = 6;


function move(x,y,id="0") {
    
    matrix = [];
    
    for (let i=0; i<10; i++) {
        matrix.push([" + + + + + + + + + + "]);
    }

    matrix[10-goaly] = [matrix[10-goaly][0].slice(0,(goalx*2)-1) + `Q` + matrix[10-goaly][0].slice((goalx*2))];
    matrix[10-y] = [matrix[10-y][0].slice(0,(x*2)-1) + `${id}` + matrix[10-y][0].slice((x*2))];
}

function decideMoves() {
    if (moves.right[0] > 0.5 && x<10) {
        x++;
    } else if (moves.left[0] > 0.5 && x>1) {
        x--;
    } else {
        const r = Math.random();
        console.log(`r= ${r}`)
        if (r>0.6666) {
            x<10 && x++;
        } else if (r<0.3333) {
            x>1 && x--;
        }
    }

    if (moves.up[0] > 0.5 && y<10) {
        y++;
    } else if (moves.down[0] > 0.5 && y>1) {
        y--;
    } else {
        const r = Math.random();
        console.log(`r= ${r}`)
        if (r>0.6666) {
            y<10 && y++;
        } else if (r<0.3333) {
            y>1 && y--;
        }
    }

}

move(x,y);
console.log(matrix);


const work = setInterval(() => {
    decideMoves();
    move(x,y)
    console.clear();
    console.log(matrix);
    (x==goalx && y==goaly) && clearInterval(work);
}, 50);





// Usage examples

// reset: "\x1b[0m",
// red: "\x1b[31m",
// green: "\x1b[32m",
// yellow: "\x1b[33m",
// blue: "\x1b[34m",
// magenta: "\x1b[35m",
// cyan: "\x1b[36m",
// white: "\x1b[37m"

// console.log(`\x1b[31m ${id} \x1b[0m`);

