let Text  =  document.getElementById('getText');
let Users =  document.getElementById('getUsers');
let Posts =  document.getElementById('getPosts');
let Form  =  document.getElementById('addPost');

Text.addEventListener('click',getText);
function getText(){
    // fetch('sample.txt')
    //     .then(function (response) {
    //         return response.text();
    //     }).then(function (data) {
    //         document.getElementById('output').innerHTML = data;
    //     });

    fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('output').innerHTML = data;
        })
        .catch((err) => console.log(err))
}
Users.addEventListener('click',getUsers);
function getUsers() {
    fetch('users.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let result = '<h2 class="mb-4">Users</h2>';
            data.forEach(function (user) {
                result += `<ul class="list-group mb-3">
              <li class="list-group-item">ID: ${user.id}</li>
              <li class="list-group-item">Name: ${user.name}</li>
              <li class="list-group-item">Email: ${user.email}</li>
            </ul>`;
                document.getElementById('output').innerHTML = result;
            });
        })
}
Posts.addEventListener('click',getPosts);
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let result = '<h2 class="mb-4">Posts</h2>';
            data.forEach(function (post) {
                result += `<ul class="list-group mb-3">
              <li class="list-group-item">Post Title: ${post.title}</li>
              <li class="list-group-item">Post Body :${post.body}</li>
   
            </ul>`;
                document.getElementById('output').innerHTML = result;

            })

        })

}
Form.addEventListener('submit',addPost);
function addPost(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({body:body , title:title})
    }).then(function (res) {
        return res.json();
    }).then(function (data) {
        let result = '<h2>The Data Posted To The API </h2>';
        result += `<ul class="list-group mb-3">
              <li class="list-group-item">ID: ${data.id}</li>
              <li class="list-group-item">Title: ${data.title}</li>
              <li class="list-group-item">Body: ${data.body}</li>
            </ul>`;
        document.getElementById('output').innerHTML = result;
    })


}