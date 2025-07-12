// const textDisplay = document.querySelector("#display-text");
// const button = document.querySelector("#button");
// let name = "sweta";
// let myDate = new Date();
// let currentHour = myDate.getHours();
//     console.log(currentHour);
// if(currentHour >= 24 && currentHour <= 12) {
//     textDisplay.innerHTML = "Good morning " + name;
// }else if(currentHour >= 12 && currentHour <=18) {
//     textDisplay.innerHTML = "Good evening " + name;
// }else if(currentHour >= 18 && currentHour <= 24) {
//     textDisplay.innerHTML = "Good night " + name;
// }
//     //Here it we are initialising the count 
//    let currentCount = 1; 
//    //whenever we click the button it will show some changes
//    button.addEventListener('click', (e) => {
//     //whenever we click the button it will print the click statemnent.
//     console.log("clicked");    
//     //This will display button inner counting.
//     button.innerHTML = currentCount;
//     //Here it will increase the count by 1 after printing it.
//     currentCount++;

// })
window.addEventListener('keydown', (event) => {
   
    console.log(event.key);

    switch (event.key) {
        case 'ArrowUp':
            player = 'jump';
            break;
        case 'ArrowRight' :
            player = 'run';
            break;
        case 'ArrowLeft' :
            player = 'sleep';
            break;
        case 'ArrowDown' :
            player = 'sit';
            break;
        case 'a' :
            player = 'idle';
            break;
               default:
            break;
         case 'b' :
            player = 'dizzy';
            break;
         case 'c' :
            player = 'fall';
            break;
        case 'd' :
            player = 'roll';
            break;
        case 'e':
            player = 'bite';
            break;
        case 'f' :
            player = 'gethit';
            break;
    }
})

let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');

let canvas_height = canvas.height = 600;
let canvas_width = canvas.width = 600;

const playerImg = new Image();
playerImg.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

// let source_x = 0;
// let source_y = 0;
let gameFrame = 0;
const staggerFrame = 8;

let player = 'idle';
const spriteAnimation = [];
   
    const animationStates = [
     {
         name : 'idle', //1
        frame : 7,
     }

    ,{
        name : 'jump', //up
        frame : 7,
    }
    
    ,{
        name : 'fall', //c
        frame : 7,
    }
    
    ,{
        name : 'run', //right 
        frame : 9,
    },

    {
        name : 'dizzy', //b
        frame : 11,
    },
    
    {
        name : 'sit', //down
        frame : 5,
    },
    {
        name : 'roll',//d
        frame : 7,
    },
    {
        name : 'bite', //e
        frame : 7,
    },
    {
        name : 'sleep', //left
        frame : 12,
    },
    {
        name : 'gethit', //f
        frame : 4,
    },
    
    
];

animationStates.forEach((states, index) => {
    let frames = {
        loc:[],
    }

    for (let j = 0; j < states.frame; j++) {
        let frameX = j * spriteWidth;
        let frameY = index * spriteHeight;
        frames.loc.push({x: frameX, y: frameY});
    }
    spriteAnimation[states.name] = frames;
});
console.log(animationStates);



//Frames horizontally cover by the dog
// let frame_steps = 7;
//This code here won't work idk why?
// let sx = source_x * spriteWidth;
// let sy = source_y * spriteHeight;


// let x = 0;
// let vwl = 1;
function animate() {
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    let position = Math.floor(gameFrame/staggerFrame) % spriteAnimation[player].loc.length;  
    let source_x = spriteWidth * position;
    let source_y = spriteAnimation[player].loc[position].y;
    //1 Frame at a time transition
    // let sx = source_x * spriteWidth;

    // let sy = source_y * spriteHeight;

    ctx.drawImage(playerImg, source_x, source_y, spriteWidth , spriteHeight , 0 , 0, spriteWidth,spriteWidth);
//     if (gameFrame % staggerFrame === 0) {
//         if (source_x < frame_steps) {
//         source_x++;
//     }else source_x = 0;
// }
    
  
    // console.log('hie');

    gameFrame++
    requestAnimationFrame(animate);
};

animate();


