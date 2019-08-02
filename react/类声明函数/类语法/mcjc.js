function Man() {
    this.name = 'hah'
    this.func = function() {
        console.log(this.name + this.age)
    }
}
function Coo () {
    //冒充继承
    Man.call(this)//this指Coo创建实例的那个对象
    this.age = '12'
}

let man = new Coo()
console.log(man.age + '    ' +man.name +'     ' )
man.func()
