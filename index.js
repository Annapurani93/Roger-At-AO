window.onload = choosePic;

var myPix = new Array("https://annapurani93.files.wordpress.com/2021/01/rf1.png","https://annapurani93.files.wordpress.com/2021/01/rf2-1.png","https://annapurani93.files.wordpress.com/2021/01/rf3-1.png","https://annapurani93.files.wordpress.com/2021/01/rf4.png","https://annapurani93.files.wordpress.com/2021/01/rf5.png", "https://annapurani93.files.wordpress.com/2021/01/rf6.png", "https://annapurani93.files.wordpress.com/2021/01/rf7-1.png", "https://annapurani93.files.wordpress.com/2021/01/rf8.png","https://annapurani93.files.wordpress.com/2021/01/rf9.png", "https://annapurani93.files.wordpress.com/2021/01/rf10.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}