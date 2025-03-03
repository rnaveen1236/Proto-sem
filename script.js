const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');




resumeLists.forEach((list,idx) => {
    list.addEventListener('click',() => {
       document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');


        
    });
});





portfolioLists.forEach((list,idx) => {
    list.addEventListener('click',() => {
       document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');
    });
});