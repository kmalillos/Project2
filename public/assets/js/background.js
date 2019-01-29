$(document).ready(function() {

    // var prevIndex;

    var srcs = [
        "/assets/img/background/bulldog.jpg",
        "/assets/img/background/carried-puppy.jpg",
        "/assets/img/background/chihuahua.jpg",
        "/assets/img/background/chocolate-lab.jpg",
        "/assets/img/background/flower-dog.jpg",
        "/assets/img/background/fluffy-puppy.jpg",
        "/assets/img/background/puppy-beach.jpg",  
        "/assets/img/background/puppy-sleepy.jpg",
        "/assets/img/background/yellow-lab.jpg"];

    function randomizeSrcIndex() {
        return Math.floor(Math.random()*srcs.length);
    };
    
    function updateBGimage(index) {
        var image = srcs[index];
        var url = `url(${image})`
        $("body").css("background-image", url)
    };

    updateBGimage(randomizeSrcIndex());

});