var img = document.getElementById('img');
var prev = document.getElementById('prev_btn');
var next = document.getElementById('next_btn');

var images = ['first-image.png', 'second-image.png', 'third-image.png'];

var count = 0;

function next_img(){
    if(count < images.length-1){
        count++;
    }else{
        count = 0;
    }
    var img_src = './images/' + images[count];
    img.src = img_src;
}

function prev_img() {
    if(count > 0){  
        count--;
    }else{
        count = images.length-1 ;
    }
    var img_src = './images/' + images[count];
    img.src = img_src;
}