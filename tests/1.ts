class Test {
  static name1: string
  public fc1(): void {
    console.log(111)
  }
  protected fc2(): void {
    console.log(2)
  }
  private fc3(): void {
    console.log(3)
    this.name1 = "2" // 只能通过类访问Test.name1
  }
}

abstract class TestSon extends Test {
  constructor() {
    super()
  }
  fc4() {
    this.fc2()
    this.fc3() // 为私有方法只能在Test类里访问
  }
}
const a = new TestSon() // TestSon为抽象类不能创建实例
a.fc1()
a.fc2()
a.fc3() // 只能在类和子类里访问
console.log(a.name1)
