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
    //get sider meun varables
    let siderMenuTxts = document.querySelectorAll('.sider-menu-txt');
    let paras = document.querySelectorAll('.sider .sider-menu a p');

    siderMenuTxts.forEach(siderMenuTxt => {
        siderMenuTxt.classList.add("active");
    });
   
    paras.forEach(para => {
        para.classList.add("active");
    });

    //changing logo bg & color 
    let logo = document.querySelector('.sider .logo');

    logo.classList.add("Dark_Mood");

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

    //changing logo bg & color 
    let logo = document.querySelector('.sider .logo');

    logo.classList.remove("Dark_Mood");

    localStorage.setItem('active', null);
};

if(ActiveSiderMenu === 'enabled') {
   enableSiderMenu();
}

menu.addEventListener('click', (e) => {
   e.preventDefault();
   ActiveSiderMenu = localStorage.getItem('active');
   
   if(ActiveSiderMenu !== 'enabled'){
       enableSiderMenu();
   } else {
       disableSiderMenu();
   }
});


//show messsage box on click
reply.addEventListener('click', ()=> {
    msgBox.classList.add("active");
    
    concel.addEventListener('click', () => {
        msgBox.classList.remove("active");
    });
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

//intersection observer for sections animations
const cards = document.querySelectorAll('.main .cards .card');

const cardOptions = {
    rootMargin: '0px',
    threshold: 0.5
}
const cardObserver= new IntersectionObserver((entries, cardObserver) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            cardObserver.unobserve(entry.target);
        }else {
            return;
        }
    });
     
}, cardOptions);

//items animation
cards.forEach(card => {
        cardObserver.observe(card);
});

//card icons animation
const cardIcons = document.querySelectorAll('.main .cards .card i');

window.addEventListener('load', () => {
    cardIcons.forEach(cardIcon =>{
        cardIcon.classList.add('active');
    });
});

//messages animation
// const messages = document.querySelectorAll('.message-content');
// const msgsDivs = Array.from(document.querySelector('.messages').children);
// const trans_delay = msgsDivs;

// const messageOptions = {
//     rootMargin: '0px',
//     threshold: 0.75
// }
// const messageObserver= new IntersectionObserver((entries, messageObserver) => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
            // for(i = 0; i <= entries.length; i++) {
            //     entry.target.style.WebkitTransition = `transform 0.5 ease-in ${i}s`;
            //         entry.target.style.transition = `transform 0.5 ease-in ${i}s`;
            //         console.log(entry.target);
            // }
//             entry.target.classList.add('active');
//             messageObserver.unobserve(entry.target);
//         }else {
//             return;
//         }
//     });
     
// }, messageOptions);

 //adding transition delay for every single item
//  for(i = 0; i <= trans_delay.length; i++) {
//     msgsDivs.forEach(msgsDiv => {
//         msgsDiv.style.transition = `all 0.5 ease-in ${i}s`;
//         console.log(secs);
// });
// }


//items animation
// messages.forEach(message => {
//         messageObserver.observe(message);
// });

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

