//*********** Learning this on codes below ***************/
// class Timer{
//   constructor(durationInput, startButton, pauseButton ){
//     this.durationInput = durationInput;
//     this.startButton = startButton;
//     this.pauseButton = pauseButton;

//     //to make sure start runs each time we click the start button we make an event listener here 
//     //this.startButton.addEventListener('click', this.start);
//     this.startButton.addEventListener('click', this.startBind.bind(this))
//   }
//   startBind(){
//     console.log('I am using bind');
//   }
//   start = ()=>{
//    // console.log(this);
//     console.log('Time to start the timer');
//     this.importantMeth();
//   }
//   importantMeth(){
//     console.log('bla');
//   }
// }


// class Timer {
//   constructor(durationInput, startButton, pauseButton, callbacks) {
//     this.durationInput = durationInput;
//     this.startButton = startButton;
//     this.pauseButton = pauseButton;
//     if(callbacks){
//       this.onStart = callbacks.onStart;
//       this.onTick = callbacks.onTick;
//       this.onComplete = callbacks.onComplete;
//     }
//     //to make sure start runs each time we click the start button we make an event listener here 
//     this.startButton.addEventListener('click', this.start);
//     this.pauseButton.addEventListener('click', this.pause);
//   }

//   start = () => {
//     if(this.onStart){
//       this.onStart();
//     }
//     this.tick();
//     this.interval = setInterval(this.tick, 1000);// setInterval run function in interval and save it in timer so we can pause it below-- then we change const timer to this.timer to access it on the pause function 
//     //clearInterval(timer);
//   };
//   pause = () => {
//     clearInterval(this.interval);

//   }
//   tick = () => {
//     //const timeRemaining = parseFloat(this.durationInput.value);
//     //Using get method we can point it faster
//     //const timeRemaining = this.timeRemaining;
//     if (this.timeRemaining <= 0) {
//        this.pause();
//       if(this.onComplete){
//         this.onComplete();
//       }
//     } else {

//       this.timeRemaining = this.timeRemaining - 1;
//       if(this.onTick){
//         this.onTick();
//       }
//     }

//   };
//   //get = instance var maker
//   get timeRemaining() {
//     return parseFloat(this.durationInput.value);
//   }
//   set timeRemaining(time) {
//     this.durationInput.value = time;
//   }
//   //helper methods
//   // getTime() {
//   //   return  parseFloat(this.durationInput.value);
//   // }
//   // setTime(time) {
//   //   this.durationInput.value = time;
//   // }
// }
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const circle = document.querySelector('circle');//get the circle
//get the radius
const perimeter =circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);


//current offset
let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started');
  },
  onTick() {
    // console.log('Timer just ticked down');
    
    circle.setAttribute('stroke-dashoffset', currentOffset);
    currentOffset = currentOffset -1;

  },
  onComplete() {
    console.log('Timer is completed');
  }
});
