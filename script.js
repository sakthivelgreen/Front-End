const email = document.querySelector('#email');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm-password');

const policy = document.querySelector('#confirm-policy')
const not_a_robot = document.querySelector('#not-a-robot');
const cta_btn = document.querySelector('#cta-btn');

const showPassword = document.querySelector('#pass-show-ico');
const hidePassword = document.querySelector('#pass-hide-ico')
const Confirm_showPassword = document.querySelector('#con-pass-show-ico');
const Confirm_hidePassword = document.querySelector('#con-pass-hide-ico');

function main() {
    events();

}
main()
function events() {
    cta_btn.disabled = true;
    email.addEventListener('keyup', (e) => {
        validateEmail();
        email.value === '' ? setSuccess(email, '') : '';
    })
    password.addEventListener('keyup', (e) => {
        validatePassword();
    })
    confirm_password.addEventListener('keyup', (e) => {
        if (password.value !== '') {
            password.value === confirm_password.value ? setSuccess(confirm_password, '') : setError(confirm_password, `Password doesn't match!`)
        }
        confirm_password.value === '' ? setSuccess(confirm_password, '') : '';
    })
    policy.addEventListener('change', (e) => {
        policy.checked ? cta_btn.disabled = false : cta_btn.disabled = true;
        const nextElement = policy.parentElement.nextElementSibling;
        if (nextElement) {
            nextElement.focus();
        }
    })
    not_a_robot.addEventListener('change', (e) => {
        const nextElement = not_a_robot.parentElement.nextElementSibling;
        if (nextElement) {
            nextElement.focus();
        }
    })

    cta_btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('./success.html', '_self');
    })

}
function validateEmail() {
    email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) ? setSuccess(email, '') : setError(email, 'Enter Valid Email');
}
// function validateUsername() { }
function validatePassword() {
    password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/) ? setSuccess(password, '') : setError(password,
        `Enter a password with uppercase, lowercase, numbers, and symbols.`)
    password.value === '' ? setSuccess(password, '') : '';
}

function setError(item, msg) {
    let Element = item.closest(".form-elements").querySelector(".error");
    Element.textContent = msg;
    return false;
}
function setSuccess(item, msg) {
    let Element = item.closest(".form-elements").querySelector(".error");
    Element.innerHTML = msg;
    return true;
}

// Slider Code

let normalContent = document.querySelector('#content1')
const sliderContent = document.querySelector('#content-slide');
const watch_demo = document.querySelector('#watch-demo');
const close_slide = document.querySelector('#close-slide')
const slide = document.querySelector('#slide');


watch_demo.addEventListener('click', (e) => {
    normalContent.parentElement.classList.add('video')
    normalContent.style.display = 'none';
    sliderContent.style.display = 'block';
    animation();
})
close_slide.addEventListener('click', (e) => {
    normalContent.parentElement.classList.remove('video')
    normalContent.style.display = 'block';
    sliderContent.style.display = 'none';
})
let index = 0;
let imageInterval;
document.querySelector('#slides').addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(imageInterval);
    changeImage();
    animation();
})

function animation() {
    imageInterval = setInterval(changeImage, 5000)
}
function changeImage() {
    let src = [
        './static/pexels-edmond-dantes-4347368.jpg',
        './static/pexels-karl-byron-568836130-29549473.jpg',
        './static/pexels-ozer-ozcelik-45417821-29523713.jpg',
        './static/pexels-victor-moragriega-1390556186-29561212.jpg'
    ];
    slide.classList.remove('active');

    if (index >= src.length) index = 0;

    setTimeout(() => {
        slide.src = src[index];
        index++;
        setTimeout(() => {
            slide.classList.add('active');
        }, 100);
    }, 500);
}