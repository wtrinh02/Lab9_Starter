export default class MassiveError extends Error {
    constructor(message) {
      super(message);
      this.name = 'MassiveError';
      this.message = 'This is a Massive Error! ' +  message;
    }
  }