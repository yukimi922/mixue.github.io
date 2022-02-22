// async function timeout() {
// 　　return 'hello world';
// }
// console.log(1,timeout())

function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 3000);
    } )
}

// function fun(a){
// 	console.log("testResult1",a)
// }
// doubleAfter2seconds(30).then(restful=>{
// 	console.log("testResult1",restful)
// });

// async function testResult1() {
//     let result = await doubleAfter2seconds(30);
//     console.log("testResult1",result);
// }
// testResult1();
//  function testResult2() {
//     let first =  doubleAfter2seconds(30);
//     let second =  doubleAfter2seconds(50);
//     let third =  doubleAfter2seconds(30);
//     console.log("testResult2",first + second + third);
// }

async function testResult2() {
    let first = await doubleAfter2seconds(30);
    let second = await doubleAfter2seconds(50);
    let third = await doubleAfter2seconds(30);
    console.log("testResult2",first + second + third);
}
testResult2();
// 先说一下async的用法，它作为一个关键字放到函数前面，
// 只有一个作用, 它的调用会返回一个promise 对象。调用一下看看就知道了，怎么调用？
// async 函数也是函数，所以它的调用和普通函数的调用没有什么区别，直接加括号调用就可以了，
// 要想获取到async 函数的执行结果，就要调用promise的then 或catch 来给它注册回调函数，