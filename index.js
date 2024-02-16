const posts = [
    {
        name: "Choupinette",
        username: "XxBigChoupsxX",
        location: "Lille, France",
        avatar: "assets/ChoupAvatar.jpg",
        post: "assets/ChoupiPost.jpg",
        comment: "❤ Felt Cute, might delete later XoXo ❤",
        likes: 21
    },
    {
        name: "Boulette",
        username: "SaladWizard574",
        location: "Suresnes, France",
        avatar: "assets/BouletteAvatar.png",
        post: "assets/BoulettePost.jpg",
        comment: "Could you believe i am still waiting for my 5th breakfeast ?? SIGHT 😤  ",
        likes: 4
    },
        {
        name: "Roqui",
        username: "FurrySausage59",
        location: "Hazebrouck, France",
        avatar: "assets/RoquiAvatar.jpg",
        post: "assets/roquihug.jpg",
        comment: "Snuggle time with mommy and my sister is the best way to start the day!",
        likes: 152
    }
]


for(let i =  0; i < posts.length; i++) {
    let currentPost = posts[i];
    renderValue(currentPost); }

function renderValue(item) {
    let PostsEl = document.createElement("section");
    PostsEl.innerHTML = `
        <div class="postheader">
        <img src="${item.avatar}" alt="User Avatar" class="avatar">
        <div class="postname">
        <h2>${item.name}</h2>
        <p>${item.location}</p>
        </div>
        </div>
        <img src="${item.post}" alt="User Post" class="post">
        <div class="postfooter">
        <div class="iconlist">
        <img src="assets/icon-heart.png" class="icon">
        <img src="assets/icon-comment.png" class="icon">
        <img src="assets/icon-dm.png" class="icon">
        </div>
        <p class="bold likes">${item.likes} likes</p>
        <p><span class="bold">${item.username} </span> ${item.comment}</p>
        </div>
        
    `;
    document.body.appendChild(PostsEl)}