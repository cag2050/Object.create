
// 原型对象
var A = {
    print: function () {
        console.log('hello');
    }
};

// 实例对象
var B = Object.create(A);

console.log(Object.getPrototypeOf(B) === A); // true
B.print() // hello
console.log(B.print === A.print); // true