class Speak {
    constructor(){
        this.name = 'longlongago'
    }
}
class People extends Speak {
    constructor(){
        super()//如果子类需要调用constructor 必须先调用super来实现父类
    }
    haha(){
        console.log(this.name)
    }
}
var pp = new People()
pp.haha()