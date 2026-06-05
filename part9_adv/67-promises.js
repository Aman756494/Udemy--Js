function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true; 
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Error fetching data");
            }
        }, 3000)
    })
}

fetchData()
    // .then((data) => console.log(data))
    .then((data) => {
        console.log(data);
        //return data.toLowerCase();
        return `Hello JS`;
    })

    .then((value) => {
        console.log(value);
        
    })

    .catch((error) => console.error(error))
 