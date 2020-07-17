class Timer {
  #days;
  #hours;
  #minutes;
  #seconds;
  #withZeros;
  #daysClassName;
  #hoursClassName;
  #minutesClassName;
  #secondsClassName;
  #startTime;
  #intervalId;
  #timerStep;
  #daysElem;
  #hoursElem;
  #minutesElem;
  #secondsElem;

  setTime({
    days,
    hours,
    minutes,
    seconds
  } = {
    days: 0,
    hours: 3,
    minutes: 27,
    seconds: 48
  }) {
    this.#days = days;
    this.#hours = hours;
    this.#minutes = minutes;
    this.#seconds = seconds;

    return this;
  }
  setClassNames({
    days,
    hours,
    minutes,
    seconds
  }) {
    this.#daysClassName = days;
    this.#hoursClassName = hours;
    this.#minutesClassName = minutes;
    this.#secondsClassName = seconds;

    return this;
  }
  setOptions({
    withZeros,
    timerStep
  } = {
    withZeros: true,
    timerStep: 1000
  }) {
    this.#withZeros = withZeros;
    this.#timerStep = timerStep;

    return this;
  }
  init() {
    this.#startTime = (1000 * this.#seconds) +
      (this.#minutes * 1000 * 60) +
      (this.#hours * 1000 * 60 * 60) +
      (this.#days * 1000 * 60 * 60 * 24);

    this._initHTMLElements();
    this._renderTime();
    this._initTimer();
  }

  _initHTMLElements() {
    this.#daysElem = document.querySelector(this.#daysClassName);
    this.#hoursElem = document.querySelector(this.#hoursClassName);
    this.#minutesElem = document.querySelector(this.#minutesClassName);
    this.#secondsElem = document.querySelector(this.#secondsClassName);
  }
  _renderTime() {
    if (this.#withZeros) {
      this.#days = this.#days.toString().length === 1 ? `0${this.#days}` : this.#days;
      this.#hours = this.#hours.toString().length === 1 ? `0${this.#hours}` : this.#hours;
      this.#minutes = this.#minutes.toString().length === 1 ? `0${this.#minutes}` : this.#minutes;
      this.#seconds = this.#seconds.toString().length === 1 ? `0${this.#seconds}` : this.#seconds;
    }

    this.#daysElem.textContent = this.#days;
    this.#hoursElem.textContent = this.#hours;
    this.#minutesElem.textContent = this.#minutes;
    this.#secondsElem.textContent = this.#seconds;
  }
  _initTimer() {
    this.#intervalId = setInterval(() => {
      if (this.#startTime === 0) {
        this.dispose();

        return;
      }

      this.#startTime -= this.#timerStep;

      this._recalcTime();


      this._renderTime();
    }, this.#timerStep);
  }
  _recalcTime() {
    this.#days = Math.floor(this.#startTime / 1000 / 60 / 60 / 24);
    this.#hours = Math.floor((this.#startTime / 1000 / 60 / 60) % 24);
    this.#minutes = Math.floor((this.#startTime / 1000 / 60) % 60);
    this.#seconds = Math.floor((this.#startTime / 1000) % 60);
  }
  dispose() {
    clearInterval(this.#intervalId);
  }
}

new Timer()
  .setTime()
  .setClassNames({
    days: '.days',
    hours: '.hours',
    minutes: '.minutes',
    seconds: '.seconds'
  })
  .setOptions()
  .init()