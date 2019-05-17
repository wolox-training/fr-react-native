class Error {
  constructor(messageError) {
    this.messageError = messageError;
  }

  map(validation) {
    return this;
  }

  isSuccess() {
    return false;
  }

  get() {
    return this.messageError;
  }
}

export default Error;
