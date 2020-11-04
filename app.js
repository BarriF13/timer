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


class Timer{
  constructor(durationInput, startButton, pauseButton ){
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
   
    //to make sure start runs each time we click the start button we make an event listener here 
    this.startButton.addEventListener('click', this.start);
     }
 
  start = ()=>{
    this.tick();
    const timer =setInterval(this.tick, 1000);// setInterval run function in interval and save it in timer so we can pause it below 
    clearInterval(timer);
  };

  tick=()=>{
    console.log('tick');
  };

}

const durationInput= document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const timer = new Timer(durationInput, startButton, pauseButton);
//timer.start();