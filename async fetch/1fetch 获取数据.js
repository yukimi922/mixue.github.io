// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });

  async main(){
	  let res =await fetch('https://jsonplaceholder.typicode.com/posts');
	  return await res.json();
  }
  async getdata() {
  	let data = await cartinfo.cartinfo();
	console.log(data);
  }
// 
  
  
  // const BASRURL ="http://localhost:3000"
  // 
  // const cart = `${BASRURL}/cart`
  // 
  // export default {
  //     async cartinfo(){
  //         let res =await fetch(cart)
  //         return await res.json()
  //     }
  // }
// fetch
// 特点
// 1、第一个参数是URL:
// 2、第二个是可选参数，可以控制不同配置的 init 对象
// 3、使用了 JavaScript Promises 来处理结果/回调:
// 调用fetch函数，传入接口url，然后返回一个promise
// （response），为了获取JSON的内容，我们需要使用 json()方法，
// 这个方法返回的也是一个promise。