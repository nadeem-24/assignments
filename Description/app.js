const htmlButton = document.querySelector('.btn-html');
const cssButton = document.querySelector('.btn-css');
const jsButton = document.querySelector('.btn-js');
const infoTab = document.querySelector('.info');

let htmlText = 'HTML is the standard markup language for Web pages.With HTML you can create your own Website.';
let cssText = 'CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.';
let jsText = 'JavaScript is the programming language of the Web.';

htmlButton.addEventListener('click', function(){
    console.log('Hi');
    infoTab.innerHTML = htmlText;
});

cssButton.addEventListener('click', function(){
    console.log('Hi');
    infoTab.innerHTML = cssText;
});

jsButton.addEventListener('click', function(){
    console.log('Hi');
    infoTab.innerHTML = jsText;
});