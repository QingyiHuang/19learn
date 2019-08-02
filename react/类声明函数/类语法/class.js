//创建对象的方法
let obj1 = {}
let obj2 = new Object()

function Fun1() {

}
let obj3 = new Fun1()

class Fun2 {

}
let obj4 = new Fun3()

//类中的构造方法，属性都是写在构造方法中
class human {
    //构造方法
    //一旦被new自动调用，在没有的情况下回调用自己的构造方法
    //不写constructor的类构造方法中返回this即这个对象的地址
    //constructor 就是可以返回这个对象的地址。所以声明后不要写返回值，否则没地址
    constructor() {
        this.name = '11',
        this.age = 12;
    }
    haha () {
        console.log('haha' + this.name)
    }
}

function Pp() {
    this.fun = () => {
        console.log('123')
    }
}
//变量和函数构造函数都是有变量提升
let people = new Pp()
people.fun()

//但是class没有变量提升，因此在调用类之前必须声明

//面向对象有集成的方法，在javascript中有如下:
//原型链继承，冒充继承
function Man() {
    this.name = 'hah'
    this.func = () => {
        console.log(this.name + this.age)
    }
}
function Coo () {
    this.age = '12'
}
var coo = new Coo()
coo.func()

//构造函数的prototype属性就是默认原型对象
//构造函数的prototype的值就是new这个构造函数而来的所有对象的原型

/* 从此，所有new Coo得到的对象的原型都是Man的原型 */
Coo.prototype = new Man()