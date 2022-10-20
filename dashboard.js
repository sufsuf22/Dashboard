let darkMood = localStorage.getItem('dark_mood');
let mood = document.querySelector('#mood');
const profileImge = document.querySelector('#profile-img');
const profileMenu = document.querySelector('.profile-menu');
const links = document.querySelectorAll('.profile-menu .link');
const caret = document.querySelector('.caret');


 const enableDarkMood = () => {
     document.body.classList.add('dark_mood');
     
     let lights = document.querySelectorAll('.light-mood');
     let iconLMood = document.querySelector('#icon-l-mood');
     let darks = document.querySelectorAll('.dark-mood');
     let logo = document.querySelector('.sider .logo');

     //hiding moon icon
     darks.forEach(dark => {
        dark.classList.add('active');
     });

     //showing sun icon
     lights.forEach(light => {
        light.classList.add('active');
     });
     iconLMood.style.display = 'block';

     //change logo colors
     logo.classList.add('Dark-Mood');

     localStorage.setItem('dark_mood', 'enabled');
 };

 const disableDarkMood = () => {
    document.body.classList.remove('dark_mood');

    let lights = document.querySelectorAll('.light-mood');
    let iconLMood = document.querySelector('#icon-l-mood'); 
    let darks = document.querySelectorAll('.dark-mood');
    let logo = document.querySelector('.sider .logo');

    //showing moon icon
    darks.forEach(dark => {
        dark.classList.add('active');
        setInterval(() => {
            window.location = window.location.href;
            clearInterval();
        }, 100);
     });

    //hinding sun icon
    lights.forEach(light => {
        light.classList.add('active');
     });
    iconLMood.style.display = 'none';

    //change logo colors
    logo.classList.add('Dark-Mood');

    localStorage.setItem('dark_mood', null);
};

if(darkMood === 'enabled') {
    enableDarkMood();
}

mood.addEventListener('click', (e) => {
    e.preventDefault();
    darkMood = localStorage.getItem('dark_mood');
    
    if(darkMood !== 'enabled'){
        enableDarkMood();
    } else {
        disableDarkMood();
    }
});

//displaying profile menu
profileImge.addEventListener('click', e => {
    e.preventDefault();

    profileMenu.classList.toggle('active');
    caret.classList.toggle('active');

    //clicking on a menu link
    links.forEach(link => {
        link.addEventListener('click', () => {
            profileMenu.classList.remove("active");
        });
    });
});

//showing notifications
const email_notify = document.querySelector('.email-notification');
const proj_notify = document.querySelector('.request-notification');
const email_icon = document.querySelector('.profile .Two');
const proj_icon = document.querySelector('.profile .One');

email_icon.addEventListener('click', e => {
    e.preventDefault();
    email_notify.classList.toggle('active');
   
    if(proj_notify.classList.contains('active')) {
        proj_notify.classList.toggle('active');
    }
});

proj_icon.addEventListener('click', e => {
    e.preventDefault();
    proj_notify.classList.toggle('active');
    // email_notify.classList.remove('active');
    if(email_notify.classList.contains('active')) {
        email_notify.classList.remove('active');
    }
});

//update projects counter
// const projects = document.querySelector('.projects');

// setInterval(() => {
//     let xhr = new XMLHttpRequest();
//    xhr.open("GET", "php/projects.php", true);
   
//    xhr.onload = () => {
//     if(xhr.readyState === XMLHttpRequest.DONE){
//         if(xhr.status == 200) {
//             let data = xhr.response;
//             projects.textContent = data;
//             }
//         }
//    }
//    xhr.send();
// }, 500);

//update emails counter
// const emails = document.querySelector('.emails');

// setInterval(() => {
//     let xhr = new XMLHttpRequest();
//    xhr.open("GET", "php/emails.php", true);
   
//    xhr.onload = () => {
//     if(xhr.readyState === XMLHttpRequest.DONE){
//         if(xhr.status == 200) {
//             let data = xhr.response;
//             emails.textContent = data;
//             }
//         }
//    }
//    xhr.send();
// }, 500);

//update visitors counter
// const visitors = document.querySelector('.visitors');

// setInterval(() => {
//     let xhr = new XMLHttpRequest();
//    xhr.open("GET", "php/visitors.php", true);
   
//    xhr.onload = () => {
//     if(xhr.readyState === XMLHttpRequest.DONE){
//         if(xhr.status == 200) {
//             let data = xhr.response;
//             visitors.textContent = data;
//             }
//         }
//    }
//    xhr.send();
// }, 500);

//animated counter for emails, projects and visitors
let Counters = document.querySelectorAll(".counter");
let interval = 2000;

Counters.forEach(Counter => {
    let start = 0;
    let end = parseInt(Counter.getAttribute("data-val"));
    let duration = Math.floor(interval/end);
    let counter = setInterval(() => {
        start += 1;
        Counter.textContent = start;
        if(start == end) {
            clearInterval(counter);
        }
    },duration);

});

//checking if user loged in the same time useing other browser.
// function checkSessionId() {
//     const session_id = "<?php echo $user_id;?>";

//     fetch('php/check_login.php').then(function(response){
//         return response.json();
//     }).then(function(responseData){
//         if(responseData == 'logout') {
//             window.location.href = 'login.php';
//             console.log(responseData);
//         }
//     });
// }

// setInterval(()=> {
//     checkSessionId();
// }, 5000);