class Quarter {
  value: number = 0.25;
  get Value() {
    return this.value;
  }
  set Value(newValue: number) {
    this.value = newValue;
  }

  getImageUrl(): string {
    return "img/bitcoin.png";
  }
}
