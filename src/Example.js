export class Example {
  constructor(value) {
    this.value = value
  }

  foo() {
    if (this.value % 2 === 0)
      this.value++
    else
      this.value += 3

    return this
  }
}
