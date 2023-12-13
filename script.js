let posts = [
  { title: "Post one", body: "this is post one" },
  { title: "Post two", body: "this is post two" },
];

let lastActivityTime = new Date();

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
      document.body.innerHTML = output;
    });
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      let error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length !== 0) {
        resolve(posts.pop());
      } else {
        reject("Array is empty");
      }
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}

// Call createPost and updateLastUserActivityTime
Promise.all([
  createPost({ title: "New Post", body: "this is a new post" }),
  updateLastUserActivityTime(),
])
  .then((results) => {
    console.log("Posts:", posts);
    console.log("Last Activity Time:", results[1]);

    // Delete the last post
    return deletePost();
  })
  .then((deletedPost) => {
    console.log("Deleted Post:", deletedPost);
    console.log("Remaining Posts:", posts);
  })
  .catch((error) => console.error(error));
