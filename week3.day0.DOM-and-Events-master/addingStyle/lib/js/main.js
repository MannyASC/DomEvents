let rightColor= document.querySelector('.right_side');

rightColor.style['background-color'] ='#d3c26f';




let allHeadings = document.querySelectorAll("h1");
for (let i = 0; i < allHeadings.length; i++) {
    allHeadings[i].style['text-shadow']='6px 5px yellow';
    allHeadings[i].style['blur']='2px';
}