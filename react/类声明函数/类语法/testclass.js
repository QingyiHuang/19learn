function Man() {
    this.name = 'hah'
    this.func = function() {
        console.log(this.name + this.age)
    }
}
function Coo () {
    this.age = '12'
}

// Coo.prototype = new Man()

// let coo = new Coo()
// console.log(coo.age + '    ' +coo.name +'     ' + coo.func())

Man.prototype = new Coo()
let man = new Man()
console.log(man.age + '    ' +man.name +'     ' + man.func())
