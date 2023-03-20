/**PROMISES
 * 
 * Something that gives you a value some time in the future
 */

// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
// const emailRef = document.querySelector(".email");
// console.log(emailRef)
// 1. Then

// fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    // console.log(response.json())
    // response.json().then(data => {
    //     console.log(data)
    //     emailRef.innerHTML = data.name;
    // })
//     return response.json()
// })
// .then(data => {
//     console.log(data)
//     emailRef.innerHTML = data.email
// })

// 2. Async/Await
// async function main() {
//     console.log(1)
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     console.log(2)
//     const data = await response.json()
//     console.log(3)
//     console.log(data)
//     emailRef.innerHTML = data.name
// }

// main();

// const statusRef = document.querySelector('.status')

// function getSubscriptionStatus () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("VIP")
//         }, 2000);
//     })
// }

// //1.Then
// // getSubscriptionStatus().then(response => console.log(response))

// //2. Async/Await
// async function main() {
//     console.log(await getSubscriptionStatus())
//     statusRef.innerHTML = status
// }

// main()

//CHALLENGE

/**
 * 1. Create a function called `getVideo`
 * 2. Accept a parameter
 */