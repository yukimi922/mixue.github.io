 // fetch('https://jsonplaceholder.typicode.com/posts', {
	//     method: 'POST',
	//     body: JSON.stringify({
	//         name: "ceido",
	//         age: 101
	//     }),
	//     headers: {
	//       "Content-type": "application/json; charset=UTF-8"
	//     }
	//   })
	//   .then(response => {
	// 	 return response.json()
	//   })
	//   .then(json => console.log(json))
	// 
	
	
async function main(data){
	let res=await fetch('https://jsonplaceholder.typicode.com/posts', {
	    method: 'POST',
	    body: JSON.stringify(data),
	    headers: {
	      "Content-type": "application/json; charset=UTF-8"
	    }
	  })
	  return await res.json()
}

async function getdata() {
	let msg={
		name: "ceido",
		age: 101
	}
	  	let res =  await main(msg);
	  	console.log(res);
	  }
	  getdata();