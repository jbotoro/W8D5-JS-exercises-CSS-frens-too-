class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    // console.log(this);
    this.printTime();
    this._tick();
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let time = this.hours + ":" + this.minutes + ":" + this.seconds;
    console.log(time);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds++;
    this.printTime();
  }
}

const clock = new Clock();