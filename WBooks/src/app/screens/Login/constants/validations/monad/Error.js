class Error {
  constructor(messageError) {
    this.messageError = messageError;
  }

  flatMap(validation) {
    return this;
  }

  isSuccess() {
    return false;
  }

  get() {
    return this.messageError;
  }

  getOrElse() {
    return this.messageError;
  }
}

export default Error;
