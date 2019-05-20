class Success {
  constructor(value) {
    this.value = value;
  }

  flatMap(validation) {
    return validation(this.value);
  }

  isSuccess() {
    return true;
  }

  get() {
    return this.value;
  }

  getOrElse() {
    return '';
  }
}

export default Success;
