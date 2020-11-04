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


class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    //to make sure start runs each time we click the start button we make an event listener here 
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);// setInterval run function in interval and save it in timer so we can pause it below-- then we change const timer to this.timer to access it on the pause function 
    //clearInterval(timer);
  };
  pause = () => {
    clearInterval(this.interval);
  }
  tick = () => {
    const timeRemaining = parseFloat(this.durationInput.value);
    this.durationInput.value = timeRemaining - 1;
  };

}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const timer = new Timer(durationInput, startButton, pauseButton);
//timer.start();