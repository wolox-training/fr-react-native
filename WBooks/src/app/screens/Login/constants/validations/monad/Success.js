class Success {
  constructor(value) {
    this.value = value;
  }

  map(validation) {
    return validation(this.value);
  }

  isSuccess() {
    return true;
  }

  get() {
    return this.value;
  }
}

export default Success;
