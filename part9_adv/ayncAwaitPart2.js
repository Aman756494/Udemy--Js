function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data fetched");
        },2000)
    });
}

function fetchcommentData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Comment data fetched");
      }, 3000);
    });
}

async function getBlogData() {
    try {
        console.log("Fetching blog data");
        // const postData = await fetchPostData();
        // const commentdata = await fetchcommentData();

        const [postData , commentdata] = await Promise.all([fetchPostData(), fetchcommentData()]);
        console.log(postData);
        console.log(commentdata);

        console.log("fetch is completed");
                 
    } catch (error) {
        console.error("Error fetching blog data" , error)
    }
}
getBlogData();