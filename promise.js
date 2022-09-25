const statusRef = document.querySelector(".status")
const videoRef = document.querySelector(".video")

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(undefined)
        }, 2000);
    })
}


/**
 * 1. Create a function called 'getVideo'
 * 2. Accept a parameter called `subscriptionStatus`
 * 3. Return a new promise inside of the function that:
 * 
 *       -if "VIP" resolve("show video")
 *       - if "FREE" resolve ("show trailer")
 *       - otherwise reject("no video")
 * 
 * 4. console.log the result of getVideo() in main()
 */

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("show video")
        }
        else if (subscriptionStatus === "FREE") {
            resolve("show trailer")
        }
        else {
            reject("no video")
        }

    })
}


//1. Then
// getSubscriptionStatus().then(response => console.log(response))

//2. Async/Await
async function main(){
    const status = (await getSubscriptionStatus())
    statusRef.innerHTML = status;
    try {
        console.log( await getVideo(status))
    }
    catch 
    console.log( await getVideo(status))
}

main();