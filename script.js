fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    let table =
      "<table><tr><th>User ID</th><th>Post ID</th><th>Title</th><th>Body</th></tr>";
    data.forEach((post) => {
      table += `<tr><td>${post.userId}</td><td>${post.id}</td><td>${post.title}</td><td>${post.body}</td></tr>`;
    });
    table += "</table>";
    document.body.innerHTML = table;
  })
  .catch((error) => console.error(error));
