const email = document.querySelector('#email');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm-password');

const policy = document.querySelector('#confirm-policy')
const not_a_robot = document.querySelector('#not-a-robot');
const cta_btn = document.querySelector('#cta-btn');

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
        if (not_a_robot.checked && policy.checked) {
            cta_btn.disabled = false;
        } else {
            cta_btn.disabled = true;
        }
    })
    not_a_robot.addEventListener('change', (e) => {
        if (policy.checked && not_a_robot.checked) {
            cta_btn.disabled = false;
        }
        else {
            cta_btn.disabled = true;
        }
    })
}
function validateEmail() {
    email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) ? setSuccess(email, '') : setError(email, 'Enter Valid Email');
}
// function validateUsername() { }
function validatePassword() {
    password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/) ? setSuccess(password, '') : setError(password,
        `Enter Strong Password!        `)
    password.value === '' ? setSuccess(password, '') : '';
}

function setError(item, msg) {
    let Element = item.closest(".form-elements").querySelector(".error");
    Element.textContent = msg;
    // item.style.cssText = `
    // outline-color: #ff0033;
    // `;
    // // item.closest(".input-container").querySelector(".icon").style.cssText = `
    // color: #ff0033; 
    // `;
}
function setSuccess(item, msg) {
    let Element = item.closest(".form-elements").querySelector(".error");
    Element.innerHTML = msg;
    // item.style.cssText = `
    // outline-color: 2px solid #5667EC;
    // `;
    // item.closest(".input-container").querySelector(".icon").style.cssText = `
    // color: #5667EC;
    // `;
}