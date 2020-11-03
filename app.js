class Timer{
  constructor(durationInput, startButton, pauseButton ){
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    
    //to make sure start runs each time we click the start button we make an event listener here 
    this.startButton.addEventListener('click', this.start())
  }
  start(){
    console.log('Time to start the timer');
  }
}