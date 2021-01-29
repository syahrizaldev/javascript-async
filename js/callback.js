// JavaScript Async Callback Example
const posts = [
   {
      id: 1,
      title: 'Post Title One',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eum sapiente tempora autem?',
   },
   {
      id: 2,
      title: 'Post Title Two',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis repellendus.',
   },
   {
      id: 3,
      title: 'Post Title Three',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium voluptates animi amet eum.',
   },
];

const showPosts = document.getElementById('showPosts');

function getPosts() {
   setTimeout(() => {
      let output = '<h1 class="title title-larges">Get Posts Data</h1>';

      posts.forEach((post) => {
         output += `
            <ul class="article">
               <li>Id: ${post.id}</li>
               <li>Title: ${post.title}</li>
               <li>Body: ${post.body}</li>
            </ul>
         `;
      });

      showPosts.innerHTML = output;
   }, 2000);
}

function createPost(post, callback) {
   setTimeout(() => {
      posts.push(post);
      callback();
   }, 3000);
}

createPost(
   {
      id: 4,
      title: 'Post Title Four',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam neque aliquam voluptate ad!',
   },
   getPosts,
);
