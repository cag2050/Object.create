
// ԭ�Ͷ���
var A = {
    print: function () {
        console.log('hello');
    }
};

// ʵ������
var B = Object.create(A);

console.log(Object.getPrototypeOf(B) === A); // true
B.print() // hello
console.log(B.print === A.print); // true