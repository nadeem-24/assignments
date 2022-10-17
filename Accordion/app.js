const accordionBtn = document.querySelectorAll('.accordion-btn');
const content = document.querySelectorAll('.accordion-content');


for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', function () {
        if (content[i].style.display == 'block') {
            content[i].style.display = 'none';
            accordionBtn[i].innerHTML = '+';
        } else {
            accordionBtn[i].innerHTML = '-';
            content[i].style.display = 'block';
        }   
    });
}
