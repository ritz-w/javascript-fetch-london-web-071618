const token = "9c60a38aa85e817abc957ec49f01202de396552f";
fetch('https://api.github.com/user/repos', {
  headers: {
  Authorization: `token ${token}`
  }
}).
  then(res => res.json()).
  then(json => console.log(json))
