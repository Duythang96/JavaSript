let select = document.getElementById('ulList');
let postButton = document.getElementById('btn1');
let photosButton = document.getElementById('btn2');
let albumButton = document.getElementById('btn3');

let hTitle= document.createElement('h');

//hiển thị post
async function getPostList() {
    // Gọi API
    let post = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    displayPost(post.data);
    console.log(post.data);
}
function displayPost(posts) {
    
    for(let i=0; i<posts.length;i++){
        let liList= document.createElement('li');
        liList.innerText = posts[i].title;
        //liList.value = keys[i];
        
       // console.log(select);
        select.insertAdjacentElement('afterend',liList);
    }
    postClick();
    
}
//post click
function postClick(){
    postButton.classList.add('background');
    albumButton.classList.remove('background');
    photosButton.classList.remove('background');
    hTitle.innerHTML = "Type: posts <br>";
    postButton.insertAdjacentElement('beforebegin',hTitle);
};
postButton.addEventListener('click',function(){
    getPostList();
});

//------------ hien thi photos
photosButton.addEventListener('click',function(){
    getPhotosList();
});

async function getPhotosList() {
    // Gọi API
    let photos = await axios.get('https://jsonplaceholder.typicode.com/albums');
    
    displayPhotos(photos.data);
    //console.log(post.data);
}
function displayPhotos(photos) {
    
    postButton.classList.remove('background');
    albumButton.classList.remove('background');
    photosButton.classList.add('background');
    hTitle.innerHTML = "Type: photos <br>";
    for(let i=0; i<photos.length;i++){
        let liList= document.createElement('li');
        liList.innerText = photos[i].title;
        //liList.value = keys[i];
        
       // console.log(select);
        select.insertAdjacentElement('afterend',liList);
    }
    
}

//------------ hien thi allbums
albumButton.addEventListener('click',function(){
    getAlbumsList();
});

async function getAlbumsList() {
    // Gọi API
    let albums = await axios.get('https://jsonplaceholder.typicode.com/photos');
    
    displayAlbums(albums.data);
    //console.log(albums.data);
}
function displayAlbums(albums) {
    
    postButton.classList.remove('background');
    albumButton.classList.add('background');
    photosButton.classList.remove('background');
    hTitle.innerHTML = "Type: Albums <br>";
    for(let i=0; i<albums.length;i++){
        let liList= document.createElement('li');
        liList.innerText = albums[i].title;
        //liList.value = keys[i];
        
       // console.log(select);
        select.insertAdjacentElement('afterend',liList);
    }
    
}
















getPostList();