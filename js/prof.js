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


//concel error message on click
setInterval(() => {
    errorConcel.classList.remove('active');
    errorConcel.addEventListener('click', () => {
        clearInterval();
        errorConcel.classList.remove('active');
    });
}, 5000);

//concel success message on click
setInterval(() => {
    successConcel.classList.remove('active');
    errorConcel.addEventListener('click', () => {
        clearInterval();
        successConcel.classList.remove('active');
    });
}, 5000);

//profile animation
// const profileItems = document.querySelectorAll('.animate');

// const profileOptions = {
//     rootMargin: '0px',
//     threshold: 0.5
// }
// const profileObserver= new IntersectionObserver((entries, profileObserver) => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             entry.target.classList.add('active');
//             profileObserver.unobserve(entry.target);
//         }else {
//             return;
//         }
//     });
// }, profileOptions);

//profile animation
// profileItems.forEach(profileItem => {
//         profileObserver.observe(profileItem);
// });
