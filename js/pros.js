let ActiveSiderMenu = localStorage.getItem('active');
const menu = document.querySelector('.menu');
const sider = document.querySelector('.sider');
const siderMenuTxts = document.querySelectorAll('.sider-menu-txt');
const paras = document.querySelectorAll('.sider .sider-menu a p');
const reply = document.querySelector('.message-action a .Reply');
const msgBox = document.querySelector('.message-box');
const concel = document.querySelector(".message-box .concel");
const errorConcel = document.querySelector('.error .er-concel');
const successConcel = document.querySelector('.success .success-concel');

const enableSiderMenu  = () => {
    sider.classList.add('active');
    
    let siderMenuTxts = document.querySelectorAll('.sider-menu-txt');
    let paras = document.querySelectorAll('.sider .sider-menu a p');

    siderMenuTxts.forEach(siderMenuTxt => {
        siderMenuTxt.classList.add("active");
    });
   
    paras.forEach(para => {
        para.classList.add("active");
    });

    localStorage.setItem('active', 'enabled');
};

const disableSiderMenu = () => {
    sider.classList.remove('active');
    
    let siderMenuTxts = document.querySelectorAll('.sider-menu-txt');
    let paras = document.querySelectorAll('.sider .sider-menu a p');

    siderMenuTxts.forEach(siderMenuTxt => {
        siderMenuTxt.classList.remove("active");
    });
   
    paras.forEach(para => {
        para.classList.remove("active");
    });

    localStorage.setItem('active', null);
};

if(ActiveSiderMenu === 'enabled') {
   enableSiderMenu();
}

menu.addEventListener('click', () => {
   // e.preventDefault();
   ActiveSiderMenu = localStorage.getItem('active');
   
   if(ActiveSiderMenu !== 'enabled'){
       enableSiderMenu();
   } else {
       disableSiderMenu();
   }
});

//requests animation
// const requestCards = document.querySelectorAll('.request-card');

// const reqCardOptions = {
//     rootMargin: '0px',
//     threshold: 0.75
// }
// const reqCardObserver= new IntersectionObserver((entries, reqCardObserver) => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             entry.target.classList.add('active');
//             reqCardObserver.unobserve(entry.target);
//         }else {
//             return;
//         }
//     });
// }, reqCardOptions);

//items animation
// requestCards.forEach(requestCard => {
//         reqCardObserver.observe(requestCard);
// });