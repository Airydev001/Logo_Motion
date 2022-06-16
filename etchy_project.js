const btn = document.querySelector(".btnBack");
const ul=document.querySelector(".Navbar");
btn.addEventListener("click",function(){
ul.classList.toggle("Navbar");
ul.style.opacity="1";
})

const parenting=document.querySelectorAll(".parenting");
const meters = document.querySelectorAll(".meter");
/*parenting.forEach( all=>{
    
    
    
    all.addEventListener("animationend",pu
);
})*/

function Jesus(){
    //Selecting the node list using the array property
    meters[0].style.animationName="blues";
    meters[1].style.animationName=" greens";
    meters[2].style.animationName="reds";
    meters[3].style.animationName="yellows";
}
window.addEventListener(
    "click",Jesus
);
window.addEventListener("animationend",function(){
    meters[0].style.animationName="none";
    meters[1].style.animationName="none";
    meters[2].style.animationName="none";
    meters[3].style.animationName="none";
});

/**ETCHY-A-Sketch */
// Select the elements on the page - canvas, shake button
const  canvas = document.querySelector("#etch-a-sketch");
const MOVE_AMOUNT = 10;//WES JESUS love to set to constant variable to be used anytime
//Select the button 
const shakeButton=document.querySelector(".shake");
console.log(canvas);
//canvas is drawing where we want to draw on is a context;
// set up our canvas for drawing
const ctx=canvas.getContext('2d');//we can have 2D or 3D.
ctx.lineJoin="square";
ctx.lineCap="square";
ctx.wordspacing="10px";
//These above is used to ensure smooth drawing on the canvas
ctx.lineWidth=50;//The default value is 10 actually
ctx.beginPath()//means you want to began drawing;
let  hue = 0; //Setting up the background color for the hue browser color;

/*Select a width and height*/
/*const width = canvas.width;//Selecting the width from the specify Html canvas
const height = canvas.height; let me use destructuring below*/
const {width,height}=canvas;

console.log(width,height);
//WE WANT THE STROKELINES TO BE RANDOMLY PLACED ON THE CANVA USING MATH.FLOOR(MATH.RANDOM() * 100);
let x = Math.floor(Math.random()* width);
let y = Math.floor(Math.random()*height);
//Replacing the above x wherever there is width;

//ctx.moveTo(x,y);//200px from the left and 200px from the top.

//ctx.lineTo(x,y);

//ctx.stroke();

ctx.strokeStyle = `hsl(100, 100%, 50%)`;
//let u =0;
//let text = ["a","b","lorem","ipsum","christ","ember","love"];
// write a draw function
function draw({key}){//Passing an object in the options using destructuring
    console.log(key);
    //Start the path;

    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x,y);
    //ctx.arc(300,300,50,0,2*Math.PI,false);
    ctx.stroke();
    //Set the stroke style
    //hue +=1;
    //u+=1
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;//Instead of hard coding 
    //ctx.fillText(`${text[u]}`,123,340);
    //x -= MOVE_AMOUNT;//Note Wes Bos does not like hard coding
    //y -= MOVE_AMOUNT;
    switch(key){
     case  "ArrowUp":
         y -= MOVE_AMOUNT;//It will be decreasing the actual Amount by 10 
         break;
     case "ArrowDown":
         y+=MOVE_AMOUNT;//It will be increasing the actual Amount by 10
         break;
     case "ArrowRight":
         x += MOVE_AMOUNT;
         
         break;
     case "ArrowLeft":
         x-= MOVE_AMOUNT;
         break;
         default:
             break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}
// we can make use of object destructuring using the curly brackets.

// write a handler for the keys
//We add e to prevent default
function handlerKey(e){
    if(e.key.includes("Arrow")){
    e.preventDefault();
    console.log("HANDLING KEY")
    //console.log(e.key);
    draw({key:e.key});//We call draw function and passed in an object; 
    }
}
window.addEventListener("keydown",handlerKey);//It will activate the keyboard when will press any key
// clear or shake function

function clearcanvas(){
  canvas.classList.add('shake');

  ctx.clearRect(0, 0, width,height);

  canvas.addEventListener("animationend",function(){
      console.log("Done the shake!");
      canvas.classList.remove('shake');
  },{once:true});
  

}
//Add an event listener to the shake button;
shakeButton.addEventListener("click",clearcanvas);
// listen for arrow keys